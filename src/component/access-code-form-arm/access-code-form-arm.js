import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const emptyState = {
  accessCode: '',
};

class AccessCodeFormArm extends React.Component {
    constructor() {
        super(props);
        this.state = emptyState;
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onComplete(this.state);
        this.setState(emptyState);
    };

    render() {
        return (
            <section>
                <h3>Enter Access Code</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='accesscode'
                        placeholder='accesscode'
                        type='number'
                        value={this.state.accessCode}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
                <p>Forgot your access code?</p>
                <Link to='/signup'>Sign up for Project Hive</Link>
            </section>
        )
    }
}

AccessCodeFormArm.propTypes = {
    onComplete: PropTypes.func,
};

export default AccessCodeFormArm;
