import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
const extendCard = keyframes`
0%{
    height:0%;
    overflow:hidden;
}
100%{
    height:400px;
}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 370px;
  transition: 0.3s;
  margin-left: 10px;
  padding: 10px 10px;
  border-radius: 3px;
  overflow: hidden;
`;
const ParagraphContainer = styled.div`
  width: 350px;
  height: auto;
  display:flex;
  jusify-content:center;
  align-items:center;
  transition: 0.3s;
  margin-left: 10px;
  border-radius: 3px;
  padding:10px 10px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-name: ${extendCard};
  background: #3fbfb1;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 3px;
  height: 200px;
`;
const Meta = styled.div`
  display: flex;
  flex-direction: column;
  background: #42d9c8;
`;
const MetaTitle = styled.h3`
  padding: 5px 5px;
`;
const TechFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
`;
const MetaTech = styled.span`
  background: #3fbfb1;
  padding: 5px 5px;
  margin-left: 5px;
  font-weight: bold;
  border-radius: 3px;
  margin-top: 5px;
  
`;
const Description = styled.p`
  font-family: "Montserrat";
  line-height: 140%;
  word-break:break-word;
  width:90%;
`;
export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      hovering: false,
    };
  }
  render() {
    const { hovering } = this.state;
    return (
      <Container
        onMouseLeave={(e) => {
          this.setState({
            hovering: false,
          });
        }}
        onMouseEnter={(e) => {
          this.setState({
            hovering: true,
          });
        }}
      >
        {hovering === false && (
          <Image src="https://picsum.photos/id/122/4147/2756.jpg" />
        )}
        {hovering === false && (
          <Meta>
            <MetaTitle>{this.props.title}</MetaTitle>
            <TechFlex>
              {this.props.tech &&
                this.props.tech.map((i) => {
                  return <MetaTech>#{i}</MetaTech>;
                })}
            </TechFlex>
          </Meta>
        )}
        {hovering === true && (
          <ParagraphContainer>
            <Description>{this.props.description}</Description>
          </ParagraphContainer>
        )}
      </Container>
    );
  }
}
