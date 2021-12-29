import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import { ACTION_TYPES } from '../../lib/IDConstants'

const ActionWidth = 40
const ActionSpacing = 3
const oGCDActionWidth = 40
const margin = 1

const ActionBox = styled.div`
  height: ${(props) => props.type === ACTION_TYPES.GCD ? ActionWidth : oGCDActionWidth}px;
  width: ${(props) => props.type === ACTION_TYPES.GCD ? ActionWidth : oGCDActionWidth}px;
  position: relative;

  top: ${(props) => props.type === ACTION_TYPES.GCD ? '10px' : '-15px'};
  left: ${(props) => `${props.index * (ActionSpacing + margin)}px`};
  
  img {
    ${(props) => {
    if (props.actionCompleted) {
      return 'opacity: 0.65;'
    }
  }}
  }
`

const SuccessContainer = styled.div`
  position: relative;
  top: -42px;
  left: 0px;
`

const NoteText = styled.div`
  position: absolute;
  color: white;
  width: 40px;
`

const Action = ({
  type,
  index,
  image,
  altText,
  success,
  failure,
  note,
  active,
}) => {
  return (
    <ActionBox
      className={active ? 'glow' : null}
      index={index}
      type={type}
      actionCompleted={success}
    >
      {
        image ? (
          <img src={image} alt={altText} width="100%" height="100%" />
        ) : null
      }

      {
        success ? (
          <SuccessContainer>
            <FontAwesomeIcon color="lightgreen" icon={faCheck} size="2x" />
          </SuccessContainer>
        ) : null
      }

      {
        failure ? (
          <SuccessContainer>
            <FontAwesomeIcon color="red" icon={faTimes} size="2x" />
          </SuccessContainer>
        ) : null
      }

      {
        note && !success ? (
          <NoteText>
            {note}
          </NoteText>
        ) : null
      }
    </ActionBox>
  )
}

Action.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.number,
  index: PropTypes.number,
  image: PropTypes.string,
  altText: PropTypes.string,
  success: PropTypes.bool,
  failure: PropTypes.bool,
  note: PropTypes.string,
}

export default Action
