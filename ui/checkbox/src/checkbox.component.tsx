import type { ThemeType }         from '@ui/theme'
import type { PropsWithChildren } from 'react'
import type { FC }                from 'react'

import type CheckboxProps         from './checkbox.interface.js'

import { HiddenInput }            from '@atls-ui-parts/hidden-input'
import { useTheme }               from '@emotion/react'
import React                      from 'react'

import { Condition }              from '@ui/condition'
import { CheckIcon }              from '@ui/icons'
import { WrongSolidIcon }         from '@ui/icons'

import { Box }                    from './box/index.js'
import { Check }                  from './check/index.js'
import { Container }              from './container/index.js'
import { Label }                  from './label/index.js'

const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  checked,
  labelPosition = 'end',
  ...props
}) => {
  const theme = useTheme() as ThemeType

  return (
    <Container labelPosition={labelPosition} {...props}>
      <HiddenInput type='checkbox' defaultChecked={checked} />
      <Box>
        <Check checked={checked}>
          <Condition smooth match={checked} smoothDuration={0.3} smoothPattern='in-and-out'>
            <CheckIcon width={theme.spaces.semiMedium} height={theme.spaces.semiMedium} />
          </Condition>
          <Condition smooth match={!checked} smoothDuration={0.3} smoothPattern='in-and-out'>
            <WrongSolidIcon width={theme.spaces.semiMedium} height={theme.spaces.semiMedium} />
          </Condition>
        </Check>
      </Box>
      <Label position='end'>{children}</Label>
    </Container>
  )
}
export { Checkbox }
