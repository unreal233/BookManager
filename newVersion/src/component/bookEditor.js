import React from 'react'
import {Form, Input, Button} from 'antd'
import TagEditer from './tagEdit'
import { post, put } from '../utils/request'

class BookEditor extends React.Component {
    constructor(props){
        super(props)
        const newBook = {
            name: '',
            price: 0,
            tag: [],
        }
        this.state = {
            book: newBook
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            book: nextProps.book
        })
    }

    onSubmit(value){
        let url = 'http://localhost:3000/book'
        let method = post
        if(this.props.edit){
            url+='/'+this.props.book.id
            method = put
        }
        method(url, value, this)
        .then(()=>{
            alert('添加成功')
        })
    }

    render () {
        const {name, price, tag, id} = this.state.book
        return (
            <div>
                <header>{this.props.edit ? `修改书籍(${id})` : '添加书籍'}</header>
                <Form
                    className='inputForm'
                    onFinish={this.onSubmit.bind(this)}
                >
                    <Form.Item
                        label='书籍名称'
                        name='bookname'
                        rules={[{required: true, message: '请输入书籍名'},
                                {max: 20, message: '书籍名不得超过20个字符'}]}
                    >
                        <Input value={name} />
                    </Form.Item>
                    <Form.Item
                        label='价格'
                        name='price'
                        rules={[{required: true, message: '请输入数字'}]}
                    >
                        <Input value={price} />
                    </Form.Item>
                    <Form.Item
                        label='标签'
                        name='tag'
                    >
                        <TagEditer initTag={tag}/>
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

export default BookEditor