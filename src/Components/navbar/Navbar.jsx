import React, { Component } from "react";
import styled from "styled-components";
import { RiHome2Line } from "react-icons/ri";
import { CgWorkAlt } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { FiTwitter, FiGithub, FiLinkedin,FiMail } from "react-icons/fi";
import { BiBrain } from "react-icons/bi";
import { Link } from "react-router-dom";

import Item from "./components/items/Item";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #42d9c8;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;
const SocialItem = styled(Link)`
  padding: 5px 5px;
  margin-bottom: 5px;
  font-size: 30px;
  text-decoration: none;
  color:#1E1C24;

`;

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Items>
          <Item to="/" Icon={<RiHome2Line />} Text="HOME" />

          <Item to="/showcase" Icon={<CgWorkAlt />} Text="WORK" />

          <Item to="/about" Icon={<IoPersonOutline />} Text="ABOUT" />
          <Item to="/skills" Icon={<BiBrain />} Text="SKILLS" />
          <Item to="/contact" Icon={<FiMail />} Text="CONTACT" />

        </Items>

        <Socials>
          <SocialItem>
            <FiLinkedin />
          </SocialItem>
          <SocialItem>
            <FiTwitter />
          </SocialItem>
          <SocialItem>
            <FiGithub />
          </SocialItem>
        </Socials>
      </Container>
    );
  }
}

/**
 *                 <Item text="something">
                    <RiHome2Line/> IoPersonOutline
                </Item>
 */
