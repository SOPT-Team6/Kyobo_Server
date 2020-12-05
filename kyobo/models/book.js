module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Book', {
    //pk로 책 인덱스 번호
      book_idx: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    //s3업로드 책 img
      book_img: {
          type: DataTypes.STRING(200),
          allowNull: false,
      },
      //책 종류 (ex: e-book)
      book_kind: {
          type: DataTypes.STRING(20),
          allowNull: false,
      },
      //책 제목
      book_name: {
          type: DataTypes.STRING(200),
          allowNull: false,
      },
      //책 저자
      book_author: {
          type: DataTypes.STRING(200),
          allowNull: false,
      },
      //책 내용
      book_info: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
  }, {
      freezeTableName: true,
      timestamps: false,
  });
};