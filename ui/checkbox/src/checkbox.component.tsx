import { HiddenInput }       from '@atls-ui-parts/hidden-input'
import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'
import { useState }          from 'react'

import { Condition }         from '@ui/condition'
import { CheckIcon }         from '@ui/icons'
import { WrongSolidIcon }    from '@ui/icons'
import { ThemeType }         from '@ui/theme'

import CheckboxProps         from './checkbox.interface.js'
import { Box }               from './box/index.js'
import { Check }             from './check/index.js'
import { Container }         from './container/index.js'
import { Label }             from './label/index.js'

const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  checked,
  labelPosition = 'end',
  ...props
}) => {
  const theme = useTheme() as ThemeType

  return (
    <Container labelPosition={labelPosition} {...props}>
      <HiddenInput type='checkbox' checked={checked} />
      <Box>
        <Check checked={checked}>
          <Condition match={checked} smooth smoothDuration={0.3} smoothPattern='in-and-out'>
            <CheckIcon width={theme.spaces.semiMedium} height={theme.spaces.semiMedium} />
          </Condition>
          <Condition match={!checked} smooth smoothDuration={0.3} smoothPattern='in-and-out'>
            <WrongSolidIcon width={theme.spaces.semiMedium} height={theme.spaces.semiMedium} />
          </Condition>
        </Check>
      </Box>
      <Label position='end'>{children}</Label>
    </Container>
  )
}
export { Checkbox }
