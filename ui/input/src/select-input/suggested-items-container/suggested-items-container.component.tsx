import styled                                         from '@emotion/styled'
import { FC }                                         from 'react'
import React                                          from 'react'

import { Condition }                                  from '@ui/condition'
import { Box }                                        from '@ui/layout'

import { SuggestedItem }                              from '../suggested-item/index.js'
import { SuggestedItemsContainerProps }               from './suggested-items-container.interfaces.js'
import { baseSuggestedItemsContainerBoxStyles }       from './suggested-items-container.styles.js'
import { shapeSuggestedItemsContainerBoxStyles }      from './suggested-items-container.styles.js'
import { appearanceSuggestedItemsContainerBoxStyles } from './suggested-items-container.styles.js'

const SuggestedItemsContainerBox = styled(Box)(
  baseSuggestedItemsContainerBoxStyles,
  shapeSuggestedItemsContainerBoxStyles,
  appearanceSuggestedItemsContainerBoxStyles
)

export const SuggestedItemsContainer: FC<SuggestedItemsContainerProps> = ({
  suggestedItems,
  renderLayer,
  width,
  layerProps,
}) => (
  <Condition match={!!suggestedItems.length}>
    {renderLayer(
      <SuggestedItemsContainerBox width={width} {...layerProps}>
        {suggestedItems.map((suggestedItemData) => (
          <SuggestedItem {...suggestedItemData} />
        ))}
      </SuggestedItemsContainerBox>
    )}
  </Condition>
)
