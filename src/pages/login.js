import React, {Component} from 'react'
import logo from '../public/icons/logo.svg'
import TextInput from '../components/TextInput'
import ButtonGhost from '../components/ButtonGhost'
import ButtonPrimary from '../components/ButtonPrimary'
import './style.scss'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    validateForm = () => {

    }

    sanitizeForm = () => {

    }

    handleChangeFactory = (key) => {  
        return (newValue) => {
            this.setState((previousState)=>{
                let newState = Object.create(previousState)
                newState[key] = newValue
                return newState
            })
        }
    }

    loginButtonAvailable = () => {
        let isAvailable = this.state.email && this.state.password
        return isAvailable
    }

    render(){
        return (

        <div id='login_page_wrapper'>
            <div id='login_wrapper'>
                <img src={logo} id='logo_main'/>
                <h3 id='login__welcome'>Welcome!</h3>
                <p id='login__p'>Sign in to your account with your e-mail and password:</p>
                <TextInput handleChange={this.handleChangeFactory('email')} value={this.state.email}/>
                <TextInput handleChange={this.handleChangeFactory('password')} value={this.state.password}/>
                <ButtonGhost text='I forgot my password'/>
                <ButtonPrimary available={this.loginButtonAvailable()} text='Login'/>
            </div>
        </div>)

    }
}

export default Login