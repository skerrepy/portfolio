import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
const Container=styled(Link)`
    padding:5px 5px;
    margin-bottom:5px;
    font-size:${props=>props.text?"26px":"30px"};
    color:#1E1C24;
    text-decoration:none;
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
            {hovered==false?Icon:Text}
        </Container>
    )
}
