import React from 'react';
import BookEditor from '../component/bookEditor';
import {get} from '../utils/request'

class BookAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            book : null
        }
    }
    componentWillMount(){
        const id = this.props.match.params.id;
        get('http://localhost:3000/book/' + id, this)
        .then(res=>{
            this.setState({
                book : res
            })
        })
        .catch((err)=>{
            console.log(err);
            alert('发生错误...');
        })
    }
    render(){
        const book = this.state.book;
        return book ? <BookEditor editTag={book} /> : 'loading...'
    }
}

export default BookAdd;