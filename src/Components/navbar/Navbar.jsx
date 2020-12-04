import React, { Component } from "react";
import styled from "styled-components";
import { RiHome2Line } from "react-icons/ri";
import { CgWorkAlt } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { FiTwitter, FiGithub, FiLinkedin,FiMail } from "react-icons/fi";
import { BiBrain } from "react-icons/bi";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import Item from "./components/items/Item";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #42d9c8;
  @media only screen and (max-width: 767px) {
    width:100%;
    display:${props=>props.show?"flex":"none"};
    height:100%;
    position:fixed;
    z-index:999;
    justify-content:flex-start;

  }

`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 767px) {
    width:100%;
    flex-wrap:nowrap;
    align-items:center;
    justify-content:center;

  }
  
  
`;
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  @media only screen and (max-width: 767px) {
    margin-top:0;
    flex-wrap:nowrap;
  }
  
  
`;
const SocialItem = styled.a`
  padding: 5px 5px;
  margin-bottom: 5px;
  font-size: 30px;
  text-decoration: none;
  color:#1E1C24;
  @media only screen and (max-width: 767px) {
    padding:10px 10px;
    margin-right:10px;
  }
  
`;
const PhoneClose=styled.button`
display:none;
@media only screen and (max-width: 767px) {
display:inline-block;
padding: 5px 5px;
font-size: 40px;
background:#E30917;
color:white;
width:100%;
border:none;
margin-top:auto;
border-radius:10px 10px 0px 0px;
}
`
const ContainerPhone = styled.div`
  display:none;
  @media only screen and (max-width: 767px) {
    width:100%;
    display:${props=>props.show?"none":"flex"};
    font-size:30px;
    background: #42d9c8;
    padding:10px 10px;
  }

`;
export default class Navbar extends Component {
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  render() {
    return (
      <React.Fragment>
        <ContainerPhone  show={this.state.show}>
          <GiHamburgerMenu onClick={e=>{this.setState({
            show:true
          })}}/>
        </ContainerPhone>
              <Container  show={this.state.show}>
        <Items >
          <Item role="button" onClick={e=>{
          this.setState({
            show:false
          })
          console.log(this.state.show)
        }} role="button" to="/portfolio" Icon={<RiHome2Line />} Text="HOME" />

          <Item onClick={e=>{
          this.setState({
            show:false
          })
        }} role="button" to="/portfolio/showcase" Icon={<CgWorkAlt />} Text="WORK" />

          <Item role="button" onClick={e=>{
          this.setState({
            show:false
          })
        }} to="/portfolio/about" Icon={<IoPersonOutline />} Text="ABOUT" />
          <Item onClick={e=>{
          this.setState({
            show:false
          })
        }} to="/portfolio/skills" Icon={<BiBrain />} Text="SKILLS" />
          <Item role="button" onClick={e=>{
          this.setState({
            show:false
          })
        }} to="/portfolio/contact" Icon={<FiMail />} Text="CONTACT" />

        </Items>

        <Socials >
          <SocialItem onClick={e=>{
          this.setState({
            show:false
          })
        }} href="https://www.linkedin.com/in/omar-hanafi-654489100/">
            <FiLinkedin />
          </SocialItem>
          <SocialItem onClick={e=>{
          this.setState({
            show:false
          })
        }}  href="https://twitter.com/mikatorigai">
            <FiTwitter />
          </SocialItem>
          <SocialItem onClick={e=>{
          this.setState({
            show:false
          })
        }} href="https://github.com/skerrepy">
            <FiGithub />
          </SocialItem>

        </Socials>
        <PhoneClose onClick={e=>{
          this.setState({
            show:false
          })
        }} >
<GrClose />
          </PhoneClose>
      </Container>
      </React.Fragment>

    );
  }
}

/**
 *                 <Item text="something">
                    <RiHome2Line/> IoPersonOutline
                </Item>
 */
