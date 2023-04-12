import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export const fontSize = {
  font6: metrics.screenWidth * (6 / 365),
  font8: metrics.screenWidth * (8 / 365),
  font10: metrics.screenWidth * (10 / 365),
  font12: metrics.screenWidth * (12 / 365),
  font14: metrics.screenWidth * (14 / 365),
  font16: metrics.screenWidth * (16 / 365),
  font18: metrics.screenWidth * (18 / 365),
  font20: metrics.screenWidth * (20 / 365),
  font22: metrics.screenWidth * (22 / 365),
  font24: metrics.screenWidth * (24 / 365),
  font26: metrics.screenWidth * (26 / 365),
  font28: metrics.screenWidth * (28 / 365),
  font30: metrics.screenWidth * (30 / 365),
};



export const colors = {
  //app color
  APP_COLOR: '#015CAB',
  BROWN: '#ac8686',
  GREEN: '#31adad',
  PURPLE: '#0E0BA3',
  LIGHT_GREY: '#f4f4f4',
  DARK_GREY: '#a19d9d',
  DARK_GREEN: '#a19d9d',
  DARK_BLUE: '#0e0ba3',
  RED: '#dd1f13',
  DARK_BALCK: '#000000',
  LIGHT_BLUE: '#82c8dc',
  NAV_HEADER_BG_COLOR: '#015CAB',
  CONTAINER_BG_COLOR: '#ffffff',
  TRANSPARENT: 'transparent',
  BLACK_WITH_OPACIT: 'rgba(0,0,0, 0.4)',
  SEPERATOR: '#EEEEF1',
  LIGHTWHITE: 'rgba(102, 255, 255, 0.4)',
  WHITE: '#ffffff',
  TEXT_GREY: '#868b91',
  CYAN_COLOR: '#CCCCCC',
  GREY: '#EEEEEE',
  GREY_POINT: '#D9D9D9',
  LIGHT_APP_COLOR: '#6C93BA',
  BORDER_GREY: '#E7E7E7',
};
