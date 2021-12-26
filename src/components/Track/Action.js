import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import { ACTION_TYPES } from '../../lib/IDConstants'

const ActionWidth = 40
const oGCDActionWidth = 30
const margin = 3

const ActionBox = styled.div`
  height: ${props => props.type === ACTION_TYPES.GCD ? ActionWidth : oGCDActionWidth}px;
  width: ${props => props.type === ACTION_TYPES.GCD ? ActionWidth : oGCDActionWidth}px;
  position: absolute;

  top: ${(props) => props.type === ACTION_TYPES.GCD ? "40vh" : "25vh"};
  left: ${(props) => `${props.index * (ActionWidth + margin)}px`};
`

const SuccessContainer = styled.div`
  position: relative;
  top: -${(props) => props.type === ACTION_TYPES.GCD ? ActionWidth+15 : oGCDActionWidth+15}px;
  left: ${(props) => props.type === ACTION_TYPES.GCD ? ActionWidth-10 : oGCDActionWidth-10}px;
`

const Action = ({
  type,
  index,
  image,
  altText,
  success,
  failure
}) => {

  return (
    <ActionBox
      index={index}
      type={type}
    >
      <img src={image} alt={altText} width="100%" height="100%" />
      {
        success ? (
          <SuccessContainer>
            <FontAwesomeIcon color="lightgreen" icon={faCheckCircle} />
          </SuccessContainer>
        ) : null
      }

      {
        failure ? (
          <SuccessContainer>
            <FontAwesomeIcon color="red" icon={faTimesCircle} />
          </SuccessContainer>
        ) : null
      }
    </ActionBox>
  )
}

export default Action