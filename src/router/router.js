import React, {Suspense} from 'react'
import {HashRouter, Route, Redirect} from 'react-router-dom'
import MainLayout from '../layout/mainLayout'

const Login = React.lazy(()=>import('../pages/others/login'))
const Welcome = React.lazy(()=>import('../pages/others/welcome'))
const RendBook = React.lazy(()=>import('../pages/others/rendBook'))

const BookAdd = React.lazy(()=>import('../pages/book/bookAdd'))
const BookList = React.lazy(()=>import('../pages/book/bookList'))
const BookEdit = React.lazy(()=>import('../pages/book/bookEdit'))

const UserAdd = React.lazy(()=>import('../pages/user/userAdd'))
const UserList = React.lazy(()=>import('../pages/user/userList'))
const UserEdit = React.lazy(()=>import('../pages/user/userEdit'))

class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <Route exact path='/login' component={Login} />
                <MainLayout>
                    <Suspense fallback='<div>Loading</div>'>
                        <Redirect exact from='/' to='/welcome' />
                        <Route exact path='/welcome' component={Welcome} />
                        <Route exact path='/rendBook' component={RendBook}/>
                        <Route exact path='/book/add' component={BookAdd}/>
                        <Route exact path='/book/list' component={BookList}/>
                        <Route exact path='/book/:id' component={BookEdit}/>
                        <Route exact path='/user/add' component={UserAdd}/>
                        <Route exact path='/user/list' component={UserList}/>
                        <Route exact path='/user/:id' component={UserEdit}/>
                        <Redirect exact from='/*' to='/welcome' />
                    </Suspense>
                </MainLayout>
            </HashRouter>
        )
    }
}

export default Router