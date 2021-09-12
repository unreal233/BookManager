import React from 'react'
import {Form, Input, Button, Radio} from 'antd'
import {post, put} from '../utils/request'

class UserEditor extends React.Component{
    constructor(props){
        super(props)
        const newUser = {
            name: '',
            age: 0,
            gender: '',
            booklist: []
        }
        this.state = {
            user: newUser
        }
    }

    onSubmit(value){
        let url = 'http://localhost:3000/user'
        let method = post
        const totalValue = {
            ...value,
            booklist: this.state.user.booklist
        }
        if(this.props.edit){
            url+=`/${this.props.user.id}`
            method = put
        }
        method(url, totalValue, this)
        .then((res)=>{
            alert('添加成功!(可以在用户列表中查看修改)')
        })
    }

    formRef = React.createRef()

    componentWillReceiveProps(nextProps){
        const {name, age, gender} = nextProps.user
        this.setState({
            user: nextProps.user
        })
        this.formRef.current.setFieldsValue({
            name: name,
            age: age,
            gender: gender,
        })
    }

    render(){
        const {id, name, age, gender} = this.state.user
        return(
            <div>
                <header>{this.props.edit ? `修改用户(${id})` : '添加用户'}</header>
                <Form
                    className='inputForm'
                    onFinish={this.onSubmit.bind(this)}
                    ref={this.formRef}
                >
                    <Form.Item
                        label='用户名'
                        name='name'
                        rules={[{required: true, message: '请输入用户名'},
                                {max: 10, message: '书籍名不得超过10个字符'}]}
                    >
                        <Input defaultValue={name} />
                    </Form.Item>
                    <Form.Item
                        label='年龄'
                        name='age'
                        rules={[{required: true, message: '请输入年龄'},
                                {min: 0, message: '年龄不得低于0'}]}
                    >
                        <Input defaultValue={age} type='number'/>
                    </Form.Item>
                    <Form.Item
                        label='性别'
                        name='gender'
                        rules={[{required: true, message: '请输入性别'}]}
                    >
                        <Radio.Group
                            defaultValue = {gender || 'male'}
                            onChange = {e=>{
                                this.setState({
                                    gender: e.target.value
                                })
                            }}
                        >
                            <Radio value='male'>男</Radio>
                            <Radio value='female'>女</Radio>
                        </Radio.Group>
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