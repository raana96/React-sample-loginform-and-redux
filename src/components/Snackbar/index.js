import React, { Component } from "react";
import { alertClose } from "../../actions/alert-actions";
import { connect } from "react-redux";
import MuiAlert from '@mui/material/Alert';
import {Snackbar} from "../../includes";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


class MySnackbar extends Component {
  state={
    vertical: 'top',
    horizontal: 'right',
  }

  handleClose = () => {
    this.props.alertClose(!this.props.isActive);
  };
  render() {
    const { isAlert, variant, message, anchorOrigin } = this.props;
    const {vertical , horizontal} =this.state;
    return (
      <Snackbar anchorOrigin={{ vertical: vertical, horizontal: horizontal }	}
                open={isAlert} autoHideDuration={6000} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity={variant} sx={{ width: '100%' }}>
          <span className="text" style={{fontSize:14}}>
            {message}
          </span>
        </Alert>
      </Snackbar>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = {
  alertClose: alertClose
};

export default connect(mapStateToProps,mapDispatchToProps)(MySnackbar);
