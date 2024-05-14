import { SwitchProps } from '@atls-ui-parts/switch'

type ToggleType = 'base' | 'icon' | 'mode'

export interface ToggleProps extends SwitchProps {
	type?: ToggleType
}
