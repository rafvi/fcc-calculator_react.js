/* eslint-disable no-eval */
import React from 'react';

// components
import './Calculator.css';
import Buttons from './Buttons';
import Display from './Display';

let audio = new Audio('/sounds/click.mp3');

class Calculator extends React.Component {
    state = {
        currentValue: '0',
        formula: '0',
        result: undefined,
        prevValue: undefined // after clicked '=' and after clicked any number should be that clicked number
    }

    handleNumbers = (e) => {
        const [value] = e.target.value;
        const { currentValue, formula, result, prevValue } = this.state;

        if (prevValue === 'result') {
            this.setState({
                currentValue: value,
                formula: value,
                result: undefined,
                prevValue: undefined
            })
        } else if (currentValue === '0' || currentValue === 0) {
            if (value === '0') {
                this.setState({
                    currentValue: 0,
                    formula: 0,
                })
                console.log('not allow a number to begin with multiple zeros')
            } else {
                this.setState({
                    currentValue: value,
                    formula: value,
                })
            }
        } else {
            console.log('handleNumbers (not result, not 0): \nformula: ' + formula + '\ncurrentvalue: ' + currentValue + '\nresult: ' + result + '\nprevValue: ' + prevValue)
            this.setState({
                currentValue: currentValue + value,
                formula: formula + value
            })
        }

        audio.play();
    }

    handleOperators = (e) => {
        let [value] = e.target.value;
        const { currentValue, formula, result } = this.state;

        if (currentValue !== value) { // same character clicked

            if (currentValue === '+' || currentValue === '-' | currentValue === '*' || currentValue === '/') { // when any sign was cliced and click other
                this.setState({
                    currentValue: currentValue.replace(currentValue, value),
                    formula: formula.replace(formula.slice(-1), value)
                })
            } else {
                if (result !== undefined) { // run if 'formula' contains '='
                    this.setState({
                        currentValue: value,
                        formula: result + value,
                        result: undefined, // restore 'result' to undefined - to start formula without '='
                        prevValue: undefined
                    })
                } else {
                    this.setState({
                        formula: formula + value,
                        currentValue: value
                    })
                }
            }

            audio.play();
        }
    }

    handleClear = () => {
        this.setState({
            currentValue: 0,
            formula: 0
        })
        console.log("handleClear: " + this.state.currentValue + '  formula -> ' + this.state.formula)
        audio.play();
    }

    handleEqual = () => {
        if (this.state.currentValue !== 0 && this.state.currentValue !== '0') {
            if (!this.state.formula.includes('=')) {
                this.setState({
                    formula: this.state.formula + '=' + eval(this.state.formula),
                    currentValue: eval(this.state.formula),
                    result: eval(this.state.formula),
                    prevValue: 'result'
                })
                audio.play();
            }
        }
    }

    handleDecimal = (e) => {
        const [value] = e.target.value;
        const { currentValue, formula, result } = this.state;

        if (!currentValue.includes(value)) {
            this.setState({
                formula: formula + value,
                currentValue: currentValue + value
            })
            console.log('handleDecimal: currentValue=' + currentValue)
        }
    }

    render() {
        return (
            <div className='calculator'>
                <Display
                    currentValue={this.state.currentValue}
                    formula={this.state.formula}
                />
                <Buttons
                    numbers={this.handleNumbers}
                    operators={this.handleOperators}
                    clear={this.handleClear}
                    equal={this.handleEqual}
                    decimal={this.handleDecimal}
                />
            </div>
        )
    }
}

export default Calculator;