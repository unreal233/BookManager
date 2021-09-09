import React from 'react';
import BookEditor from '../../component/bookEditor'

class BookEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            book: null
        }
    }

    render () {
        return (
            <BookEditor edit='true' book={this.state.book} />
        )
    }
}

export default BookEdit;