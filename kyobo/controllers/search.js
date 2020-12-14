const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const responseMessage = require('../modules/responseMessage');
const sequelize = require("sequelize");
const Op = sequelize.Op;
const { Book, Search } = require('../models');

module.exports = {
  searchInfo: async (req, res) => {
    const keyword = req.params.keyword;
    if (!keyword) {
      res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
      try{
        const result = await Book.findAll({
          where: {
                [Op.or]: [
                    {
                      book_name: {
                        [Op.like]: '%' + keyword +'%'
                      }
                    },
                    {
                      book_author: {
                        [Op.like]: '%' + keyword + '%'
                      }
                    }
                  ]
            }
          },
          )
        res.status(statusCode.OK).send(util.success(statusCode.OK, "책 검색 성공", result))
      } catch (err) {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "책 검색 실패"));
      }
    },

    popularKeyword: async (req, res) => {
        try{
          const result = await Search.findAll({});
          console.log(result);
          res.status(statusCode.OK).send(util.success(statusCode.OK, "인기 검색어 가져오기 성공", result))
        } catch (err) {
          console.log(err);
          res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "인기 검색어 가져오기 실패"));
        }
      }
}