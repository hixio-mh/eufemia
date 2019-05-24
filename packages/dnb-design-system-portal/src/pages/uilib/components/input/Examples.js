/**
 * UI lib Component Example
 *
 */

import React, { PureComponent, Fragment } from 'react'
import ComponentBox from '../../../../shared/tags/ComponentBox'
import styled from '@emotion/styled'

class Example extends PureComponent {
  render() {
    return (
      <Fragment>
        <ComponentBox
          caption="Placeholder text"
          data-dnb-test="input-placeholder"
        >
          {/* @jsx */ `
<FormLabel for_id="text-input-1" text="Label:" />
<Input
  id="text-input-1"
  placeholder="Placeholder text"
/>
          `}
        </ComponentBox>
        <ComponentBox
          caption="Search text placeholder"
          data-dnb-test="input-search"
        >
          {/* @jsx */ `
<Input
  label="Search:"
  type="search"
  submit_button_title="Search"
  placeholder="Search text placeholder"
  on_change={({ value }) => {
    console.log(value)
  }}
  on_submit={({ value }) => {
    console.log('Submit:', value)
  }}
/>
          `}
        </ComponentBox>
        <ComponentBox caption="Medium input placeholder">
          {/* @jsx */ `
<Input
  label="Medium input:"
  size="medium"
  placeholder="Medium input placeholder"
  on_change={({ value }) => {
    console.log(value)
  }}
/>
          `}
        </ComponentBox>
        <ComponentBox caption="Large input with right aligned text">
          {/* @jsx */ `
<Input
  label="Large input:"
  size="large"
  align="right"
  placeholder="Large input with right aligned text"
  on_change={({ value }) => {
    console.log(value)
  }}
/>
          `}
        </ComponentBox>
        <ComponentBox
          caption="Disabled input"
          data-dnb-test="input-disabled"
        >
          {/* @jsx */ `
<Input
  disabled
  label="Disabled input:"
  id="text-input-disabled"
  placeholder="Disabled Input with a placeholder"
/>
          `}
        </ComponentBox>
        <ComponentBox caption="Show FormStatus (Error)">
          {/* @jsx */ `
<Input
  label="Show status:"
  status="error"
  value="Shows status with border only"
/>
          `}
        </ComponentBox>
        <ComponentBox caption="With FormStatus">
          {/* @jsx */ `
<Input
  label="With FormStatus:"
  status="You have to fill in this field"
  value="Input value with error"
/>
          `}
        </ComponentBox>
        <ComponentBox caption="Input wigth additional description">
          {/* @jsx */ `
<Input
  label="Short Label:"
  autocomplete="on"
  placeholder="Placeholder text"
  description="Additional description"
  on_change={({ value }) => {
    console.log(value)
  }}
/>
          `}
        </ComponentBox>
        <ComponentBox caption="Numbers are ligned by using Proportional Lining">
          {/* @jsx */ `
<Input
  label="My Status:"
  autocomplete="on"
  placeholder="Placeholder text"
  status="Numbers are ligned by using Proportional Lining"
  status_state="info"
  status_animation="fade-in"
  value="This is the value 1234567890"
  on_change={({ value }) => {
    console.log(value)
  }}
/>
          `}
        </ComponentBox>
        <ComponentBox caption="Submit Form with Input. Pressing the enter key will trigger a submit.">
          {/* @jsx */ `
<form
  onSubmit={event => {
    console.log('onSubmit')
    event.preventDefault()
  }}
>
  <Input
    label="Label:"
    value="Input ..."
    on_submit={event => {
      console.log('on_submit')
    }}
    on_change={({ value }) => {
      console.log('on_change:', value)
    }}
    onChange={({ value }) => {
      console.log('onChange:', value)
    }}
  />
  <Button text="Submit" type="submit" />
</form>
          `}
        </ComponentBox>
      </Fragment>
    )
  }
}

const Wrapper = styled.div`
  display: block;
  width: 100%;

  .dnb-input input {
    min-width: 10rem;
  }
  .dnb-form-label + .dnb-input {
    margin-top: 0;
  }
`

export { Example }
export default () => (
  <Wrapper>
    <Example />
  </Wrapper>
)