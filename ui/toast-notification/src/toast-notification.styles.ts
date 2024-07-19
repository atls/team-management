import { styleFn }    from 'styled-system'
import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'
import { ifProp }     from 'styled-tools'

export const baseAbsoluteConteinerStyles: styleFn = ({ theme }) => ({
  position: 'fixed',
  zIndex: theme.spaces.s1500,
  bottom: theme.spaces.moderate,
  justifyContent: 'center',
})

export const shapeAbsoluteContainerStyles: styleFn = () => ({
  width: '100%',
})

const shapeNotificationContainerStyles: styleFn = ({ theme }) => ({
  width: 'fit-content',
  padding: theme.spaces.v8h16,
  borderRadius: theme.radii.f20,
})

const baseNotificationStyles: styleFn = ({ theme }) => ({
  ...shapeNotificationContainerStyles({ theme }),
  backgroundColor: theme.colors.BLUE_700,
})

const errorNotificationStyles: styleFn = ({ theme }) => ({
  ...shapeNotificationContainerStyles({ theme }),
  backgroundColor: theme.colors.RED_600,
})

export const notificationContainerStyles = switchProp('type', {
  base: baseNotificationStyles,
  error: errorNotificationStyles,
})
