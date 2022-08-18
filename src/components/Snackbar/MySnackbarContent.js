import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"; 
import {ErrorIcon,CheckCircleIcon,InfoIcon,CloseIcon,IconButton,SnackbarContent,WarningIcon} from "../../includes";


const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};
function MySnackbarContent(props){
  const {className,message,onClose,variant,...other} = props;
  const Icon = variantIcon[variant];

    return (
      <SnackbarContent
        className={classNames(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={"message"}>
            <Icon className={"icon iconVariant"} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={"closeButton"}
            onClick={onClose}
          >
            <CloseIcon className={"icon"} />
          </IconButton>
        ]}
        {...other}
      />
    );
  
}

MySnackbarContent.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

export default  MySnackbarContent;
