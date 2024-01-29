import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar as RSNavbar, NavbarToggler, NavbarBrand as RSNavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';

import { Header } from './styled';

const Navbar = styled(RSNavbar)`
  background-color: #fff;
  font-family: "Proxima Nova",-apple-system,Roboto,Arial,sans-serif,sans-serif;
  color: #1282b3;
`;

const NavbarBrand = styled(RSNavbarBrand)`
  color: #1282b3 !important;
`;

function Headers(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Header>
      <Navbar {...args}>
        <NavbarBrand href="/">Sobre o Desenvolvedor</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/abra%C3%A3o-fontenele-5a4433102/">Linkedin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/othonaf">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/othonaf">
                Página Pessoal
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Header>
  );
}

export default Headers;
