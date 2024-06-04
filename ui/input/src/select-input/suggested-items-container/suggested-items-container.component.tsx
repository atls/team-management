import styled                                         from '@emotion/styled'

import React                                          from 'react'
import { FC }                                         from 'react'

import { Condition }                                  from '@ui/condition'
import { Box }                                        from '@ui/layout'

import { SuggestedItem }                              from '../suggested-item'
import { SuggestedItemsContainerProps }               from './suggested-items-container.interfaces'
import { baseSuggestedItemsContainerBoxStyles }       from './suggested-items-container.styles'
import { shapeSuggestedItemsContainerBoxStyles }      from './suggested-items-container.styles'
import { appearanceSuggestedItemsContainerBoxStyles } from './suggested-items-container.styles'

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
