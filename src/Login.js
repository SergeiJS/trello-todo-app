import React from 'react';

import LoginField from './components/LoginField.js';
import PasswordField from './components/PasswordField.js';
import LoginButton from './components/LoginButton.js';
import { withAuth } from './Auth';
import { Redirect } from 'react-router-dom';

export default withAuth(({ isAthorized, authorize }) =>
    isAthorized ? (
        <Redirect to='/' />
    ) : (
        <div>
            <LoginField />
            <PasswordField />
            <LoginButton onClick={authorize}>Sign in</LoginButton>
        </div>
    ))