import React, { Component } from "react";
import TopBarMenu from "./TopBarMenu";

export class DashboardWrapperTemplate extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
     
        <div className={"root"}>
          <TopBarMenu {...this.props} />
          <main className={"content"}>
            <div className={"appBarSpacer"} />
            {this.props.children}
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardWrapperTemplate;
