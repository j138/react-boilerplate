import React from 'react';
import { AppBar } from 'material-ui';
import * as Colors from 'material-ui/styles/colors';

// TODO: Styleは後で整理する
const styles = {
  base: {
    background: Colors.pink300,
    padding: 0,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    height: '2.5rem',
  },
  iconStyleRight: {
    margin: '0.1rem',
  },
  iconStyleLeft: {
    paddingLeft: 0,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: Colors.pink300,
    height: '2.5rem',
  },
  btnSecondary: {
    color: Colors.white,
    fontSize: '0.8rem',
  },
  topImage: {
    height: '2.5rem',
  },
};

const Header = () => (
  <header>
    <AppBar
      style={styles.base}
      titleStyle={styles.title}
      iconStyleLeft={styles.iconStyleLeft}
      iconStyleRight={styles.iconStyleRight}
    />
  </header>
);

export default Header;
