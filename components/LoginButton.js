import React from 'react'

import Button from '@material-ui/core/Button'


export default function LoginButton() {
    function onClick(e) {
        e.preventDefault();
        
    }
    return <Button variant='contained' className='formbutton' type='button' onClick={onClick}>Sign in</Button>;
}