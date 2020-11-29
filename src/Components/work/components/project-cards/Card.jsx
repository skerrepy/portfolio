import React, { Component } from 'react'
import styled,{keyframes} from 'styled-components'
const extendCard= keyframes`
0%{
    height:370px;
}
100%{
    height:500px;
}
`
const Container=styled.div`
    display:flex;
    flex-direction:column;
    width:350px;
    height:370px;
    transition:0.3s;
    margin-left:10px;
    padding:10px 10px;
    border-radius:3px;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    overflow:hidden;
    animation-iteration-count: 1;
    &:hover{
        transform: scale(1.1);
        animation-name:${extendCard};

    }
`
const Image=styled.img`
object-fit:cover;
width:100%;
border-radius:3px;
height:200px;
`
const Meta=styled.div`
    display:flex;
    flex-direction:column;
    background:#42d9c8;
`
const MetaTitle=styled.h3`
padding:5px 5px;

`
const TechFlex=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
`
const MetaTech=styled.span`
    background:#3fbfb1;
    padding:5px 5px;
    margin-left:5px;
    font-weight:bold;
    border-radius:3px;
    margin-top:5px;
`
const Description=styled.p`
    font-family:'Montserrat';
    line-height:140%;
    padding:10px 10px;

`
export default class Card extends Component {
    
    render() {
        return (
            <Container>
                <Image src="https://picsum.photos/id/122/4147/2756.jpg"/>
                <Meta>
                <MetaTitle>{this.props.title}</MetaTitle>
                <TechFlex>
                {this.props.tech&&this.props.tech.map(i=>{
                    return <MetaTech>#{i}</MetaTech>
                })}
                </TechFlex>
                <Description>
                {this.props.description}
                </Description>
                </Meta>
            </Container>
        )
    }
}
