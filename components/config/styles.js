// import * as Colors from 'material-ui/styles/colors';
import rawTheme from './materialUiRawThemeFile';

// const MenuBarBackGroundColor = '#EA6EA4';
// exports.MenuBarBackGroundColor = MenuBarBackGroundColor;

exports.palette = rawTheme.palette;
exports.fontColor = color => ({ color: rawTheme.palette[color] });
