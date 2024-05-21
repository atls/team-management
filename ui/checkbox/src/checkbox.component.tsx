import { HiddenInput } from '@atls-ui-parts/hidden-input'

import React           from 'react'
import { FC }          from 'react'

import { Condition }   from '@ui/condition'
import { CheckIcon }   from '@ui/icons'

import CheckboxProps   from './checkbox.interface'
import { Box }         from './box'
import { Check }       from './check'
import { Container }   from './container'
import { Label }       from './label'

const doNothing = () => {
  // do nothing
}

const Checkbox: FC<CheckboxProps> = ({
  children,
  checked = false,
  onCheck = doNothing,
  labelPosition = 'end',
  ...props
}) => (
  <Container labelPosition={labelPosition} onClick={() => onCheck(!checked)} {...props}>
    <HiddenInput
      type='checkbox'
      checked={checked}
      onChange={(event) => onCheck(event.currentTarget.checked)}
    />
    <Box>
      <Check checked={checked}>
        <Condition
          match={checked}
          smooth={true}
          smoothOptions={{ duration: 0.3, pattern: 'in-and-out' }}
        >
          <CheckIcon width={20} height={20} />
        </Condition>
      </Check>
    </Box>
    <Label position='end'>{children}</Label>
  </Container>
)

export { Checkbox }
