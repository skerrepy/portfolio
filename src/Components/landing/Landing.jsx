import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnimatedLetter from "../reusable/letters/AnimatedLetter";
import AvatarImage from "../reusable/assets/avatar.jpg";
import Word from '../reusable/words/Word'
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media only screen and (max-width: 767px) {
  width:100%;
  height:100vh;
  background:#1e1c24;
  }
`;
const AvatarContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  width: 50%;
  @media only screen and (max-width: 767px) {
    display:none;
  }
`;
const Splitter = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 767px) {
  }
`;
const ParaHeader = styled.h1`
  font-family: "Inter";
  padding: 10px 15px;
  font-size:50px;
`;
const ContactMeButton = styled(Link)`
  padding: 10px 15px;
  border-radius: 3px;
  background: #42d9c8;
  color: #1e1c24;
  transition: 0.3s;
  margin-top: 5px;
  width: 100px;
  margin-left: 10px;
  text-align: center;
  text-decoration: none;
  &:hover {
    border: 1px solid #42d9c8;
    background: #1e1c24;
    color: #42d9c8;
  }
`;
const Avatar = styled.div`
  height: 350px;
  width: 350px;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
    background-position: center;
  background: url(${(props) => props.img});
  background-size: cover;
`;
export default class Landing extends Component {
  render() {
    /**
 * NO i didn't write these letters one by one if you are curious about how i didn't spend 5 minutes doing this
 * here is a small simple python script that did it for me :=)
====python(i had a python repl open atm )=====
text="Hi,I'm omar,full stack web developer."

for letter in text:
  if letter==" ":
    print("&nbsp;")
  elif letter==",":
    print("<AnimatedLetter>"+letter+"</AnimatedLetter>"+"<br/>")
  else:
    print("<AnimatedLetter>"+letter+"</AnimatedLetter>")
 */
    return (
      <Splitter>
        <Container>
          <ParaHeader>
            <Welcome />
          </ParaHeader>
          <ContactMeButton to="/contact">Contact me</ContactMeButton>
        </Container>{" "}
        <AvatarContainer>
          <Avatar img={AvatarImage} />
        </AvatarContainer>
      </Splitter>
    );
  }
}

const TypeWritingSpan=styled.span`

`

let Welcome = () => {
  return (
    <TypeWritingSpan>
    <Word delay="0">
      <AnimatedLetter>H</AnimatedLetter>
      <AnimatedLetter>i</AnimatedLetter>
      <AnimatedLetter>,</AnimatedLetter>
      </Word>
      <br />
      <Word delay="0.4">

      <AnimatedLetter>I</AnimatedLetter>
      <AnimatedLetter>'</AnimatedLetter>
      <AnimatedLetter>m</AnimatedLetter>
      </Word>
      &nbsp;
      <Word delay="0.6">
      <AnimatedLetter>o</AnimatedLetter>
      <AnimatedLetter>m</AnimatedLetter>
      <AnimatedLetter>a</AnimatedLetter>
      <AnimatedLetter>r</AnimatedLetter>
      <AnimatedLetter>,</AnimatedLetter>
      </Word>
      <br />
      <Word delay="0.8">
      <AnimatedLetter>F</AnimatedLetter>
      <AnimatedLetter>u</AnimatedLetter>
      <AnimatedLetter>l</AnimatedLetter>
      <AnimatedLetter>l</AnimatedLetter>
      </Word>
      &nbsp;
      <Word delay="1">
      <AnimatedLetter>s</AnimatedLetter>
      <AnimatedLetter>t</AnimatedLetter>
      <AnimatedLetter>a</AnimatedLetter>
      <AnimatedLetter>c</AnimatedLetter>
      <AnimatedLetter>k</AnimatedLetter>
      </Word>
      &nbsp;
      <Word delay="1.4">
      <AnimatedLetter>w</AnimatedLetter>
      <AnimatedLetter>e</AnimatedLetter>
      <AnimatedLetter>b</AnimatedLetter>
      </Word>
      &nbsp;
      <br/>
      <Word delay="1.6">
      <AnimatedLetter>d</AnimatedLetter>
      <AnimatedLetter>e</AnimatedLetter>
      <AnimatedLetter>v</AnimatedLetter>
      <AnimatedLetter>e</AnimatedLetter>
      <AnimatedLetter>l</AnimatedLetter>
      <AnimatedLetter>o</AnimatedLetter>
      <AnimatedLetter>p</AnimatedLetter>
      <AnimatedLetter>e</AnimatedLetter>
      <AnimatedLetter>r</AnimatedLetter>
      <AnimatedLetter>.</AnimatedLetter>
      </Word>
    </TypeWritingSpan>
  );
};
