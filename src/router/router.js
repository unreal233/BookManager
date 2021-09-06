import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
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

const Router = () => {
    <HashRouter>
        <Route exact path='/login' component={Login} />
        <MainLayout>
            <Route exact path='/welcome' component={Welcome} />
            <Route exact path='/rendBook' component={RendBook}/>
            <Route path='/user' render={
                <div>
                    <Route exact path='/add' component={BookAdd} />
                    <Route exact path='/list' component={BookList} />
                    <Route exact path='/:id' component={BookEdit} />
                </div>
            } />
            <Route path='/book' render={
                <div>
                    <Route exact path='/add' component={UserAdd} />
                    <Route exact path='/list' component={UserList} />
                    <Route exact path='/:id' component={UserEdit} />
                </div>
            } />
        </MainLayout>
    </HashRouter>
}

export default Router