import React from "react";
import { Layout } from "antd";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainPage from "./Containers/MainPage";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test from "./Containers/Test";
import Components from "./Containers/Components/Components";

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header />
          <Content>
            <Switch>
              <Route path="/" exact={true}>
                <MainPage />
              </Route>
              <Route path="/test">
                <Test />
              </Route>
              <Route path="/components">
                <Components />
              </Route>
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
