import React from "react";
import {Redirect, Route} from "react-router-dom";
import { withRouter } from "react-router";

const expireTime = 1000 * 60;

class PrivateRouter extends React.Component{
    render(){
        const {routerConfig, location} = this.props
        const {pathname} = location
        const token = sessionStorage.getItem('access-token') || null
        const targetRouterConfig = routerConfig.find(
            (item) => {
                return item.path === pathname
            }
        );
        let isLogin = false
        if(token){
            if (Date.now() - token < expireTime){
                isLogin = true
            }
        }
        console.log(targetRouterConfig)
        if(targetRouterConfig && targetRouterConfig.path === '/login'){
            return(<Route exact path='/login' component={targetRouterConfig.component}/>)
        }
        if(isLogin){
            if(targetRouterConfig){
                return(<Route exact path={pathname} component={targetRouterConfig.component}/>)
            }
            else{
                return(<Redirect to='/welcome' />)
            }
        }
        else{
            return(<Redirect to='/login' />)
        }
    }
}

export default withRouter(PrivateRouter)