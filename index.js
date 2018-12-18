// Deck Pieces
import intro from './topics/intro.mdx';
import basics from './topics/basics.mdx';
// Theme
export { default as theme } from './theme/slalom-theme-mdx';
// Export all mdx slides that have been imported
export default [...intro, ...basics];
