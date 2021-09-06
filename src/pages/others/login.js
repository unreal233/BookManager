import React from 'react'
import {Form, Input, Button} from 'antd'

class Login extends React.Component{
    onSubmit(){
        //联络服务器登录，根据返回判断是否成功，成功跳转回主页
        //改进：进入系统自动跳转login界面，登录后不能再进入该界面，登出返回
    }

    render(){
        return(
            <div class='backgoroud'>
                <header class='header'>BookManager登录</header>
                <Form
                    className='loginForm'
                    onFinish={this.onSubmit}
                >
                    <Form.Item
                        label='用户名'
                        name='username'
                        rules={[{required: true, message: '请输入用户名'}]}
                    >
                        <Input placeholder='请输入密码'/>
                    </Form.Item>
                    <Form.Item
                        label='密码'
                        name='password'
                        rules={[{required: true, message: '请输入用户名'}]}
                    >
                        <Input.Password placeholder='请输入用户名'/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
} 

export default Login