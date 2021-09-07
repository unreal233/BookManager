import React from 'react'
import {Form, Input, Button, Select, Option} from 'antd'

class UserEditor extends React.Component{
    constructor(props){
        super(props)
        const newUser = {
            name: '',
            age: 0,
            gender: ''
        }
        this.state = {
            user: props.user || newUser
        }
    }

    onSubmit(value){
        //提交数据
    }

    render(){
        const {id, name, age, gender} = this.state.user
        return(
            <div>
                <header>{this.props.edit ? `修改用户(${id})` : '添加用户'}</header>
                <Form
                    className='inputForm'
                    onFinish={this.onSubmit}
                >
                    <Form.Item
                        label='用户名'
                        name='username'
                        rules={[{required: true, message: '请输入用户名'},
                                {max: 10, message: '书籍名不得超过10个字符'}]}
                    >
                        <Input value={name} />
                    </Form.Item>
                    <Form.Item
                        label='年龄'
                        name='age'
                        rules={[{required: true, message: '请输入年龄'},
                                {min: 0, message: '年龄不得低于0'}]}
                    >
                        <Input value={age} type='number'/>
                    </Form.Item>
                    <Form.Item
                        label='性别'
                        name='gender'
                        rules={[{required: true, message: '请输入性别'}]}
                    >
                        <Select
                            defaultValue={gender || null}
                            placeholder='请输入性别'
                            allowClear
                        >
                            <Option value='male'>男</Option>
                            <Option value='female'>女</Option>
                        </Select>
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

export default UserEditor