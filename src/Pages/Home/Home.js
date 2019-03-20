import React, { Component } from 'react';
import Layout from './HomeLayout';
import Navigator from '../../components/Navigator/NavigatorRDC';
import AppHeader from '../../components/AppHeader/AppHeaderRDC';
import Dashboard from '../../components/Dashboard/DashboardRDC';
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
