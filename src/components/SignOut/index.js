import React from "react";

import { withFirebase } from "../Firebase";
import { Button } from "react-bootstrap";
const SignOutButton = ({ firebase }) => (
  <Button variant="outline-primary" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
