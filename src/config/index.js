const Config = {
  APP_URL: process.env.REAT_APP_URL,
  API_URL: process.env.REACT_APP_API_URL
};

const theme = {
  whitespaceS: process.env.REACT_APP_WHITHESPACES,
  whitespaceM: process.env.REACT_APP_WHITHESPACEM,
  grey: process.env.REACT_APP_GREY,
  primary: process.env.REACT_APP_PRIMARY,
  brown: process.env.REACT_APP_BROWN,
  brownLight: process.env.REACT_APP_BROWNLIGHT,
  yellowDark: process.env.REACT_APP_YELLOWDARK,
  orange: process.env.REACT_APP_ORANGE,
  textWhite: process.env.REACT_APP_TEXTWHITE
};

export default Config;
export { theme };
