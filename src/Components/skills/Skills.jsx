import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
const FadeIn = keyframes`
from {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
}
to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

`;
const Enlarge = keyframes`
from {
    opacity:0;
    width: 0%;
    overflow:hidden;
}
to {
    width: 280px;
    opacity: 1;

}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  padding: 10px 10px;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 0;
  animation: ${FadeIn} 1s ease-in both;
`;
const Columnizer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 10px;
`;
const ItemHeader = styled.h3`
  background: #42d9c8;
  font-family: "Inter";
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  opacity:0;
  animation: ${Enlarge} 0.5s ease-in ${props=>props.delay}s forwards;
`;
const Item = styled.div`
  background: #2a2733;
  font-family: "Montserrat";
  padding: 10px;
  opacity:0;
  border-radius: 5px;
  color: white;
  text-align: center;
  margin-bottom: 5px;
  animation: ${FadeIn} 1s ease-in ${props=>props.delay}s  forwards;

`;
export default class Skills extends Component {
  render() {
    return (
      <Container>
        <Columnizer>
          <ItemHeader delay="0">Front-end</ItemHeader>
          <Item delay="0.2">ReactJs</Item>
          <Item delay="0.4">Redux</Item>
          <Item delay="0.6">Intl</Item>

          <Item delay="0.8">Antd</Item>
          <Item delay="1">Semantic ui</Item>
          <Item delay="1.2">Styled-components</Item>
        </Columnizer>
        <Columnizer>
          <ItemHeader delay="0.4">Back-end</ItemHeader>
          <Item delay="0.4">MongoDB</Item>
          <Item delay="0.6">Flask</Item>
          <Item delay="0.8">SocketIo</Item>
          <Item delay="1">NodeJs</Item>
          <Item delay="1.2">ExpressJs</Item>
        </Columnizer>
        <Columnizer>
          <ItemHeader delay="0.8">DevOps</ItemHeader>
          <Item delay="0.8">AWS</Item>
          <Item delay="1.2">Docker</Item>
          <Item delay="1.6">Nginx</Item>
          <Item delay="2">CloudFlare</Item>
        </Columnizer>
        <Columnizer>
          <ItemHeader delay="1.2">Computer Languages</ItemHeader>
          <Item delay="1.2">Python</Item>
          <Item delay="1.4">C#</Item>
          <Item delay="1.6">Html/Css/Javascript</Item>
        </Columnizer>
        <Columnizer>
          <ItemHeader delay="1.6">Human Languages</ItemHeader>
          <Item delay="1.6">Arabic</Item>
          <Item delay="1.8">French</Item>
          <Item delay="2">English</Item>
        </Columnizer>
        <Columnizer>
          <ItemHeader delay="2">Experience</ItemHeader>
          <Item delay="2">3 years</Item>
        </Columnizer>
      </Container>
    );
  }
}
