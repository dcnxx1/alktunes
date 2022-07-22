module.exports = {
    
    ERRORS: {
        ERR_JWT_MALFORMED: {
            ERR: "JWT_MALFORMED",
            statusCode: 403,
            message: "JWT Malformed"
        },
        ERR_USR_NOT_EXIST : {
            ERR: "USR_NOT_EXIST",
            statusCode: 500,
            message: "No such user exists"
        },
        ERR_EMAIL_EXIST : {
            FOR: "EMAIL",
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

    SUCCESS:{
        SUCCESS_USR_CREATED: {
            SUCCESS: "USR_CREATED",
            statusCode: 201,
            message: "User has successfuly been created",
            // token : (token) => token
        },
        SUCCESS_USR_EXIST: {
            SUCCESS: "USR_EXIST",
            statusCode: 200,
            message: "User exists",
            // token : (token) => token
        }
     },
    

     // extension for frontend only...

     FORM_ERR : {
        ERR_MIN_CHARS_PASS: {
            FOR: "PASSWORD",
            ERR: "MIN_CHARS_PASS",
            message: `Password must be atleast 5 characters.`
        },
        ERR_MIN_CHARS_USR: {
            FOR: "USERNAME",
            ERR: "MIN_CHARS_USR",
            message: `Username must be atleast 5 characters.`
        },
        ERR_SPECIAL_CHARS_PASS: {
            FOR: "PASSWORD",
            ERR: "SPECIAL_CHARS_PASS",
            message: "Password should not contain special characters."
        },
        ERR_SPECIAL_CHARS_USR: {
            FOR: "USERNAME",
            ERR: "SPECIAL_CHARS_USR",
            message: "Username should not contain special characters."
        },
        ERR_NO_INPUT : {
            ERR: "NO_INPUT",
            message: "Please fill in all the fields."
        },

        ERR_PASS_DONT_MATCH: {
            FOR: "PASSWORD",
            ERR: "PASS_DONT_MATCH",
            message: "Passwords do not match!"
        },
        ERR_USR_CONTAINS_NUMERICAL: {
            FOR: "USERNAME",
            ERR: "USR_CONTAINS_NUMERICAL",
            message: "Username cannot contain numbers",
        },
        ERR_EMAIL_EMPTY: {
            FOR: "EMAIL",
            ERR: "EMAIL_EMPTY",
            message: "Email cannot be empty"
        },
        REJECT: {
            CODE: "REJECT"
        },

        ERR_PLAYLIST_EMPTY: {
            FOR: "PLAYLIST",
            ERR: "PLAYLIST_EMPTY",
            message: "Please fill in a name for you playlist"
        },
        ERR_SPECIAL_CHARS_PLAYLIST: {
            FOR: "PLAYLIST",
            ERR: "SPECIAL_CHARS_PLAYLIST",
            message: "Please pick another name"
        },
        ERR_MIN_CHARS_PLAYLIST: {
            FOR: "PLAYLIST",
            ERR: "MIN_CHARS_PLAYLIST",
            message: "Playlist name must contain 3 or more characters"
        },
        ERR_PLAYLIST_STARTS_WITH_NUM: {
            FOR: "PLAYLIST",
            ERR: "PLAYLIST_STARTS_WITH_NUM",
            message: "Playlist cannot start with a number"
        }
     },

     FORM_SUCCESS: {
        PASS: {
            CODE: "PASS"
        }
     }

   
     
}