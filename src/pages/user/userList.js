import React from 'react'
import {Table, Popconfirm} from 'antd'
import { Link } from 'react-router-dom'
import { del } from '../../utils/request'

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender'
    },
    {
        title: '操作',
        key: 'action',
        render:()=>{
            function handleDelete(){
                //通知服务器杀人
                //特别注意，要把书籍列表里的onwerId删掉
                del()
            }
            return(
                <div>
                    <Link to='/'>编辑</Link>
                    <Popconfirm
                        title='确定要删除此用户吗？'
                        onConfirm={this.state.handleDelete}
                        okText='是'
                        cancelText='否'>
                         <a href='javascript:void(0)' onClick={()=>this.handleDelete()}>删除</a>
                    </Popconfirm>
                </div>
            )
        }
    }
]

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userList: []
        }
    }

    componentWillMount(){
        //取得userList
    }

    handleDelete(){
        //通知服务器杀人
        //特别注意，要把书籍列表里的onwerId删掉
    }
    render(){
        return(
            <>
                <header>用户列表</header>
                <Table
                    columns={columns}
                    expandable={{
                        expandedRowRender: userInfo=>{
                            userInfo.bookList.map((bookId)=>{
                                return(
                                    <div>{bookId}</div>
                                )
                            })
                        }
                    }}
                    dataSource={this.state.userList}
                />
            </>
        )
    }
}

export default UserList