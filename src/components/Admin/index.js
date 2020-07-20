import React, { Component } from "react";

// import { withFirebase } from "../Firebase";
import { AuthUserContext, withAuthorization } from "../Session";
import { Table, Container } from "react-bootstrap";

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      messages: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.messages().on("value", (snapshot) => {
      const messagesObject = snapshot.val();

      const messagesList = Object.keys(messagesObject).map((key) => ({
        ...messagesObject[key],
        uid: key,
      }));

      this.setState({
        messages: messagesList,
      });
    });

    this.props.firebase.users().on("value", (snapshot) => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
    this.props.firebase.messages().off();
  }

  render() {
    const { users, messages, loading } = this.state;
    return (
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser.email === "admin@gmail.com" ? (
            <Container>
              <h2 className="text-center">Admin</h2>
              {loading && <div>Loading ...</div>}
              <h3 className="text-center"> Messages</h3>
              <MessageList messages={messages} />
              <h3 className="text-center"> Registered Users</h3>
              <UserList users={users} />
            </Container>
          ) : (
            <h1>Not a Admin</h1>
          )
        }
      </AuthUserContext.Consumer>
    );
  }
}
const MessageList = ({ messages }) => (
  <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Message</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {messages.map((msg) => (
        <tr key={msg.uid} className="border">
          <td>{msg.name}</td>
          <td>{msg.email}</td>
          <td>{msg.phone}</td>
          <td>{msg.message}</td>
          <td>{msg.date}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
const UserList = ({ users }) => (
  <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>User Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.uid} className="border">
          <td>{user.username}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AdminPage);
