/**
 * dnb-ui-lib Component Story
 *
 */

import React /* , { useState, useEffect } */ from 'react'
import { Wrapper, Box } from '../helpers'
// import styled from '@emotion/styled'

import { Checkbox, FormLabel } from '../../src/components'

export default [
  'Checkbox',
  () => (
    <Wrapper>
      <Box>
        <p className="dnb-p">
          Text: <FormLabel for_id="checkbox">Unchecked:</FormLabel>
          <Checkbox id="checkbox" />
        </p>
      </Box>
      <Box>
        Text:{' '}
        <Checkbox
          label="Checked"
          checked
          on_change={({ checked }) => {
            console.log('on_change', checked)
          }}
        />
      </Box>
      <Box>
        Text:{' '}
        <Checkbox
          label="Unchecked"
          on_change={({ checked }) => {
            console.log('on_change', checked)
          }}
        />
      </Box>
      <Box>
        <FormLabel for_id="checkbox-1" direction="vertical" vertical>
          Vertical FormLabel for a Checkbox component:
        </FormLabel>
        <Checkbox id="checkbox-1" label="Unchecked disabled" />
      </Box>
      <Box>
        <Checkbox label="Checked disabled" checked disabled />
      </Box>
      <Box>
        <Checkbox
          label="Potenti viverra facilisi blandit sodales lorem est fusce pulvinar a imperdiet quis mi parturient mattis feugiat tellus ipsum magnis rutrum"
          status="Potenti viverra facilisi blandit sodales lorem est fusce pulvinar a imperdiet quis mi parturient mattis feugiat tellus ipsum magnis rutrum"
        />
      </Box>
      <Box>
        <Checkbox
          // label="Unchecked status error:"
          label="Unchecked:"
          label_position="left"
          // status="Potenti viverra facilisi blandit sodales lorem est fusce pulvinar a imperdiet quis mi parturient mattis feugiat tellus ipsum magnis rutrum"
          status="Potenti viverra facilisi blandit sodales lorem est fusce"
          status_state="info"
        />
      </Box>
      <Box>
        <Checkbox
          label="Checked status message"
          checked
          status="Potenti viverra ft quis mi parturient mattis feugiat tellus ipsum magnis rutrum"
        />
      </Box>
    </Wrapper>
  )
]