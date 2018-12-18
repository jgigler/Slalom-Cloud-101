import { injectGlobal } from 'styled-components';

// Deck Pieces
import intro from './topics/intro.mdx';
import basics from './topics/basics.mdx';
// main color HEX #0072C8
// TODO customize this
export { default as theme } from './theme/slalom-theme-mdx';
// Export all mdx slides that have been imported
export default [...intro, ...basics];
