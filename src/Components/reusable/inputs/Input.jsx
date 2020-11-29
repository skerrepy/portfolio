import React from 'react'
import styled from 'styled-components'
const InputStyle=styled.input`
width:${(props)=>props.half?"43%":"90%"};
padding:10px 10px;
font-family:'Inter';
background:#272430;
border:none;
outline:none;
margin-top:5px;
font-size:25px;
border-radius:3px;
color:gray;

&::placeholder{
    color:gray;
}
`
export default class Input extends React.Component {
    render(){
        return (
            <InputStyle {...this.props}/>
                
        )
    }

}
