const { body, validationResult } = require("express-validator");

const addBook = () => {
  return [
    body("name")
        .not().isEmpty()
        .withMessage("Book name"),
    body("price")
        .not().isEmpty()
        .isNumeric()
        .withMessage("Price Empty!"),
    body("author")
        .not().isEmpty()
        .withMessage("Author"),
    body("isbn")
        .not().isEmpty()
        .isNumeric()
        .isLength(10)
        .withMessage("ISBN zaaval 10 orontoi baih shaardlagatai!"),
    body("pubdate")
        .isDate()
        .isLength({min: 0})
        .withMessage("Must be date!"),
  ];
};

exports.addBook = addBook;