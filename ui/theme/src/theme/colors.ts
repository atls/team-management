const WHITE = '#FFFFFF'
const GRAY_100 = '#F2F2F2'
const GRAY_200 = '#E4E4E4'
const GRAY_400 = '#C9C9C9'
const GRAY_1400 = '#434343'
const GRAY_1600 = '#282828'

const BLUE_0 = '#F5F9FF'
const BLUE_100 = '#C5DCFD'
const BLUE_400 = '#508EE9'

const BLACK_50 = '00000080'

export const colors = {
  input: {
    light: {
      backgroundColor: GRAY_200,
      fontColor: GRAY_1600,
    },
    dark: {
      backgroundColor: GRAY_1400,
      fontColor: WHITE,
    },
  },
  modal: {
    childContainer: WHITE,
    backdrop: BLACK_50,
  },
  dropdown: {
    button: {
      default: WHITE,
      hover: BLUE_0,
      pressed: BLUE_100,
    },
    dot: {
      background: BLUE_400,
    },
    childContainer: WHITE,
  },
  switch: {
    baseSwitch: {
      handle: {
        default: GRAY_100,
      },
      thumb: {
        default: GRAY_400,
        checked: BLUE_400,
      },
    },
    iconSwitch: {
      handle: {
        default: GRAY_100,
        checked: BLUE_100,
      },
      thumb: {
        default: GRAY_1600,
        checked: BLUE_400,
      },
    },
    themeSwitch: {
      handle: {
        background: WHITE,
      },
      thumb: {
        default: GRAY_1600,
        hover: GRAY_100,
        checked: BLUE_400,
      },
    },
  },
}
