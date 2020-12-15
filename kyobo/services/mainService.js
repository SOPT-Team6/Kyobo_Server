const { ReadingBook, NewBook } = require('../models');

module.exports = {
  getRbList: async () => {
    try {
      const Rb = await ReadingBook.findAll({
        attributes: [
          'book_idx',
          'book_img',
          'book_kind',
          'book_name',
          'book_author'
        ]
      });
      return Rb;
    } catch (err) {
      console.log(err);
    }
  },
  getNbList: async () => {
    try {
      const Nb = await NewBook.findAll({
        attributes: [
          'book_idx',
          'book_img'
        ]
      });
      return Nb;
    } catch (err) {
      console.log(err);
    }
  }
};