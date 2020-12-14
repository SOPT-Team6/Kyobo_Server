const { Book } = require('../models');

module.exports = {
  getRbList: async() => {
    try{
      const Rb = await Book.findAll({
        include: [
          {
            model:Book, 
            attributes: [
              'book_img',
              'book_kind',
              'book_name',
              'book_author']
            }]
      });
      //model 부분은 join 할때나 다른 테이블과 연관이 있을 때 주로 사용해요!
      //그래서 한 테이블에서 정보를 가져온다면 include model 보다 attributes만 써주시면 됩니다!
      //그리고 클라이언트가 각 데이터를 구별할 수 있는 고유값인 book_idx를 항상 같이 넘겨주세요!
      //그렇게 해야 상세보기에서 where문에 book_idx를 적용할 수 있겠죠?!
      //user로 따지면 jwt token값으로 유저를 구별하기 위해 클라이언트랑 토큰을 주고받겠죠?!
      //아래 뉴북리스트도 마찬가지입니다!
      return Rb;
      } catch (err){
        console.log(err);
      }
    },
    getNbList: async() => {
      try{
        const Nb = await Book.findAll({
          include: [
            {
              model:Book, 
              attributes: [
                'book_img']
              }],
        exclude: [
          {
            model: Book,
            attributes: [
              'book_kind',
              'book_name',
              'book_author']
        }]});
        return Nb;
        } catch (err){
          console.log(err);
        }
      }
  };