import theme from 'mdx-deck/themes';

import { code, body, header } from './fonts';
import colors from './colors';
import codeTheme from './slalom-code-theme';

export * from './layouts';

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
    color: colors.slalom
  },
  prism: {
    style: codeTheme
  }
};
