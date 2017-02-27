import React from 'react';
import Helmet from 'react-helmet';
import Config from '../components/config/index';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Contents from '../components/map/index';

const Top = () => (
  <div>
    <Header />
    <Contents />
    <Footer />

    <Helmet
      titleTemplate="%s"
      title={Config.title()}
    />
  </div>
);

export default Top;
