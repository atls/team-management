import { createBoxBaseStyles }           from '@atls-ui-parts/checkbox'
import { createBoxShapeStyles }          from '@atls-ui-parts/checkbox'
import { createBoxAppearanceStyles }     from '@atls-ui-parts/checkbox'
import { createCheckBaseStyles }         from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles }   from '@atls-ui-parts/checkbox'
import { createCheckShapeStyles }        from '@atls-ui-parts/checkbox'
import { createContainerBaseStyles }     from '@atls-ui-parts/checkbox'
import { createContainerPositionStyles } from '@atls-ui-parts/checkbox'
import { createLabelAppearanceStyles }   from '@atls-ui-parts/checkbox'
import { createLabelShapeStyles }        from '@atls-ui-parts/checkbox'
import { createLabelPositionStyles }     from '@atls-ui-parts/checkbox'

import { switchProp }                    from 'styled-tools'
import { prop }                          from 'styled-tools'

export const boxBaseStyles = createBoxBaseStyles()

export const boxNormalShapeStyles = createBoxShapeStyles({
  size: 24,
  borderWidth: 1,
  borderRadius: 100,
})
export const boxLargeShapeStyles = createBoxShapeStyles({
  size: 40,
  borderWidth: 1,
  borderRadius: 100,
})

export const boxPrimaryAppearanceStyles = createBoxAppearanceStyles({
  borderColor: '#A5A5A5',
  backgroundColor: 'white',
})
export const boxSecondaryAppearanceStyles = createBoxAppearanceStyles({
  borderColor: '#508EE9',
  backgroundColor: '#508EE9',
})

export const boxAppearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: boxPrimaryAppearanceStyles,
  secondary: boxSecondaryAppearanceStyles,
})
export const boxShapeStyles = switchProp(prop('size', 'normal'), {
  normal: boxNormalShapeStyles,
  large: boxLargeShapeStyles,
})

export const checkBaseStyles = createCheckBaseStyles()

export const checkNormalShapeStyles = createCheckShapeStyles({
  size: 20,
  borderRadius: 10,
})
export const checkLargeShapeStyles = createCheckShapeStyles({
  size: 30,
  borderRadius: 15,
})

export const checkPrimaryAppearanceStyles = createCheckAppearanceStyles({
  color: 'black',
  backgroundColor: 'white',
})
export const checkSecondaryAppearanceStyles = createCheckAppearanceStyles({
  color: 'white',
  backgroundColor: 'black',
})

export const checkAppearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: checkPrimaryAppearanceStyles,
  secondary: checkSecondaryAppearanceStyles,
})
export const checkShapeStyles = switchProp(prop('size', 'normal'), {
  normal: checkNormalShapeStyles,
  large: checkLargeShapeStyles,
})

export const containerPositionStyles = createContainerPositionStyles()
export const containerBaseStyles = createContainerBaseStyles()

export const labelPositionStyles = createLabelPositionStyles({
  margin: '7px',
})
export const labelShapeStyles = createLabelShapeStyles({
  fontSize: 20,
  fontWeight: 400,
  fontFamily: 'Helvetica',
})
export const labelAppearanceStyles = createLabelAppearanceStyles({
  fontColor: 'black',
})