import Login from './pages/login'
import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'

const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<Login />, wrapper) : false