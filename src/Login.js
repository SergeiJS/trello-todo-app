import React, { Component } from 'react';

import { withRouter } from 'react-router';

import './App.css';

//import { makeStyles } from '@material-ui/core/styles'
//import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

//debugger;
class Login extends Component {
  
  constructor(props) {
      super(props);
      this.hadleChange = this.hadleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        login: '',
        pass: '',
        rememberMe: false,
      };
  }

  hadleChange(event) {
        const input = event.target;
        /*const name = target.name;*/
        const value = /*target.value;*/input.type === 'checkbox' ? input.checked : input.value;

        this.setState({[input.name]: value});
    }
  
  handleClick(e) {
      const { login, pass, rememberMe } = this.state;
      localStorage.setItem('rememberMe', rememberMe);
      localStorage.setItem('login', rememberMe ? login : '');
      localStorage.setItem('pass', rememberMe ? pass : '');

      const { history } = this.props;
      e.preventDefault();
      
      if ((this.state.login === 'admin' && this.state.pass === '123') || 
          (this.state.login === 'user' && this.state.pass === '111')) {
        history.push('/trello')
      } else if (this.state.login === '' && this.state.pass === '') {
        alert('Please, enter your login and password')
      } else if (this.state.login === '') {
        alert('Please, enter your login')
      } else if (this.state.pass === '') {
        alert('Please, enter your password')
      } else {
        alert('Your login or password is incorrect')
        history.push('/login');
      }
        
      
  }

  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const login = rememberMe ? localStorage.getItem('login') : '';
    const pass = rememberMe ? localStorage.getItem('pass') : '';
    this.setState({ login, pass, rememberMe });
  }

    render() {
        
        return (
            <form className='login-form'>
                <div>
                    <input 
                        name='login' 
                        placeholder='Login' 
                        className='main-input' 
                        value={this.state.login} 
                        onChange={this.hadleChange}>
                    </input>
                </div>
                <div>
                    <input 
                        name='pass' 
                        placeholder='Password' 
                        className='main-input' 
                        value={this.state.pass} 
                        onChange={this.hadleChange} 
                        type='password'>
                    </input>
                </div>
                <div>
                    <input 
                        name='rememberMe' 
                        className='remember-input' 
                        checked={this.state.rememberMe} 
                        onChange={this.hadleChange} 
                        type='checkbox'>
                    </input> Remember me
                </div>
                <div  onClick={this.handleClick}>
                    <LoginButton />
                </div>
            </form>
        )
    }
}

const LoginWithRouter = withRouter(Login);
export default withRouter(LoginWithRouter);



function LoginButton() {
  
  return (
  <div className='login-button'>
      <Button variant='contained' className='formbutton' type='button' >Sign in</Button>
  </div>
  )
}

/*const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function LoginField(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root} noValidate autoComplete='off'>
                <TextField id='standard-basic' label='Login' />
        </div>
    );
}

function PassField(props) {
  const classes = useStyles();
  
  return (
      <div className={classes.root} noValidate autoComplete='off'>
              <TextField id='standard-basic' label='Password' type='password' />
      </div>
  );
}*/