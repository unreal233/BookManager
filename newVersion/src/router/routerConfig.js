import React from 'react'

const Login = React.lazy(()=>import('../pages/others/login'))
const Welcome = React.lazy(()=>import('../pages/others/welcome'))

const BookAdd = React.lazy(()=>import('../pages/book/bookAdd'))
const BookList = React.lazy(()=>import('../pages/book/bookList'))
const BookEdit = React.lazy(()=>import('../pages/book/bookEdit'))

const UserAdd = React.lazy(()=>import('../pages/user/userAdd'))
const UserList = React.lazy(()=>import('../pages/user/userList'))
const UserEdit = React.lazy(()=>import('../pages/user/userEdit'))

var routes = [
  {path: "/login", component: Login, auth: false},
  {path: "/welcome", component: Welcome, auth: true},
  {path: "/book/add", component: BookAdd, auth: true},
  {path: "/book/list", component: BookList, auth: true},
  {path: "/book/edit", component: BookEdit, auth: true},
  {path: "/user/add", component: UserAdd, auth: true},
  {path: "/user/list", component: UserList, auth: true},
  {path: "/user/edit", component: UserEdit, auth: true}
]
export default routes ;