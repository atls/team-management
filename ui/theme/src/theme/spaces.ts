export const spaces = {
  dropdown: {
    dot: 3,
    childContainer: {
      padding: 10,
    },
    layer: {
      triggerOffset: 12,
      containerOffset: 16,
      arrowOffset: 16,
    },
    button: {
      width: 40,
      height: 28,
      gap: 3,
    },
  },
  input: {
    padding: 18,
  },
  modal: {
    container: {
      position: 'fixed',
      zIndex: 1300,
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    backdrop: {
      position: 'fixed',
      zIndex: -1,
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    childContainer: {
      margin: 'auto',
      padding: '12px 24px',
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1400,
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    },
  },
  switch: {
    baseSwitch: {
      thumb: 12,
      handle: {
        width: 28,
        height: 12,
      },
    },
    iconSwitch: {
      handle: {
        width: 70,
        height: 28,
      },
      thumb: 24,
    },
    themeSwitch: {
      handle: {
        width: 92,
        height: 42,
      },
      thumb: {
        width: 34,
        height: 22,
      },
    },
  },
}
