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

    formRef = React.createRef()

    componentWillReceiveProps(nextProps){
        const {name, price, tag} = nextProps.book
        this.setState({
            book: nextProps.book
        })
        this.formRef.current.setFieldsValue({
            name: name,
            price: price,
            tag: tag,
        })
    }

    onSubmit(value){
        let url = 'http://localhost:3000/book'
        let method = post
        if(this.props.edit){
            url+=`/${this.props.book.id}`
            method = put
        }
        let newValue ={ //tag系统待实现，先暂时空置一下
            ...value,
            tag: []
        }
        method(url, newValue, this)
        .then(()=>{
            alert('添加成功!(可以在书籍列表中查看修改)')
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
                    ref={this.formRef}
                >
                    <Form.Item
                        label='书籍名称'
                        name='name'
                        rules={[{required: true, message: '请输入书籍名'},
                                {max: 20, message: '书籍名不得超过20个字符'}]}
                    >
                        <Input defaultValue={name} />
                    </Form.Item>
                    <Form.Item
                        label='价格'
                        name='price'
                        rules={[{required: true, message: '请输入数字'}]}
                    >
                        <Input defaultValue={price} />
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