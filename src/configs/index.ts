const JWT_EXPIRES_TIME = "10000h";
const JWT_SECRET_KEY = "1A674D1764121DAEB5B6223FA701FD85CE2E136040C4F5C185FFA7D13FCBB52B";
const JWT_REFRESH_EXPIRES_TIME = "7d";
const JWT_REFRESH_SECRET_KEY = "44F91E41CF6FC28CC99604A3FCDA62FA28E047C626CDD9DA66BE1E0AD681E57A";
const MAX_RECORDS_PER_REQ = 10;
const SESSION_SECRET_KEY = "keyboard cat";
const TIME_REFRESH_TOKEN_EXPIRE = 7 * 24 * 60 * 60 * 1000;

export default {
  JWT_EXPIRES_TIME,
  JWT_SECRET_KEY,
  MAX_RECORDS_PER_REQ,
  SESSION_SECRET_KEY,
  JWT_REFRESH_EXPIRES_TIME,
  JWT_REFRESH_SECRET_KEY,
  TIME_REFRESH_TOKEN_EXPIRE,
};
