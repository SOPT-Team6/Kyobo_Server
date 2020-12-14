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