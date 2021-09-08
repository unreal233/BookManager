import React from 'react'
import {Tag, Input} from 'antd'

class TagEditer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: this.props.initTag || [],
            inputVisible: false,
            inputValue: ''
        }
    }

    handleDelete(index){
        this.setState({
            value: this.state.value.splice(index, 1)
        })
    }

    showInput(){
        this.setState({
            inputVisible: true
        })
    }

    handleChangeInput(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmitInput(tag){
        this.setState({
            value: [...this.state.value, tag],
            inputValue: '',
            inputVisible : false
        })
    }

    render(){
        const {value, inputVisible, inputValue} = this.state;
        return(
            <div>
                {value.map((tag, index)=>{
                    return(
                        <Tag closable onClose={()=>this.handleDelete(index)}>
                            {tag}1
                        </Tag>
                    )
                })}
                {()=>{if(value.length < 3){
                    if(inputVisible){
                        return(
                            <Input
                            type='text'
                            className='newTagShow'
                            value={inputValue}
                            onChange={()=>this.handleChangeInput}
                            onBlur={()=>this.handleSubmitInput(value)}
                            onPressEnter={()=>this.handleSubmitInput(value)}
                            />
                        )
                    }
                    else{
                        return(
                            <Tag
                            onClick={this.showInput}
                            className='newTagHidden'
                            >Tag+</Tag>
                        )
                    }
                }}}
            </div>
        )
    }
}

export default TagEditer