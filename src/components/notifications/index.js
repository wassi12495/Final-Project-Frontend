import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NotificationsContainer extends Component {
  componentDidMount() {
    this.props.getNotifications();
  }

  handleAcceptRequest = () => {
    debugger;
  };
  renderLoading() {
    return <Loader />;
  }
  renderNotifications() {
    const { requests } = this.props;
    const reqs = requests.map((r, i) => {
      return (
        <div key={i}>
          <button onClick={this.handleAcceptRequest}>Accept</button>
        </div>
      );
    });
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
