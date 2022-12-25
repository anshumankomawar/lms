import localFont from '@next/font/local'

export const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-ExtraBold.otf',
      style: 'bold',
    },
    {
      path: '../public/fonts/Gilroy-Light.otf',
      style: 'normal',
    },
  ],
})
