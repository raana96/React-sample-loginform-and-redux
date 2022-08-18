import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "../../includes";

class Dashboard extends Component {
  render() {
    return (
      <Typography variant="h2" component="h2">
        Home Elements
      </Typography>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect( mapStateToProps,  mapDispatchToProps )(Dashboard);
