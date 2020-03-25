import Router from './router.js'
import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'


const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<Router />, wrapper) : false