import Form from './js/components/form.js'
import React from 'react'
import ReactDOM from 'react-dom'

const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<Form />, wrapper) : false