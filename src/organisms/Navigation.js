import React from "react";
import styled from "styled-components";
import { Link } from "../atoms";

export function Navigation() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/profile">My Profile</Link>
      <Link to={`/profile/ann`}>Ann's Profile</Link>
      <Link to={`/settings`}>Settings</Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: center;
  & > a {
    flex: 1 1 auto;
    padding: 1rem;
    /* white-space: nowrap; */
  }
`;
