import { Component } from "react";
import AccountNavbar from "./AccountNavbar";
import AccountMain from "./AccountMain";

class AccountPage extends Component {
  render() {
    return (
      <div className="vh-100 d-flex flex-column" style={{ backgroundColor: "#141414" }}>
        <AccountNavbar></AccountNavbar>
        <AccountMain></AccountMain>
      </div>
    );
  }
}
export default AccountPage;
