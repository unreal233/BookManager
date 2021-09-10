import React from 'react';
import BookEditor from '../../component/bookEditor'
import { get } from '../../utils/request'

class BookEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            book: null
        }
    }

    componentWillMount(){
        get('http://localhost:3000/book/'+this.props.id, this)
    }

    render () {
        return (
            <BookEditor edit='true' book={this.state.book} />
        )
    }
}

export default BookEdit;