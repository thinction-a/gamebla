import React from 'react';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Main from "./Component/Main/Main";
import Service from "./Component/Service/Service";
import Event from "./Component/Event/Event";
import PreOrder from "./Component/PreOrder/PreOrder";
import GlobalStyles from "./Styles/GlobalStyles";

class App extends React.Component {
  render() {
    return (
      <>
      <GlobalStyles />
        <Header />
        <Main />
        <Service />
        <Event />
        <PreOrder />
        <Footer />
      </>
    )
  }
}

export default App;
