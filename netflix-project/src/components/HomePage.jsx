import { Component } from "react";
import HomeNavbar from "./HomeNavbar";
import HomeMain from "./HomeMain";
import HomeFooter from "./HomeFooter";

class HomePage extends Component {
  render() {
    return (
      <>
        <HomeNavbar></HomeNavbar>
        <HomeMain></HomeMain>
        <HomeFooter></HomeFooter>
      </>
    );
  }
}

export default HomePage;
