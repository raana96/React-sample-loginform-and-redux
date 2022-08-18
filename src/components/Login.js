import React from "react";
import { Button, Paper, Avatar, LockIcon, Typography,FormControl, User } from "../includes";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// import history from "../includes/history"
import { connect } from "react-redux";
import { userNameChange,userPasswordChange, userLoginSubmit } from "../includes/actions";
import Snackbar from "./Snackbar";
import {Navigate} from 'react-router-dom';

class LoginComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {login : null}
  }
 
  isLogin = ()=>{
    if (User.isLogin()) {
      // history.push("/dashboard");
      this.setState({login:true})
    }
  }
  componentDidUpdate() {
    this.isLogin();
  }
  handleChange = name => event => {
    if (name === "username") {
      this.props.onUserNameChange(event.target.value);
    } else if (name === "password") {
      this.props.onUserPasswordChange(event.target.value);
    }
  };
  onSubmit = (event)=>{
    event.preventDefault();
    this.props.onLoginSubmit(
      this.props.login.username,
      this.props.login.password
    );
  }

  render() {

    return (
      <React.Fragment>
        {this.state.login && (
          <Navigate to="/dashboard" replace={true} />
        )}
        <Snackbar {...this.props.alert} />
        <main className={"layout"}>
          <Paper className={"paper"}>
            <Avatar className={"avatar"}>
              <LockIcon style={{fontSize:50}}/>
            </Avatar>
            <Typography variant="headline">Sign In</Typography>
            <ValidatorForm
              className={"form"}
              onSubmit={this.onSubmit.bind(this)}
              onError={errors => console.log(errors)}
            >
              <FormControl margin="normal" required fullWidth>
                <TextValidator
                  label="User name"
                  validators={["required"]}
                  name="username"
                  id="username"
                  value={this.props.login.username}
                  errorMessages={["This field is required"]}
                  onChange={this.handleChange("username")}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextValidator
                  label="password"
                  name="password"
                  type="password"
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                  id="password"
                  value={this.props.login.password}
                  autoComplete="current-password"
                  onChange={this.handleChange("password")}
                />
              </FormControl>

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit">
                Login
              </Button>
            </ValidatorForm>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  onUserNameChange: userNameChange,
  onUserPasswordChange: userPasswordChange,
  onLoginSubmit: userLoginSubmit
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);
