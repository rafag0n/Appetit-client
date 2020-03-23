import React, {Component} from 'react'
import TextInput from '../components/TextInput'
import ButtonGhost from '../components/ButtonGhost'
import ButtonPrimary from '../components/ButtonPrimary'

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

    updateStateFactory = (key) => {  
        return function(newValue){
            this.setState((previousState)=>{
                let newState = Object.create(previousState)
                newState[key] = newValue
                return newState
            })
            return 
        }
    }

    loginButtonAvailable = () => {
        let isAvailable = this.state.email && this.state.password
        return isAvailable
    }

    render(){
        return (
        <div>
            <h3>Welcome!</h3>
            <p>Sign in to your account with your e-mail and password:</p>
            <TextInput onUpdate={this.updateStateFactory('email')} value={this.state.email}/>
            <TextInput onUpdate={this.updateStateFactory('password')} value={this.state.password}/>
            <ButtonGhost text='I forgot my password'/>
            <ButtonPrimary available={this.loginButtonAvailable()} text='Login'/>
        </div>)

    }
}

export default Login