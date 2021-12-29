import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ACTION_TYPES } from '../../lib/IDConstants'

const ActionWidth = 40
const ActionSpacing = 3
const oGCDActionWidth = 40
const margin = 1

const PullContainer = styled.div`
  height: 100px;
  width: ${(props) => props.type === ACTION_TYPES.GCD ? ActionWidth : oGCDActionWidth}px;
  position: relative;

  top: ${(props) => props.type === ACTION_TYPES.GCD ? '10px' : '-15px'};
  left: ${(props) => `${props.index * (ActionSpacing + margin)}px`};
`

const PullBarObject = styled.div`
  height: 100%;
  border-right: 1px solid white;
  
  position: relative;
  left: -10px;
  top: -10px;
`

const PullText = styled.div`
  position: absolute;
  color: white;

  margin-left: 15px;
  margin-top: -90px;
`

const Pullbar = ({
  type,
  index,
}) => {
  return (
    <PullContainer
      index={index}
      type={type}
    >
      <PullBarObject />
      <PullText>
        Pull
      </PullText>
    </PullContainer>
  )
}

Pullbar.propTypes = {
  type: PropTypes.string,
  index: PropTypes.number,
}

export default Pullbar
