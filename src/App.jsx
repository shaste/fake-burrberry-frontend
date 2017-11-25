import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import ruLocaleData from 'react-intl/locale-data/ru';
import { IntlProvider, addLocaleData } from 'react-intl';

import Header from './Header';
import List from './Products/List';
import Show from './Products/Show';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

addLocaleData(ruLocaleData);

const Page = styled.div``;

const Content = styled.div`
  position: relative;
  z-index: 200;
  transition: transform 250ms ease-in;
  transform: ${props => (props.menuOpened ? 'translateX(274px)' : 'translateX(0)')};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  state = { menuOpened: false };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  handleClick() {
    this.setState(prevState => ({
      menuOpened: !prevState.menuOpened,
    }));
  }

  handleOutsideClick(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.setState({ menuOpened: false });
    }
  }

  render() {
    return (
      <IntlProvider locale="ru">
        <BrowserRouter>
          <Page>
            <div
              ref={(node) => {
                this.node = node;
              }}
            >
              <MobileMenu menuOpened={this.state.menuOpened} />
            </div>
            <Content menuOpened={this.state.menuOpened}>
              <Header openMenu={this.handleClick} />
              <Switch>
                <Route exact path="/:section/" component={List} />
                <Route exact path="/:section/:subsection" component={List} />
                <Route path="/:section/:subsection/:id" component={Show} />
                <Redirect from="/" to="/men" />
              </Switch>
              <Footer />
            </Content>
          </Page>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default App;
