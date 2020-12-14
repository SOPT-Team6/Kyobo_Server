const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const responseMessage = require('../modules/responseMessage');
const { Book } = require('../models');

//상세보기
module.exports = {
  getReadingBookInfo: async (req, res) => {
    const { book_idx } = req.body;
    
    if (book_idx === undefined) {
      res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
      try{
        const result = await Book.findAll({
          where: {
            id: book_idx
          },
          //"SELECT `book_idx`, `book_img`, `book_kind`, `book_name`, `book_author`, `book_info` FROM `Book` AS `Book` WHERE `Book`.`id` = '1';"
          //이렇게 실행했을 때 실제로 구현되는 쿼리문이에요! 어느 부분을 바꿔야 하는지 감이 오시죵?! 컬럼명으로 맞춰주셔야 합니다! 다른 부분도 그렇게 되어있네요!
        })
        console.log(result);
        res.status(statusCode.OK).send(util.success(statusCode.OK, "책 조회 성공", result))
      } catch (err) {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "책 조회 실패"));
      }
  },

  getNewBookInfo : async (req, res) => {
    const { book_idx } = req.body;
    
    if (book_idx === undefined) {
      res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
      try{
        const result = await Book.findAll({
          where: {
            id: book_idx
          },
        })
        console.log(result);
        res.status(statusCode.OK).send(util.success(statusCode.OK, "책 조회 성공", result))
      } catch (err) {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "책 조회 실패"));
      }
  }
  
}