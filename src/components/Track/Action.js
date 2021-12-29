import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

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
`

const SuccessContainer = styled.div`
  position: relative;
  top: -50px;
  left: 15px;
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
}) => {
  return (
    <ActionBox
      index={index}
      type={type}
    >
      {
        image ? (
          <img src={image} alt={altText} width="100%" height="100%" />
        ) : null
      }

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
  type: PropTypes.string,
  index: PropTypes.number,
  image: PropTypes.string,
  altText: PropTypes.string,
  success: PropTypes.bool,
  failure: PropTypes.bool,
  note: PropTypes.string,
}

export default Action
