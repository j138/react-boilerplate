import React from 'react';
import * as Colors from 'material-ui/styles/colors';

const styles = {
  copyrightBlock: {
    width: '100%',
    backgroundColor: Colors.grey700,
    color: Colors.white,
    fontSize: '0.8rem',
    textAlign: 'center',
    padding: '0.4rem 0',
  },
  copyrightSymbol: {
    fontSize: '1.3rem',
    verticalAlign: 'sub',
  },
};

const Copyright = () => (
  <div style={styles.copyrightBlock}>
    <span style={styles.textStyle}>
      <span style={styles.copyrightSymbol}>&copy;</span>
      footer
    </span>
  </div>
);

export default Copyright;
