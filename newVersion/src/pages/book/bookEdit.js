import React from 'react';
import BookEditor from '../../component/bookEditor'
import {get} from '../../utils/request'

class BookEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            book: null
        }
    }

    componentWillMount(){
        const id = this.props.match.url.replace('/book/edit/', '')
        get('http://localhost:3000/book/'+id, this)
        .then(res=>{
            this.setState({
                book: res
            })
        })
    }

    render () {
        return (
            <BookEditor edit='true' book={this.state.book} />
        )
    }
}

export default BookEdit;