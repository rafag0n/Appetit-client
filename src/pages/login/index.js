import React, {Component} from 'react'
import logo from '../../public/icons/logo.svg'
import TextInput from '../../components/inputBox/textInput'
import Button from '../../components/button'
import Auth from '../../mock/api/auth'
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
        state['fields'] = {}
        state['serverError'] = ''
        state['loading'] = false
        Object.keys(fields).forEach((key)=>{
            state.fields[key] = ''
            state.error[key] = ''
        })
        return state;
    }

    validateForm = () => {
        let errors = []
        Object.keys(fields).forEach((key)=>{
            let isValid = this.isFieldValid(this.state.fields[key], fields[key].minLength, fields[key].regex)
            let error = (isValid) ? '' : fields[key].defaultError 
            if (error) errors.push(error)
            this.setError(key, error)
        })
        if (errors.length > 0) throw new Error(`Invalid form input:${errors}`)
    }

    attemptLogin = async () => {
        
        const {email,password} = this.state.fields
        //const res = await auth.login(email, password)
        return {body:{}}
         
    }

    onServerResponse = (response) => {
        if (!response.body.error) {
            //DO RESPONSE SUCCESS
        } else {
            this.setServerError(response.body.error)
            throw err;
        }
    }



    isFieldValid = (input, minLength, regex) => {
        if (input.length < minLength) return false
        return regex.test(input)
    }

    setError = (key, message) => {
        this.setState((previousState)=>{
            let newState = Object.create(previousState)
            newState.error[key]=message
            return newState
        })
    }

    setServerError = (message) => {
        this.setState((previousState)=>{
            let newState = Object.create(previousState)
            newState.serverError=message
            return newState
        })
    }


    handleChangeFactory = (key) => {  
        return (newValue) => {
            this.setState((previousState)=>{
                let newState = Object.create(previousState)
                newState.fields[key] = newValue
                return newState
            })
        }
    }

    isLoginButtonEnabled = () => {
        let available = true
        Object.keys(this.state.fields).forEach((key)=>{
            if (this.state.fields[key] == ''){
                available = false
            }
        })
        return available;
    }

    setStateAsync = (state) => {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }


    handleSubmit = async () => {
        if (this.state.loading) return;
        await this.setStateAsync({loading:true})

        try {
            this.validateForm()
            const res = await this.attemptLogin()
            this.onServerResponse(res)
        } catch (err) {
            await this.setStateAsync({loading:false})
            console.log(err)
        }
    }

    generateFields = (fields) => {
        
        return Object.keys(fields).map((key)=><React.Fragment key={key} >
            <TextInput type={fields[key].type} name={fields[key].name} handleChange={this.handleChangeFactory(key)} value={this.state.fields[key]}/>
            <InputError value={this.state.error[key]}/>
            </React.Fragment>
        )       
    }

    render(){ 
        let inputFields = this.generateFields(fields)
        return (
        <div id='login_page_wrapper'>
            <form id='login_wrapper' autoComplete="off">
                <img src={logo} id='logo_main'/>
                <h3 id='login__welcome'>Welcome!</h3>
                <p id='login__p'>Sign in to your account with your e-mail and password:</p>
                {inputFields}
                <Button type='ghost' text='I forgot my password'/>
                <ServerError value={this.state.serverError}/>
                <Button onClick={this.handleSubmit} type='primary' enabled={this.isLoginButtonEnabled()} text='Login'/>
                
            </form>
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


function ServerError(props){

    if (props.value) {
        return <div className='server_error'>{props.value}</div>
    } else {
        return <div></div>
    }
     
}

export default Login