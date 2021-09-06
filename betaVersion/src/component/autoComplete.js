import React from 'react';
import PropTypes from 'prop-types'
import style from '../style/autoComplete.css'

class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayValue : '',
            activeOption : -1
        }
    }
    handleChange (value) {
        this.setState({
            displayValue : '',
            activeOption : -1
        });
        this.props.onChange(value);
    }
    handleKeyDown (e) { 
        const {activeOption} = this.state;
        const {option} = this.props;
        // eslint-disable-next-line default-case
        switch(e.keyCode){
            case 13:
                if(activeOption >= 0){
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleChange(parseInt(option[activeOption]));
                } 
                break;
            case 38:
            case 40: 
                e.preventDefault();
                let newIndex = activeOption;
                let newDisplay = '';
                const maxIndex = option.length-1;
                newIndex += e.keyCode === 38 ? -1 : 1;
                if(newIndex < 0) newIndex = 0;
                if(newIndex > maxIndex) newIndex = maxIndex;
                if(newIndex >=0 ) newDisplay = parseInt(this.props.option[newIndex])
                this.setState({
                    displayValue : newDisplay,
                    activeOption : newIndex
                });
                break;
        }
    }
    handleEnter (index) {
        this.setState({
            displayValue : parseInt(this.props.option[index]),
            activeOption : index
        });
    }
    handleLeave () {
        this.setState({
            displayValue : '',
            activeOption : -1
        });
    }
    render(){
        const {option, value} = this.props
        const {displayValue, activeOption} = this.state;
        console.log("option");
        return(
            <div class={style.warpper}>
                <input type='text' value={displayValue || value} 
                       onChange={e=>this.handleChange(e.target.value)}
                       onKeyDown={e=>this.handleKeyDown(e)}
                />
                <ul class={style.option} onMouseLeave={e=>this.handleLeave(e)}>
                    {
                        option.map((i, index)=>{
                            console.log(index);
                            return(
                                <li
                                    key={index}
                                    class={activeOption === index ? style.active : ''}
                                    onMouseEnter={()=>this.handleEnter(index)}
                                    onClick={()=>this.handleChange (parseInt(option[activeOption]))}
                                >{i}</li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

AutoComplete.propTypes = {
    value : PropTypes.string.isRequired,
    option : PropTypes.array.isRequired,

}

export default AutoComplete;