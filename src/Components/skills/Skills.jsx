import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
const FadeIn = keyframes`
from {
    opacity: 0;
    transform: translate3d(0, -5%, 0);
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
  animation: ${Enlarge} 1s ease-in ${props=>props.delay}s forwards;
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
  animation: ${Enlarge} 1s ease-in 7s forwards;

`;
export default class Skills extends Component {
  render() {
    return (
      <Container>
        <Columnizer>
          <ItemHeader delay="1">Front-end</ItemHeader>
          <Item>ReactJs</Item>
          <Item>Redux</Item>
          <Item>Intl</Item>

          <Item>Antd</Item>
          <Item>Semantic ui</Item>
          <Item>Styled-components</Item>
        </Columnizer>
        <Columnizer>
          <ItemHeader delay="2">Back-end</ItemHeader>
          <Item>MongoDB</Item>
          <Item>Flask</Item>
          <Item>SocketIo</Item>
          <Item>NodeJs</Item>
          <Item>ExpressJs</Item>
        </Columnizer>
        <Columnizer>
          <ItemHeader delay="3">DevOps</ItemHeader>
          <Item>AWS</Item>
          <Item>Docker</Item>
          <Item>Nginx</Item>
          <Item>CloudFlare</Item>
        </Columnizer>
        <Columnizer>
          <ItemHeader delay="4">Computer Languages</ItemHeader>
          <Item>Python</Item>
          <Item>C#</Item>
          <Item>Html/Css/Javascript</Item>
        </Columnizer>
        <Columnizer>
          <ItemHeader delay="5">Human Languages</ItemHeader>
          <Item>Arabic</Item>
          <Item>French</Item>
          <Item>English</Item>
        </Columnizer>
        <Columnizer>
          <ItemHeader delay="6">Experience</ItemHeader>
          <Item>3 years</Item>
        </Columnizer>
      </Container>
    );
  }
}
