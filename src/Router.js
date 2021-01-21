import React from 'react'
import { Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Dashboard from './components/Dashboard'

const Router = () => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Route exact path="/" component={Dashboard} />
      </div>
    </AppLayout>
  );
}

export default Router
