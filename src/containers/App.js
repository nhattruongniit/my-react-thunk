import { connect } from "react-redux";

// components
import App from "../components/App";

const mapStateToProps = state => {
  const { app } = state;

  return {
    app
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
