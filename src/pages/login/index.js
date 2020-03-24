import React, {Component} from 'react'
import logo from '../../public/icons/logo.svg'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import './style.scss'



let fields =  {
    email: {
        name: 'E-mail',
        type: 'email',
        minLength: 5,
        regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        defaultError: 'Your email is invalid.'
    },
    password: {
        name: 'Password',
        type: 'password',
        minLength: 8,
        regex: new RegExp(""),
        defaultError: 'Your password needs at least 8 digits and an Uppercase Letter.'
    }
}



class Login extends Component {
    constructor(props){
        super(props)
        this.state = this.generateState(fields);
    }

    generateState = (fields) => {
        let state = {}
        state['error'] = {}
        Object.keys(fields).forEach((key)=>{
            state[key] = ''
            state.error[key] = ''
        })
        return state;
    }

    validateForm = () => {
        let errors = []
        Object.keys(fields).forEach((key)=>{
            let isValid = this.isFieldValid(this.state[key], fields[key].minLength, fields[key].regex)
            let error = (isValid) ? '' : fields[key].defaultError 
            if (error) errors.push(error)
            this.setError(key, error)
        })
        if (errors.length > 0) throw new Error(`Invalid form input:${errors}`)
    }

    attemptLogin = () => {
        
        let {email,password} = this.state
        payload = {email, password}
        //await this.login(payload)

    }

    login = (payload) => {
        try {
            console.log('MAKE API CALL HERE')
        } catch (err) {
            throw new Error(err)
        }
    }




    isFieldValid = (input, minLength, regex) => {
        if (input.length < minLength) return false
        return regex.test(input)
    }

    setError = (key, error) => {
        this.setState((previousState)=>{
            let newState = Object.create(previousState)
            newState.error[key]=error
            return newState
        })
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

    handleSubmit = () => {
        try {
            this.validateForm()
        } catch (err) {
            console.log(err)
        }
    }

    generateFields = (fields) => {
        
        return Object.keys(fields).map((key)=><React.Fragment key={key} >
            <TextInput type={fields[key].type} name={fields[key].name} handleChange={this.handleChangeFactory(key)} value={this.state[key]}/>
            <InputError value={this.state.error[key]}/>
            </React.Fragment>
        )       
    }

    render(){ 
        let inputFields = this.generateFields(fields)

        return (
        <div id='login_page_wrapper'>
            <div id='login_wrapper'>
                <img src={logo} id='logo_main'/>
                <h3 id='login__welcome'>Welcome!</h3>
                <p id='login__p'>Sign in to your account with your e-mail and password:</p>
                {inputFields}
                <Button type='ghost' text='I forgot my password'/>
                <Button onClick={this.handleSubmit} type='primary' available={this.loginButtonAvailable()} text='Login'/>
            </div>
        </div>)

    }
}


function InputError(props){

    if (props.value) {
        return <div className='input_error'>{props.value}</div>
    } else {
        return <div></div>
    }
     
}

export default Login