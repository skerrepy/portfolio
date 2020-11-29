import React, { Component } from 'react'
import styled,{keyframes} from 'styled-components'

const rubberAnim=keyframes`
from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`
const Container=styled.span`
animation-duration: 1s;
animation-fill-mode: both;
animation-iteration-count: 1;
display: inline-block;

&:hover{
    animation-name:${rubberAnim};

}
`
export default class AnimatedLetter extends Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}
