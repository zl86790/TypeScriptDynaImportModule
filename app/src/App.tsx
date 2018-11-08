import * as React from "react";
import "./App.css";
import asyncComponent from "./asyncComponent";

class App extends React.Component {
  private Hello: any = asyncComponent(() => import("./Helloworld"));
  public render() {
    console.log(this.Hello);
    return (
      <div>
        <this.Hello />
      </div>
    );
  }
}

export default App;
