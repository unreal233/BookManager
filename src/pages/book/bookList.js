import React from 'react';
import {Tag, Table, Popconfirm} from 'antd'
import {Link} from 'react-router-dom'

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '价格',
        dataIndex: 'price',
        key: 'price'
    },
    {
        title: '标签',
        dataIndex: 'tag',
        key: 'tag',
        render: tags=>{
            tags.map((tag)=>{
                return(<Tag>
                    {tag}
                </Tag>)
            })
        }
    },
    {
        title: '持有者id',
        dataIndex: 'onwerId',
        key: 'onwerId'
    },
    {
        title: '操作',
        key: 'action',
        render:()=>{
            return(
                <>
                    <Link to=''>编辑</Link>
                    <Popconfirm
                        title='确定要删除此条目吗？'
                        onConfirm={this.state.handleDelete}
                        okText='是'
                        cancelText='否'>
                         <a>删除</a>
                    </Popconfirm>
                </>
            )
        }
    }
]

class BookList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookList: []
        }
    }

    componentWillMount(){
        //取得bookList
    }

    handleDelete(){
        //通知服务器把这本书撕了
        //特别注意，要把用户列表里的本书删掉
    }

    render(){
        return(
            <>
                <header>书籍列表</header>
                <Table columns={columns} dataSource={this.state.bookList} />
                {
                    //引入echart做tag统计表、价格统计表、最受欢迎统计表
                }
            </>
        )
    }
}

export default BookList