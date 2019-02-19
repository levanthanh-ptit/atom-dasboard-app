import React, { Component } from 'react';
import Layout from './HomeLayout';
import Navigator from '../../components/Navigator/Navigator';
import AppHeader from '../../components/AppHeader/AppHeader';
import Dashboard from '../../components/Dashboard/Dashboard';
class Home extends Component {
  render() {
    const propsNavigator = <Navigator />
    const propsAppHeader = <AppHeader />
    const propsDashboard = <Dashboard />
    return (
      <div id='App'>
        <Layout Navigator={propsNavigator} AppHeader={propsAppHeader} Dashboard={propsDashboard} />
      </div>
    );
  }
}

export default Home;
