import React       from 'react'
import { FC }      from 'react'
import { motion }  from 'framer-motion'
import { useMemo } from 'react'
const SwitchElement = ({ opened, ...props }) => {
  const initial = useMemo(() => (opened ? 'visible' : 'hidden'), [opened])

  return (
    <motion.div
      whileTap={{ scale: 1 }}
      animate={opened ? 'visible' : 'hidden'}
      initial={initial}
      {...props}
    />
  )
}

export { SwitchElement }
