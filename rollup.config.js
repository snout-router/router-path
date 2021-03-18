import typescript from 'rollup-plugin-typescript2'

import {main, module} from './package.json'

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({
      clean: true,
      tsconfigOverride: {
        include: ['src/**/*'],
      },
    }),
  ],
  output: [
    {
      format: 'cjs',
      file: main,
      sourcemap: true,
    },
    {
      format: 'es',
      file: module,
      sourcemap: true,
    },
  ],
}
