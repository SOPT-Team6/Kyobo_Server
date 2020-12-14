const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const responseMessage = require('../modules/responseMessage');
const { mainService }= require('../services/mainService');
// 여기서 mainService기능이 잘 안 먹혔을 것 같아요!
// service에도 index.js를 놔두시고 mainService를 module.exports 하시는게 좋아요!
// 그리고 await 다음에는 해당 mainService를 변수로 지정해놓고 사용하지 않아서 못 불러와요!
// mainService.getRbList(); 같이 해주시면 좋겠죠?!!

//메인뷰
module.exports = {
  getRb: async (req, res) => {
    try {
      const Rb = await mainService.getRbList();
      res.status(statusCode.OK).send(util.success(statusCode.OK, "리딩북리스트 가져오기 성공", Rb))
    } catch (err) {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "리딩북리스트 가져오기 실패"));
    }
  },

  getNb: async (req, res) => {
    try {
      const Nb = await mainService.getNbList();
      res.status(statusCode.OK).send(util.success(statusCode.OK, "뉴북리스트 가져오기 성공", Nb))
    } catch (err) {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "뉴북리스트 가져오기 실패"));
    }
  }
}