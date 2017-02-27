import * as Colors from 'material-ui/styles/colors';
import * as ColorManipulator from 'material-ui/utils/colorManipulator';
import Spacing from 'material-ui/styles/spacing';

const customStyle = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  appBar: {
    color: 'white',
    height: 50,
  },
  palette: {
    primary1Color: Colors.pink500,
    primary2Color: Colors.pink700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent1ColorAlpha: (0, ColorManipulator.fade)(Colors.pinkA200, 0.9),
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    secondaryTextColor: (0, ColorManipulator.fade)(Colors.darkBlack, 0.54),
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: (0, ColorManipulator.fade)(Colors.darkBlack, 0.4),
    pickerHeaderColor: Colors.pink500,
    clockCircleColor: (0, ColorManipulator.fade)(Colors.darkBlack, 0.07),
    shadowColor: Colors.fullBlack,
  },
};

module.exports = customStyle;
