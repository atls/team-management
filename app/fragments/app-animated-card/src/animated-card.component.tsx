import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { motion }            from 'framer-motion'
import { useIntl }           from 'react-intl'

import { Button }            from '@ui/button'
import { RemoveIcon }        from '@ui/icons'
import { NextImage }         from '@ui/image'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Text }              from '@ui/text'
import { ThemeType }         from '@ui/theme'

import { AnimatedCardProps } from './animated-card.interfaces.js'

const AnimatedCard: FC<AnimatedCardProps> = ({ img, organization }) => {
  const { formatMessage } = useIntl()
  const theme = useTheme() as ThemeType
  const [openMenu, setOpenMenu] = React.useState<boolean>(false)

  const handleDelete = () => {
    setOpenMenu(!openMenu)
  }
  const removeOrganization = () => {}

  return (
    <motion.div
      animate={openMenu ? { height: '116px' } : { height: '64px' }}
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        marginBottom: '12px',
        backgroundColor: '#F2F2F2',
        borderRadius: '20px',
        height: '64px',
        width: '452px',
        padding: '12px',
        flexDirection: 'row',
        overflow: 'hidden',
      }}
    >
      <Column width={theme.spaces.superExtraReduced}>
        <Box alignItems='center' justifyContent='space-between'>
          <Box alignItems='center'>
            <Box width={theme.spaces.increased} height={theme.spaces.increased}>
              <NextImage
                src={img}
                borderRadius={theme.spaces.miniReduced}
                width={theme.spaces.increased}
                height={theme.spaces.increased}
                alt='logo'
              />
            </Box>
            <Text fontSize='normal.semiDefault' marginLeft={theme.spaces.tiny}>
              {organization}
            </Text>
          </Box>
          <RemoveIcon onClick={handleDelete} />
        </Box>

        <Box marginTop={theme.spaces.medium} justifyContent='space-between'>
          <Text maxWidth={theme.spaces.largeDecreased} fontSize='small.semiLarge'>
            {formatMessage({ id: 'confirm-deleting-organization.warning' })}
          </Text>
          <Button
            onClick={removeOrganization}
            shape='rectangle'
            size='middlingRoundedPadding'
            variant='lightBlueBackgroundButton'
          >
            {formatMessage({ id: 'confirm-deleting-organization.yes' })}
          </Button>
          <Button
            onClick={handleDelete}
            size='middlingRoundedPadding'
            variant='lightBlueBackgroundButton'
          >
            {formatMessage({ id: 'confirm-deleting-organization.no' })}
          </Button>
        </Box>
      </Column>
    </motion.div>
  )
}

export { AnimatedCard }
