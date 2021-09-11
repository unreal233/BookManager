import React from 'react';
import {Tag, Table, Popconfirm} from 'antd'
import {Link, Redirect} from 'react-router-dom'
import { del, get } from '../../utils/request';

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
        render: tags=>(
            <>
                {tags.map((tag)=>{
                    return(<Tag key={tag}>
                        {tag}
                    </Tag>)
                })}
            </>
        )
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record)=>{
            function handleDelete(){
                //通知服务器焚书
                del(`http://localhost:3000/book/${record.id}`, this)
                .then(()=>{
                    return(
                        <Redirect to='/book/list'/>
                    )
                })
            }
            return(
                <>
                    <Link to={`/book/edit/${record.id}`}>编辑</Link>
                    <Popconfirm
                        title='确定要删除此条目吗？'
                        onConfirm={handleDelete}
                        okText='是'
                        cancelText='否'>
                         <a href='javascript:void(0)' onClick={()=>handleDelete()}>删除</a>
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
        get('http://localhost:3000/book', this)
        .then(res=>{
            this.setState({
                bookList: res
            })
        })
    }

    render(){
        return(
            <div>
                <header>书籍列表</header>
                <Table columns={columns} dataSource={this.state.bookList} />
                {
                    //引入echart做tag统计表、价格统计表、最受欢迎统计表
                }
            </div>
        )
    }
}

export default BookList