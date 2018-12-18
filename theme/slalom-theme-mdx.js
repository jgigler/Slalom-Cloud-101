import theme from 'mdx-deck/themes';

import { code, body, header } from './fonts';
import colors from './colors';
import codeTheme from './slalom-code-theme';

export * from './layouts';

const colorsArray = [colors.green, colors.magenta];

export default {
  ...theme,
  font: header.join(','),
  monospace: code.join(','),
  transitionTimingFunction: 'linear',
  transitionDuration: '.33s',
  colors: {
    background: 'white',
    heading: colors.slalom
  },
  blockquote: {
    color: colors.slalom,
    paddingLeft: '2rem',
    borderLeft: `5px solid ${colors.slalom}`
  },
  paragraph: {
    color: colors.slalom
  },
  li: {
    color: colors.slalom,
    paddingTop: `20px`
  },
  img: {
    outline: `2px solid ${
      colorsArray[Math.floor(Math.random() * colorsArray.length)]
    }`,
    outlineOffset: `2px`
    // outline: `5px solid ${colors.green}`
  },
  prism: {
    style: codeTheme
  }
};
