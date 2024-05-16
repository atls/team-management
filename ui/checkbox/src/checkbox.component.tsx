import styled                      from '@emotion/styled'
import { ConditionalRender }       from '@atls-ui-parts/conditional-render'
import { HiddenInput }             from '@atls-ui-parts/hidden-input'

import React                       from 'react'
import { FC }                      from 'react'

import { CheckIcon }               from '@ui/icons'

import CheckboxProps               from './checkbox.interface'
import { boxBaseStyles }           from './checkbox.styles'
import { boxShapeStyles }          from './checkbox.styles'
import { boxAppearanceStyles }     from './checkbox.styles'
import { checkAppearanceStyles }   from './checkbox.styles'
import { checkShapeStyles }        from './checkbox.styles'
import { checkBaseStyles }         from './checkbox.styles'
import { labelAppearanceStyles }   from './checkbox.styles'
import { labelShapeStyles }        from './checkbox.styles'
import { labelPositionStyles }     from './checkbox.styles'
import { containerPositionStyles } from './checkbox.styles'
import { containerBaseStyles }     from './checkbox.styles'

const doNothing = () => {
  // do nothing
}

const Container = styled.div<{ labelPosition?: string; fill?: boolean }>(
  containerBaseStyles,
  containerPositionStyles
)

const Box = styled.div(boxBaseStyles, boxAppearanceStyles, boxShapeStyles)

const Label = styled(ConditionalRender())(
  labelShapeStyles,
  labelAppearanceStyles,
  labelPositionStyles
)

const Check = styled.div<{ checked: boolean }>(
  checkBaseStyles,
  checkAppearanceStyles,
  checkShapeStyles
)

export const Checkbox: FC<CheckboxProps> = ({
  children,
  checked = false,
  onCheck = (newState) => doNothing(),
  ...props
}) => (
  <Container labelPosition='end' onClick={() => onCheck(!checked)} {...props}>
    <HiddenInput
      type='checkbox'
      checked={checked}
      onChange={(event) => onCheck(event.currentTarget.checked)}
    />
    <Box>
      <Check checked={checked}>{checked && <CheckIcon width={20} height={20} />}</Check>
    </Box>
    <Label position='end'>{children}</Label>
  </Container>
)
