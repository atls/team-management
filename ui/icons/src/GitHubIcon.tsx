import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'
export const GitHubIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 18 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.7927 4.94159C15.9879 3.52808 14.8962 2.409 13.5174 1.5841C12.1384 0.759153 10.6329 0.346786 8.99992 0.346786C7.36712 0.346786 5.86115 0.759279 4.48241 1.5841C3.10347 2.40896 2.01185 3.52808 1.20704 4.94159C0.402362 6.35507 0 7.89859 0 9.57212C0 11.5824 0.572164 13.3901 1.71678 14.9957C2.86127 16.6014 4.33978 17.7125 6.15219 18.3291C6.36316 18.3692 6.51934 18.341 6.62088 18.2451C6.72247 18.1491 6.7732 18.0289 6.7732 17.8849C6.7732 17.8609 6.77119 17.6447 6.76729 17.2362C6.76327 16.8277 6.76138 16.4714 6.76138 16.1673L6.49184 16.2151C6.31998 16.2474 6.10319 16.261 5.84144 16.2572C5.57983 16.2534 5.30823 16.2253 5.02703 16.1731C4.74571 16.1213 4.48405 16.0011 4.24185 15.8129C3.99977 15.6248 3.82791 15.3784 3.72633 15.0743L3.60914 14.7979C3.53104 14.6138 3.40807 14.4094 3.24007 14.1853C3.07207 13.961 2.90219 13.809 2.73034 13.7289L2.64829 13.6687C2.59362 13.6287 2.54289 13.5804 2.49597 13.5244C2.4491 13.4684 2.414 13.4124 2.39057 13.3563C2.36709 13.3001 2.38655 13.254 2.44914 13.2179C2.51173 13.1817 2.62485 13.1642 2.78899 13.1642L3.02327 13.2001C3.17953 13.2322 3.37281 13.3281 3.60336 13.4883C3.83378 13.6485 4.0232 13.8566 4.17166 14.1128C4.35144 14.4412 4.56803 14.6915 4.82206 14.8637C5.07588 15.0359 5.33179 15.1218 5.58955 15.1218C5.84731 15.1218 6.06994 15.1018 6.25751 15.062C6.44488 15.0219 6.62068 14.9617 6.78482 14.8817C6.85513 14.3449 7.04656 13.9325 7.35895 13.6443C6.9137 13.5963 6.51339 13.5241 6.15782 13.428C5.80245 13.3318 5.43523 13.1758 5.05638 12.9593C4.67733 12.7432 4.36289 12.4748 4.11297 12.1546C3.86301 11.8343 3.65787 11.4137 3.49783 10.8933C3.33772 10.3727 3.25764 9.7721 3.25764 9.09143C3.25764 8.12226 3.56629 7.29752 4.18348 6.61677C3.89437 5.88813 3.92166 5.07131 4.26545 4.16638C4.49202 4.09423 4.82801 4.14838 5.27326 4.32849C5.7186 4.5087 6.04466 4.66307 6.25177 4.79105C6.45888 4.919 6.62482 5.02743 6.74985 5.11536C7.47654 4.90722 8.22647 4.80313 8.99984 4.80313C9.7732 4.80313 10.5233 4.90722 11.25 5.11536L11.6953 4.8272C11.9998 4.63492 12.3594 4.45871 12.7732 4.29854C13.1873 4.13845 13.5039 4.09435 13.7228 4.16651C14.0742 5.07148 14.1055 5.88826 13.8163 6.61689C14.4335 7.29765 14.7422 8.12259 14.7422 9.09155C14.7422 9.77223 14.6619 10.3747 14.502 10.8993C14.3419 11.424 14.135 11.8442 13.8812 12.1606C13.6271 12.4771 13.3106 12.7434 12.9318 12.9595C12.5529 13.1757 12.1855 13.3318 11.8302 13.428C11.4746 13.5242 11.0743 13.5965 10.6291 13.6445C11.0352 14.0047 11.2383 14.5734 11.2383 15.3501V17.8845C11.2383 18.0285 11.2871 18.1487 11.3849 18.2448C11.4825 18.3407 11.6367 18.3689 11.8477 18.3287C13.6603 17.7122 15.1389 16.6011 16.2833 14.9954C17.4276 13.3898 18 11.5821 18 9.57179C17.9996 7.89847 17.597 6.35507 16.7927 4.94159Z'
        fill='#282828'
      />
      <path
        d='M6.62088 18.2451C6.51934 18.341 6.36316 18.3692 6.15219 18.3291C7.14422 18.6666 10.5 18.8468 11.8477 18.3287C11.6367 18.3689 11.4825 18.3407 11.3849 18.2448C11.2871 18.1487 11.2383 18.0285 11.2383 17.8845V15.3501C11.2383 14.5734 11.0352 14.0047 10.6291 13.6445C11.0743 13.5965 11.4746 13.5242 11.8302 13.428C12.1855 13.3318 12.5529 13.1757 12.9318 12.9595C13.3106 12.7434 13.6271 12.4771 13.8812 12.1606C14.135 11.8442 14.3419 11.424 14.502 10.8993C14.6619 10.3747 14.7422 9.77223 14.7422 9.09155C14.7422 8.12259 14.4335 7.29765 13.8163 6.61689C14.1055 5.88826 14.0742 5.07148 13.7228 4.16651C13.5039 4.09435 13.1873 4.13845 12.7732 4.29854C12.3594 4.45871 11.9998 4.63492 11.6953 4.8272L11.25 5.11536C10.5233 4.90722 9.7732 4.80313 8.99984 4.80313C8.22647 4.80313 7.47654 4.90722 6.74985 5.11536C6.62482 5.02743 6.45888 4.919 6.25177 4.79105C6.04466 4.66307 5.7186 4.5087 5.27326 4.32849C4.82801 4.14838 4.49202 4.09423 4.26545 4.16638C3.92166 5.07131 3.89437 5.88813 4.18348 6.61677C3.56629 7.29752 3.25764 8.12226 3.25764 9.09143C3.25764 9.7721 3.33772 10.3727 3.49783 10.8933C3.65787 11.4137 3.86301 11.8343 4.11297 12.1546C4.36289 12.4748 4.67733 12.7432 5.05638 12.9593C5.43523 13.1758 5.80245 13.3318 6.15782 13.428C6.51339 13.5241 6.9137 13.5963 7.35895 13.6443C7.04656 13.9325 6.85513 14.3449 6.78482 14.8817C6.62068 14.9617 6.44488 15.0219 6.25751 15.062C6.06994 15.1018 5.84731 15.1218 5.58955 15.1218C5.33179 15.1218 5.07588 15.0359 4.82206 14.8637C4.56803 14.6915 4.35144 14.4412 4.17166 14.1128C4.0232 13.8566 3.83378 13.6485 3.60336 13.4883C3.37281 13.3281 3.17953 13.2322 3.02327 13.2001L2.78899 13.1642C2.62485 13.1642 2.51173 13.1817 2.44914 13.2179C2.38655 13.254 2.36709 13.3001 2.39057 13.3563C2.414 13.4124 2.4491 13.4684 2.49597 13.5244C2.54289 13.5804 2.59362 13.6287 2.64829 13.6687L2.73034 13.7289C2.90219 13.809 3.07207 13.961 3.24007 14.1853C3.40807 14.4094 3.53104 14.6138 3.60914 14.7979L3.72633 15.0743C3.82791 15.3784 3.99977 15.6248 4.24185 15.8129C4.48405 16.0011 4.74571 16.1213 5.02703 16.1731C5.30823 16.2253 5.57983 16.2534 5.84144 16.2572C6.10319 16.261 6.31998 16.2474 6.49184 16.2151L6.76138 16.1673C6.76138 16.4714 6.76327 16.8277 6.76729 17.2362C6.77119 17.6447 6.7732 17.8609 6.7732 17.8849C6.7732 18.0289 6.72247 18.1491 6.62088 18.2451Z'
        fill='white'
      />
    </svg>
  )
}