const white = '#FFFFFF'
const gray100 = '#F2F2F2'
const gray200 = '#E4E4E4'
const gray400 = '#C9C9C9'
const gray800 = '#949494'
const gray1400 = '#434343'
const gray1600 = '#282828'

const blue0 = '#F5F9FF'
const blue100 = '#C5DCFD'
const blue400 = '#508EE9'

export const colors = {
  white,
  gray100,
  gray200,
  gray800,
  gray1400,
  gray1600,
  dropdown: {
    button: {
      default: white,
      hover: blue0,
      pressed: blue100,
    },
  },
  switch: {
    base: {},
    icon: {
      default: {
        background: gray100,
        thumb: gray1600,
      },
      checked: {
        background: blue100,
        thumb: blue400,
      },
    },
    theme: {
      default: {
        background: white,
        thumb: gray1600,
      },
      checked: {
        thumb: blue400,
      },
      hover: {
        thumb: gray100,
      },
    },
    default: {
      background: gray100,
      hover: {
        background: gray100,
      },
    },
    checked: {
      background: gray100,
      hover: {
        background: gray100,
      },
    },
    thumb: {
      default: gray400,
      checked: blue400,
    },
  },
}
