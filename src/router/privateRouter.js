import React from "react";
import {Redirect, Route} from "react-router-dom";

const expireTime = 1000 * 60;

class PrivateRouter extends React.Component{
    render(){
        const {path, component} = this.props
        const token = sessionStorage.getItem('access_token') || null
        let isLogin = false
        if(token){
            if (!(Date.now() - token > expireTime)){
                isLogin = true
            }
        }
        if(isLogin){
            return(<Route exact path={path} component={component}/>)
        }
        else{
            return(<Redirect to='/login' />)
        }
    }
}

export default PrivateRouter