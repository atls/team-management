import { ConditionalRender }   from '@atls-ui-parts/conditional-render'
import styled                  from '@emotion/styled'
import { FC }                  from 'react'
import { useMemo }             from 'react'
import React                   from 'react'

import { Box }                 from '@ui/layout'

import { IconAttachmentProps } from './icon-attachment.interface.js'

const IconAttachment: FC<IconAttachmentProps> = ({
  iconSvg,
  valueRadius,
  valueBackground,
  valueWidth,
  valueHeight,
}) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(), [])

  return iconSvg !== undefined ? (
    <Attachment>
      <Box
        justifyContent='center'
        alignItems='center'
        borderRadius={valueRadius || 0}
        width={valueWidth || 'auto'}
        height={valueHeight || 'auto'}
        backgroundColor={valueBackground || 'transparent'}
      >
        {iconSvg}
      </Box>
    </Attachment>
  ) : null
}

export { IconAttachment }
