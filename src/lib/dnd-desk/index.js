export TaskApp from './multi-drag/task-app';
export Board from './board/board';

import { generateQuoteMap } from './data';

export const data = {
  medium: generateQuoteMap(100),
  large: generateQuoteMap(500),
};