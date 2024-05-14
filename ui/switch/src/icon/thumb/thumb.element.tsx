import { ThumbElementProps } from '@atls-ui-parts/switch'

import React                 from 'react'
import { FunctionComponent } from 'react'
import { motion }            from 'framer-motion'
import { useMemo }           from 'react'

const ThumbElement: FunctionComponent<ThumbElementProps> = ({ checked, children, ...props }) => {
  const initial = useMemo(() => (checked ? 'checked' : 'visible'), [checked])

	// TODO уточни этот момент

	const color = checked ? 'white' : 'black'
  return (
	<motion.span initial={initial} animate={checked ? 'checked' : 'visible'} {...props} >
		{children}
	</motion.span>
	)
}

export { ThumbElement }
