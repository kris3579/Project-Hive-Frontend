import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as alarmActions from '../../action/alarm-actions';
import AccessCodeFormArm from '../access-code-form-arm/access-code-form-arm';
import AccessCodeFormDisarm from '../access-code-form-disarm/access-code-form-disarm';
import * as routes from "../../routes";

class AlarmControls extends React.Component {
    handleArmSystem = (accessCode) => {
        return this.props.pDoArmSystem(accessCode)
            .then(() => {
                this.props.history.push(routes.ALARM_CONTROLS);
            })
            .catch(console.error);
    };

    handleDisrmSystem = (accessCode) => {
        return this.props.pDoDisarmSystem(accessCode)
            .then(() => {
                this.props.history.push(routes.ALARM_CONTROLS);
            })
            .catch(console.error);
    };

    render() {
        return (
            <section>
                <Link to='/'><h2>Project Hive</h2></Link>
                <div>
                    <AccessCodeFormArm
                        type="accescodevalidation"
                        onComplete={this.handleAccessCodeValidation}
                    />
                </div>
                <div>
                    <AccessCodeFormDisarm
                        type="accescodevalidation"
                        onComplete={this.handleAccessCodeValidation}
                    />
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  pDoArmSystem: accesscode => dispatch(alarmActions.armSystemRequest(accesscode)),
  pDoDisrmSystem: accesscode => dispatch(alarmActions.disarmSystemRequest(accesscode)),
});

AlarmControls.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(AlarmControls);
