import { bench, describe } from 'vitest';
import { union as unionToolkit_ } from 'es-toolkit';
import { union as unionLodash_ } from 'lodash';

const unionToolkit = unionToolkit_;
const unionLodash = unionLodash_;

describe('union', () => {
  bench('es-toolkit/union', () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 4, 5];
    unionToolkit(array1, array2);
  });

  bench('lodash/union', () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 4, 5];
    unionLodash(array1, array2);
  });
});
