"use strict";

module.exports = {
  ERRORS: {
    ERR_JWT_MALFORMED: {
      ERR: "JWT_MALFORMED",
      statusCode: 403,
      message: "JWT Malformed"
    },
    ERR_USR_NOT_EXIST: {
      ERR: "USR_NOT_EXIST",
      statusCode: 500,
      message: "No such user exists"
    },
    ERR_EMAIL_EXIST: {
      ERR: "EMAIL_EXIST",
      statusCode: 500,
      message: "Email already exists"
    },
    ERR_USER_EXIST: {
      ERR: "USER_EXIST",
      statusCode: 500,
      message: "Username already exists"
    },
    ERR_EMAIL_USER_EXIST: {
      ERR: "EMAIL_USER_EXIST",
      statusCode: 500,
      message: "Username and Email address already exist"
    }
  },
  SUCCESS: {
    SUCCESS_USR_CREATED: {
      SUCCESS: "USR_CREATED",
      statusCode: 201,
      message: "User has successfuly been created" // token : (token) => token

    },
    SUCCESS_USR_EXIST: {
      SUCCESS: "USR_EXIST",
      statusCode: 200,
      message: "User exists" // token : (token) => token

    }
  },
  // extension for frontend only...
  FORM_ERR: {
    ERR_MIN_CHARS_PASS: {
      ERR: "MIN_CHARS_PASS",
      message: "Password must be atleast 5 characters."
    },
    ERR_MIN_CHARS_USR: {
      ERR: "MIN_CHARS_USR",
      message: "Username must be atleast 5 characters."
    },
    ERR_SPECIAL_CHARS_PASS: {
      ERR: "SPECIAL_CHARS_PASS",
      message: "Password should not contain special characters."
    },
    ERR_SPECIAL_CHARS_USR: {
      ERR: "SPECIAL_CHARS_USR",
      message: "Username should not contain special characters."
    },
    ERR_NO_INPUT: {
      ERR: "NO_INPUT",
      message: "Please fill in all the fields."
    },
    ERR_PASS_DONT_MATCH: {
      ERR: "PASS_DONT_MATCH",
      message: "Passwords do not match!"
    },
    REJECT: {
      CODE: "REJECT"
    }
  },
  FORM_SUCCESS: {
    PASS: {
      CODE: "PASS"
    }
  }
};