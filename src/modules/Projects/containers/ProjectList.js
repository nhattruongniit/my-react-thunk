import { connect } from "react-redux";

// components
import ProjectList from "../components/ProjectList";

// actions
import { fetchShops } from "../reducers/projects";

const mapStateToProps = state => {
  const { projects } = state;

  return {
    projects
  };
};

const mapDispatchToProps = {
  fetchShops
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
