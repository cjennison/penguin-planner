import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { selectWindowLocked } from '../../store/system/selectors'

const ResizeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: 5px dashed blue;
  height: calc(100vh - 10px);
  width: calc(100vw - 10px);
`

const Resize = () => {
  const locked = useSelector(selectWindowLocked)

  return (
    <>
      {
        !locked ? (
          <ResizeContainer />
        ) : null
      }
    </>
  )
}

export default Resize
