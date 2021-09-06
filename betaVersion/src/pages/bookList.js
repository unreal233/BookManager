import React from 'react';
import {get} from '../utils/request'

class BookList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bookList : []
        }
    }
    componentWillMount(){
        get('http://localhost:3000/book', this)
        .then(res=>{
            this.setState({
                bookList : res
            })
        })
    }
    handleEdit(book){
        this.props.history.push('/book/edit/'+book.id);
    }
    handleDelete(book){
        // eslint-disable-next-line no-restricted-globals
        if(confirm(`确定要删除${book.name}吗？`)){
            get('http://localhost:3000/book/'+book.id, this)
            .then(()=>{
                this.setState({
                    bookList : this.state.bookList.filter(item => item.id !== book.id)
                })
                alert('删除成功!');
            })
            .catch(err=>{
                console.log(err);
                alert('删除失败...');
            })
        }
    }
    render(){
        let bookList = this.state.bookList;
        return(
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>名称</td>
                        <td>价格</td>
                        <td>持有者id</td>
                        <td>操作</td>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map(book=>{
                        return(
                            <tr>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.age}</td>
                                <td>{book.gender}</td>
                                <td>
                                    <a href='javascript:void(0)' onClick={()=>this.handleEdit(book)}>修改</a>
                                    <a href='javascript:void(0)' onClick={()=>this.handleDelete(book)}>删除</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> 
        )
    }
}

export default BookList;