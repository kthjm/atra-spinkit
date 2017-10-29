import React from 'react'
import { render } from 'react-dom'
import Atra from 'atra'
import * as Components from './components'

const a = Atra({
  ROOT: {
    style: {
      maxWidth: 1500,
      margin: '80px auto'
    }
  },
  WRAP: {
    style: {
      margin: '80px 40px',
      display: 'inline-block'
    }
  },
  NAME: {
    style: {
      marginTop: 20
    }
  }
})

const components = Object.entries(Components).map(([name, Component]) => (
  <div {...a('WRAP', { key: name })}>
    <Component
      {...{
        size: 160
        // backgroundColor: "red",
        // objectColor: "blue",
        // duration: 2
      }}
    />
    <div {...a('NAME')}>{name}</div>
  </div>
))

render(<div {...a('ROOT')}>{components}</div>, document.getElementById('mount'))
