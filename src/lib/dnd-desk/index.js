
export Board from './board/board';

import { getDeskData } from './data';

export const data = {
  medium: getDeskData(100),
  large: getDeskData(20),
};