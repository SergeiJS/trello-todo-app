import React from 'react';
import { withAuth } from './Auth/index.js';

import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = withAuth(({component: RouteComponent, isAuthorized, ...rest}) => (
    <Route 
        {...rest} 
        render={routeProps => 
            isAuthorized ? (
                <RouteComponent {...routeProps} />
            ) : (
                <Redirect to='/' />
        )
    }
    />
));