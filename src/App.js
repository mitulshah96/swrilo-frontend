import React, { Component } from 'react';
import AppRoutes from './routes';
import { withRouter } from 'react-router-dom';

export class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div id={'content'}>
                    <AppRoutes />
                </div>
            </div>
        );
    }
}

export default withRouter(App);
