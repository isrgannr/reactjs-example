import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import mockData from './mockData'

ReactDOM.render(<App mockData={mockData} />, document.getElementById('root'))
