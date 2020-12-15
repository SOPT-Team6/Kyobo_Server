const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const responseMessage = require('../modules/responseMessage');
const { ReadingBook, NewBook } = require('../models');

//상세보기
module.exports = {
  getReadingBookInfo: async (req, res) => {
    const { book_idx } = req.body;
    
    if (book_idx === undefined) {
      res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
      try{
        const result = await ReadingBook.findAll({
          where: {
            book_idx: book_idx
          },
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
        const result = await NewBook.findAll({
          where: {
            book_idx: book_idx
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