import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectConfiguration } from '../../store/game/selectors'
import { setConfiguration } from '../../store/game/reducers'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const CloseContainer = styled.div`
  float: right;
`

const FormContainer = styled.div`
  padding-top: 5px;
  padding-left: 5px;
`

const Configuration = ({
  onClose,
}) => {
  const dispatch = useDispatch()

  const configuration = useSelector(selectConfiguration)

  return (
    <Container disableGutters={true}>
      <FormContainer>
        <FormControl>
          <FormLabel>
            Configuration
            <CloseContainer>
              <Button
                onClick={() => {
                  onClose()
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </CloseContainer>

          </FormLabel>

          <FormGroup>
            <FormControlLabel control={
              <Checkbox
                checked={configuration.enableConsumables}
                onChange={(e) => {
                  dispatch(setConfiguration({ configuration: { enableConsumables: e.target.checked }}))
                }}
              />
            } label="Enable consumables" />
          </FormGroup>
          <FormHelperText>Display and track consumables as part of your rotation</FormHelperText>
        </FormControl>
      </FormContainer>
    </Container>
  )
}

export default Configuration
