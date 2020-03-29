import Router from './router.js'
import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import {Provider} from 'react-redux'
import store from './redux/store'

const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<Provider store={store}><Router /></Provider>, wrapper) : false