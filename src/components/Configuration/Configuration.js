import React from 'react'
import PropTypes from 'prop-types'
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
  Slider,
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
  display: grid;
  overflow: hidden;
  height: 300px;
`

const SliderContainer = styled.div`
  text-align: right;
  margin-right: 14px;
  &> div {
    width: 75%;
  }
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

        <FormControl>
          <FormGroup>
            <FormControlLabel control={
              <Checkbox
                checked={configuration.showLastNActions.enabled}
                onChange={(e) => {
                  dispatch(setConfiguration({ configuration: { showLastNActions: { ...configuration.showLastNActions, enabled: e.target.checked }}}))
                }}
              />
            } label="Display last X actions" />
          </FormGroup>
          <FormHelperText>Controls how many actions are displayed before they are hidden from the Track</FormHelperText>

          {
            configuration.showLastNActions.enabled ? (
              <SliderContainer>
                <FormControl>
                  <FormGroup>
                    <Slider
                      aria-label="Last Action Count"
                      defaultValue={4}
                      getAriaValueText={(value) => `${value} actions`}
                      valueLabelDisplay="auto"
                      step={1}
                      marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => ({ value: i+1, label: i+1 }) )}
                      min={1}
                      max={10}
                      value={configuration.showLastNActions.num}
                      onChange={(e, value) => {
                        dispatch(setConfiguration({ configuration: { showLastNActions: { ...configuration.showLastNActions, num: value }}}))
                      }}
                    />

                  </FormGroup>
                </FormControl>
              </SliderContainer>
            ) : null
          }

        </FormControl>

        <FormControl>
          <FormGroup>
            <FormControlLabel control={
              <Checkbox
                checked={configuration.showNextNActions.enabled}
                onChange={(e) => {
                  dispatch(setConfiguration({ configuration: { showNextNActions: { ...configuration.showNextNActions, enabled: e.target.checked }}}))
                }}
              />
            } label="Display next X actions" />
          </FormGroup>
          <FormHelperText>Controls how many actions are displayed in the future before they are hidden from the Track</FormHelperText>

          {
            configuration.showNextNActions.enabled ? (
              <SliderContainer>
                <FormControl>
                  <FormGroup>
                    <Slider
                      aria-label="Next Action Count"
                      defaultValue={4}
                      getAriaValueText={(value) => `${value} actions`}
                      valueLabelDisplay="auto"
                      step={1}
                      marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((_, i) => ({ value: i+1, label: i+1 }) )}
                      min={1}
                      max={20}
                      value={configuration.showNextNActions.num}
                      onChange={(e, value) => {
                        dispatch(setConfiguration({ configuration: { showNextNActions: { ...configuration.showNextNActions, num: value }}}))
                      }}
                    />

                  </FormGroup>
                </FormControl>
              </SliderContainer>
            ) : null
          }

        </FormControl>

      </FormContainer>
    </Container>
  )
}

Configuration.propTypes = {
  onClose: PropTypes.func,
}

export default Configuration
