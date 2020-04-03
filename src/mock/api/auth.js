
const Auth = {
    login: async (email, password) => {
        //payload: {email,password}
        //success: {access token,refresh token}
        //failure: {error}
        return {body: {accessToken: ''}}
    }
}


export default Auth