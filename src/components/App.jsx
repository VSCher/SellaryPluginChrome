import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';

import FormGroup  from 'react-bootstrap/lib/FormGroup';
import ControlLabel  from 'react-bootstrap/lib/ControlLabel';
import FormControl  from 'react-bootstrap/lib/FormControl';
import HelpBlock  from 'react-bootstrap/lib/HelpBlock';
import Button  from 'react-bootstrap/lib/Button';

import { errorCounter } from '../redux/actions/rateAction';
import { requestRate } from '../redux/actions/rateAction';

const propTypes = {
    url: PropTypes.string.isRequired,
};

@connect(state => ({
    value: state.rate.value,
}))

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { value: 2000, rate: 60, usdSellary: 0 };

    }

    componentDidMount() {
        this.requestRate();
        this.calculateRate(this.state.value);
    }

    render() {
        return (
            <div>
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <ControlLabel>RubToUsd sellary calculator</ControlLabel>
                        <FormControl
                            type="number"
                            value={this.state.value}
                            placeholder="Enter your sellary"
                            onChange={this.handleInputChange}
                        />

                        <HelpBlock>{this.state.usdSellary}</HelpBlock>
                    </FormGroup>
                </form>
                <Button onClick={this.handleClick}>Refresh</Button>
            </div>
        );
    }

    @autobind
    getValidationState() {
        const length = this.state.value.length;
        if (length > 3) return 'success';
        else if (length > 10) return 'warning';
        else if (length > 0) return 'error';
    }

    @autobind
    calculateRate(value) {
        let rate = this.state.rate;
        let usdSellary = value / rate;
        console.log(rate,'calculateRate');
        this.setState({ value, usdSellary });
    }

    @autobind
    handleInputChange (e) {
        this.calculateRate(e.target.value);
    }

    @autobind
    requestRate() {
        axios.get(this.props.url)
            .then((response) => {
                this.setState({ rate: response.data.rates.RUB });
                console.log(this.state.rate,'requestRate');
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    @autobind
    handleClick() {
        this.requestRate();
        this.props.dispatch(requestRate());
    }
}

App.propTypes = propTypes;