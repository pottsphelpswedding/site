import React from 'react';
import Router from 'next/router';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

import './layout.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="static/favicon.ico" />
          <title>{this.props.title || ''}</title>
        </Head>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="mr-auto">
            <img src="/static/images/logo.png" style={{height: '50px'}} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink onClick={() => Router.push('/')}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => Router.push('/our-story')}>
                  Our Story
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => Router.push('/meet-the-party')}>
                  Meet the Party
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => Router.push('/faq')}>FAQs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => Router.push('/gallery')}>
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target="_blank"
                  href="https://www.amazon.com/wedding/greg-potts-michelle-phelps-abbeville-october-2019/registry/5EGW9T4EIEYQ">
                  Wedding Registry
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <main
          style={{
            minHeight: 'calc(100vh - 76px)',
            margin: this.props.container === 'true' ? '10px' : '0',
            background: this.props.dark ? '#313639' : 'white',
            color: this.props.dark ? 'white' : 'black',
            padding: '10px',
          }}>
          {this.props.title ? (
            <h1 style={{marginBottom: '20px'}}>{this.props.title}</h1>
          ) : (
            ''
          )}
          {this.props.children}
        </main>
        {this.props.footer === 'false' ? (
          ''
        ) : (
          <footer style={{textAlign: 'center'}}>
            <span>&copy; {new Date().getFullYear()}</span>
          </footer>
        )}
      </div>
    );
  }
}

export default Layout;
