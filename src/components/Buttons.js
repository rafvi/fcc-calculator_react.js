import React from 'react';
import './Buttons.css';



class Buttons extends React.Component {

    render() {
        return (
            <div className='ui grid'>
                <button
                    className='eight wide column'
                    id='clear'
                    value='AC'
                    onClick={this.props.clear}
                >
                    AC
                    </button>
                <button
                    className='four wide column sign'
                    id='sqrt'
                    value='√'
                    //onClick={this.props.operators}
                >
                    
                    </button>
                <button
                    className='four wide column sign'
                    id='divide'
                    value='/'
                    onClick={this.props.operators}
                >
                    ÷
                    </button>
                <button
                    className='four wide column'
                    id='seven'
                    value='7'
                    onClick={this.props.numbers}
                >
                    7
                    </button>
                <button
                    className='four wide column'
                    id='eight'
                    value='8'
                    onClick={this.props.numbers}
                >
                    8
                    </button>
                <button
                    className='four wide column'
                    id='nine'
                    value='9'
                    onClick={this.props.numbers}
                >
                    9
                    </button>
                <button
                    className='four wide column sign'
                    id='multiply'
                    value='*'
                    onClick={this.props.operators}
                >
                    ×
                    </button>
                <button
                    className='four wide column'
                    id='four'
                    value='4'
                    onClick={this.props.numbers}
                >
                    4
                    </button>
                <button
                    className='four wide column'
                    id='five'
                    value='5'
                    onClick={this.props.numbers}
                >
                    5
                    </button>
                <button
                    className='four wide column'
                    id='six'
                    value='6'
                    onClick={this.props.numbers}
                >
                    6
                    </button>
                <button
                    className='four wide column sign'
                    id='subtract'
                    value='-'
                    onClick={this.props.operators}
                >
                    -
                    </button>
                <button
                    className='four wide column'
                    id='one'
                    value='1'
                    onClick={this.props.numbers}
                >
                    1
                    </button>
                <button
                    className='four wide column'
                    id='two'
                    value='2'
                    onClick={this.props.numbers}
                >
                    2
                    </button>
                <button
                    className='four wide column'
                    id='three'
                    value='3'
                    onClick={this.props.numbers}
                >
                    3
                    </button>
                <button
                    className='four wide column sign'
                    id='add'
                    value='+'
                    onClick={this.props.operators}
                >
                    +
                    </button>
                <button
                    className='four wide column sign'
                    id='add-subtract'
                    value='-'
                    onClick={this.props.operators}
                >
                    ±
                    </button>
                <button
                    className='four wide column'
                    id='zero'
                    value='0'
                    onClick={this.props.numbers}
                >
                    0
                    </button>
                <button
                    className='four wide column'
                    id='decimal'
                    value='.'
                    onClick={this.props.decimal}
                >
                    .
                    </button>
                <button
                    className='four wide column'
                    id='equals'
                    value='='
                    onClick={this.props.equal}
                >
                    =
                    </button>
            </div>
        )
    }
}

export default Buttons;