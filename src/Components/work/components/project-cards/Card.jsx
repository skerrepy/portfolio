import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const HideImage=keyframes`
from{
  height:230px;
}  
to{
  height:0px;
}

`
const EnlargeMeta=keyframes`
from{
  scaleY(0.5);
  flex-direction:column;
}  
to{
  scaleY(1.5);
  flex-direction:row;
}


`
const AppearDescription=keyframes`
from {
  opacity:0;
}to{
  opacity:1;
  overflow-y:auto;

}

`
const TechFlexReshow=keyframes`
from {
  opacity:0;
}to{
  opacity:1;
}

`
const ShowTech=keyframes`
from {
  opacity:0;
}to{
  opacity:1;
}
`
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 3px;
  height: 230px;
`;
const Meta = styled.div`
  display: flex;
  flex-direction: column;
  background: #42d9c8;
`;
const Description = styled.p`
  font-family: "Montserrat";
  line-height: 140%;
  word-break:break-word;
  width:100%;
  opacity:0;
`;
const TechFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 400px;
  transition: 0.3s;
  margin-left: 10px;
  @media only screen and (max-width: 767px) {
    margin-left: 0px;
    width: 90%;
    margin-top:15px;
    height: 400px;
    }
  padding: 10px 10px;
  background:#42d9c8;
  border-radius: 3px;
  overflow: hidden;
  transition:0.3s;
  &:hover{
    ${Image}{
      animation:${HideImage} 1s forwards;
    }
    ${Meta}{
      animation:${EnlargeMeta} 1s forwards;
    }
    ${TechFlex}{
      animation:${TechFlexReshow} 3s forwards;
    }
    ${Description}{
      animation:${AppearDescription} 1s forwards;
    }
  }
`;


const MetaTitle = styled.h3`
  padding: 5px 5px;
`;

const MetaTech = styled.span`
  background: #3fbfb1;
  padding: 5px 5px;
  margin-left: 5px;
  font-weight: bold;
  border-radius: 3px;
  margin-top: 5px;
  opacity:0;
  animation:${ShowTech} 0.3s ease-in ${props=>props.delay}s forwards;
`;

export default class Card extends Component {

  render() {
    return (
      <Container >
          <Image src={this.props.image||"https://picsum.photos/id/122/4147/2756.jpg"} />
          <Meta>
          
            <MetaTitle>{this.props.title}</MetaTitle>
            <TechFlex>
              {this.props.tech &&
                this.props.tech.map((i,index) => {
                  return <MetaTech key={index} delay={index/10}>#{i}</MetaTech>;
                })}
            </TechFlex>

          </Meta>
        <Description>{this.props.description}</Description>
      </Container>
    );
  }
}
