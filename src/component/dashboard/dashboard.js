import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    console.log('Dashboard');
    return (
        <section>
            <p> You can only see this IF you are logged in</p>
            <Link to='/alarmcontrols'>Alarm Controls</Link>
        </section>
    );
  }
}

export default Dashboard;
