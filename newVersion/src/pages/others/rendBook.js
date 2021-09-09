import React from 'react'
import {Form , Button, AutoComplete} from 'antd'

class RendBook extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userList: null,
            bookList: null,
            userAuto: null,
            bookAuto: null
        }
    }

    componentWillMount(){
        //从服务器拿到用户名单和书籍名单
        //用于autoComplete和书籍的借阅情况判定（一本书只能借出给一个人）
        //用userList和bookList的值生成auto列表
    }

    onFinish(){
        //向服务器同时提交对用户和书籍的双向借阅
        //额外验证用户和书籍的合法性(不考虑性能的话在rules里面校验)
    }

    onChange(){

    }

    render(){
        return(
            <>
                <header>借书界面</header>
                <Form
                    className='rendForm'
                    onFinish={this.onSubmit}
                >
                    <AutoComplete
                        
                        placeholder='请输入(借阅者)用户名'
                    />
                    <AutoComplete
                        //修改要求：一次借阅多本书籍
                        placeholder='请输入书籍名'
                    />
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default RendBook