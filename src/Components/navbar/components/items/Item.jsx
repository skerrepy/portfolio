import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import styled,{keyframes} from 'styled-components'
const FadeIn=keyframes`
    from{
        opacity:0.3;
    }
    to{
        opacity:1;
    }
`
const Container=styled(Link)`
    padding:5px 5px;
    margin-bottom:5px;
    font-size:${props=>props.text?"26px":"30px"};
    color:#1E1C24;
    text-decoration:none;
    @media only screen and (max-width: 767px) {
        margin:5px 5px;
      }
      
`
const IconAnimation=styled.div`
    animation:${FadeIn} 0.5s ease-in;

`
const TextAnimation=styled.div`
    animation:${FadeIn} 0.5s ease-in;

`
export default function Item({Icon,Text,to}) {
    let [hovered,setHover]=useState(false);
    let onMouseEnterHandler=()=> {
        setHover(true)
    }

    let onMouseLeaveHandler=()=> {
        setHover(false)
    }
    return (
        <Container to={to} text={hovered} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            {hovered==false?<IconAnimation>{Icon}</IconAnimation>:<TextAnimation>{Text}</TextAnimation>}
        </Container>
    )
}
