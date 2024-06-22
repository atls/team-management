import { styleFn } from 'styled-system'

export const baseSidebarItemStyles: styleFn = ({ theme }) => ({})

// TODO add padding to spaces
export const shapeSidebarItemStyles: styleFn = ({ theme }) => ({
  width: '100%',
  padding: '4px',
  paddingLeft: '40px',
})

export const appearanceSidebarItemStyles: styleFn = ({ theme }) => ({
  borderLeft: '5px solid red',
})
