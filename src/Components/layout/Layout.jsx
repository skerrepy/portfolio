import React, { Component } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8% 92%;
  background:#1E1C24;

  overflow-x:hidden;
  @media only screen and (max-width : 767px) {
    display: flex;
    flex-direction:column;
    height:100%;
    
    background:#1e1c24;
  }
`;
export default class Layout extends Component {
  render() {
    return <Grid>{this.props.children}</Grid>;
  }
}