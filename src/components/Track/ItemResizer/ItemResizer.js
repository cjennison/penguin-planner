import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ResizeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: 5px dashed blue;
  height: 100%;
  width: calc(100% - 10px);
  cursor: move;
`

const ItemResizer = ({
  enabled,
}) => {
  return (
    <>
      {
        enabled ? (
          <ResizeContainer/>
        ) : null
      }
    </>
  )
}

ItemResizer.propTypes = {
  enabled: PropTypes.bool,
}

export default ItemResizer
