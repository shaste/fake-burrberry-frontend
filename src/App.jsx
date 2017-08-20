import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ruLocaleData from 'react-intl/locale-data/ru';
import { IntlProvider, addLocaleData } from 'react-intl';

import Header from './Header';
import List from './Products/List';
import Show from './Products/Show';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default function App() {
  return (
    <IntlProvider locale="ru">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/:section/" component={List} />
            <Route exact path="/:section/:subsection" component={List} />
            <Route path="/:section/:subsection/:id" component={Show} />
            <Redirect from="/" to="/men" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </IntlProvider>
  );
}
