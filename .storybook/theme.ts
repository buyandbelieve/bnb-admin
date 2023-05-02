import { create } from '@storybook/theming/create'

export default create({
   base: 'light',

   brandTitle: "Buy&Believe",
   brandUrl: "https://buyandbelieve.com",
   brandImage: "https://bnb-contents-dev.s3.ap-northeast-2.amazonaws.com/logo.svg",

   // UI
    appBg: 'rgba(255, 255, 255, 0.6)',
    appContentBg: '#ffffff',
    appBorderColor: '#e6e6e6',
    appBorderRadius: 4,

    // Text colors
    textColor: '#333333',
    textInverseColor: '#ffffff',
})