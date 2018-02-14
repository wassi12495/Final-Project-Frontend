import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import ConfirmPassword from "./ConfirmPassword";

class NotificationsContainer extends Component {
  componentDidMount() {
    this.props.getNotifications();
  }

  renderLoading() {
    return <Loader />;
  }
  renderNotifications() {
    const { requests } = this.props;
    const reqs =
      requests.length > 0
        ? requests.map((r, i) => {
            return <ConfirmPassword key={i} index={i} request={r} />;
          })
        : null;
    return (
      <div>
        <p>Notifications Rendered</p>
        {reqs}
      </div>
    );
  }
  render() {
    const { loading } = this.props;
    return loading ? this.renderLoading() : this.renderNotifications();
  }
}

const mapStateToProps = ({ notifications }) => ({
  loading: notifications.loading,
  requests: notifications.requests
});

export default connect(mapStateToProps, actions)(NotificationsContainer);
