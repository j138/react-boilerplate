import React from 'react';
import Helmet from 'react-helmet';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import MyRawTheme from '../components/config/materialUiRawThemeFile';
import Config from '../components/config/';

const Template = props => (
  <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
    <div>
      <Helmet
        defaultTitle={Config.title()}
        titleTemplate={`%s - ${Config.title()}`}
        meta={[
            { name: 'keywords', content: '座席表システム' },
        ]}
      />
      {props.children}
    </div>
  </MuiThemeProvider>
);

Template.propTypes = {
  children: React.PropTypes.shape({}).isRequired,
};

export default Template;
