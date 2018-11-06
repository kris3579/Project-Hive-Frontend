import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../routes';
import AccessCodeFormArm from "../access-code-form-arm/access-code-validation-form";

class Dashboard extends React.Component {
    render() {
        const accessCodeValidationJSX = ;

        console.log('Dashboard');
        return (
            <section>
                <Link to='/'><h2>Project Hive</h2></Link>
                <Link to='/alarmcontrols'>Alarm Controls</Link>
            </section>
        );
    }
}

export default Dashboard;
