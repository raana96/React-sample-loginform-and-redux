import React from "react";
import { User } from "../includes";
import WrapperTemplate from "./PageTemplate/WrapperTemplate";

function Wrapper(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){
      !User.isLogin() && this.props.history.push("/");
      console.log(this.props)
    }

    render() {
      return (
        <WrapperTemplate {...this.props} user={User.getDataKey("userInfo")}>
          <WrappedComponent {...this.props} />
        </WrapperTemplate>
      )
    }
  };
}

export default Wrapper;
