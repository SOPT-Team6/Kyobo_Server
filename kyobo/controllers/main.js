const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const responseMessage = require('../modules/responseMessage');
const { mainService }= require('../services/mainService');

//메인뷰
module.exports = {
  getRb: async (req, res) => {
    try {
      const Rb = await getRbList();
      res.status(statusCode.OK.send(util.success(statusCode.OK, "리딩북리스트 가져오기 성공", Rb)))
    } catch (err) {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "리딩북리스트 가져오기 실패"));
    }
  },

  getNb: async (req, res) => {
    try {
      const Nb = await getNbList();
      res.status(statusCode.OK.send(util.success(statusCode.OK, "뉴북리스트 가져오기 성공", Nb)))
    } catch (err) {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "뉴북리스트 가져오기 실패"));
    }
  }
}