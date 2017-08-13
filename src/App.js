import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import ruLocaleData from "react-intl/locale-data/ru";
import {IntlProvider, addLocaleData} from "react-intl";

addLocaleData(ruLocaleData);

export default function App () {
  return (
    <IntlProvider locale="ru">
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>
        <Header />
        <Product />
        <Footer />
      </div>
    </IntlProvider>
  );
}
