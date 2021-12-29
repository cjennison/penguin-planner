import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ResizeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: 5px dashed blue;
  height: 100%;
  width: 100%;
  cursor: move;
  box-sizing: border-box;
`

const ItemResizer = ({
  enabled,
}) => {
  return (
    <>
      {
        enabled ? (
          <ResizeContainer />
        ) : null
      }
    </>
  )
}

ItemResizer.propTypes = {
  enabled: PropTypes.bool,
}

export default ItemResizer
