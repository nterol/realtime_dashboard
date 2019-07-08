import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import Navigation from "./pages/Navigation";
import { GlobalStyle } from "./components/layout";

function RawApp() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
    </>
  );
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <RawApp />
    </BrowserRouter>
  </Provider>
);

export default App;
