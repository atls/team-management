import React                    from 'react'
import { FC }                   from 'react'
import { renderToStaticMarkup } from 'react'

const getInviteMailLayoutTemplate = (someString) => {
  return <>blaaaaaa${someString}</>
}

export const htmlTemplate = (someString) =>
  renderToStaticMarkup(getInviteMailLayoutTemplate(someString))
