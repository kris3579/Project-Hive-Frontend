import React from 'react';

class Dashboard extends React.Component {
  render() {
    console.log('Dashboard');
    return (
        <p> You can only see this IF you are logged in</p>
    );
  }
}

export default Dashboard;
