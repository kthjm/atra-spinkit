import { resolve } from 'path'
import { DllPlugin } from 'webpack'

const VAR_NAME = 'dll'
const OUT = resolve('_serve')

export default {
  // context: __dirname,
  entry: ['react', 'react-dom', 'atra', 'inline-style-prefixer', 'cuid'],
  output: {
    filename: `${VAR_NAME}.js`,
    path: OUT,
    library: VAR_NAME
  },
  plugins: [
    new DllPlugin({
      path: resolve(OUT, `${VAR_NAME}.manifest.json`),
      name: VAR_NAME
    })
  ]
}
