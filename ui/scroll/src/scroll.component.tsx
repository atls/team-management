import React          from 'react'
import {ScrollContainer} from "./scroll.styles";

import { ScrollProps } from './scroll.interface'

const Scroll: React.FC<ScrollProps> = ({ children }) => (
  <ScrollContainer>{children}</ScrollContainer>
)

export { Scroll }
