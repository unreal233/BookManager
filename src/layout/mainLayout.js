import React from 'react'
import {Layout, Menu, Sider, SubMenu} from 'antd'
import {UserOutlined, ReadOutlined, InfoCircleOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const {Header} = Layout;

class MainLayout extends React.Component {
    handleLogout(){
        //向服务器通知登出
        //页面跳转到Login
    }

    render () {
        return (
            <Layout>
                <Header className='header'>
                    <div className='logo'> 图书管理系统 </div>
                    <div className='loginInfo'>
                        你好,admin | <a href='javascript:void(0);' onClick='handleLogout()'>登出</a>
                    </div>
                </Header>
                <Sider>
                    <Menu
                        className='menu'
                        mode='inline'
                    >
                        <SubMenu icon={<UserOutlined />} title='用户操作'>
                            <Menu.Item><Link to="user/add">添加用户</Link></Menu.Item>
                            <Menu.Item><Link to="user/list">用户列表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu icon={<ReadOutlined />} title='书籍操作'>
                            <Menu.Item><Link to="user/add">添加书籍</Link></Menu.Item>
                            <Menu.Item><Link to="user/list">书籍列表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu icon={<InfoCircleOutlined />} title='其他操作'>
                            <Menu.Item><Link to="welcome">回到首页</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </Layout>
        ) 
    }
}

export default MainLayout