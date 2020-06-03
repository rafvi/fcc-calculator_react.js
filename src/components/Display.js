import React from 'react';

import './Display.css';

class Display extends React.Component {
    render() {
        return (
            <div className='screen'>
                <div className="formulaScreen" id="display">{this.props.formula}</div>
                <div className="outputScreen" id="display">{this.props.currentValue}</div>
                
            </div>
        )
    }
}

export default Display;