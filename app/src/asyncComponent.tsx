import * as React from "react";

export default function asyncComponent(getComponent: () => Promise<any>) {
  return class AsyncComponent extends React.Component {
    public static Component: React.ComponentType<any> | null = null;
    public state = { Component: AsyncComponent.Component };

    public async componentDidMount() {
      if (!this.state.Component) {
        const Component = (await getComponent()).default;
        AsyncComponent.Component = Component;
        this.setState({ Component });
      }
    }

    public render() {
      const { Component } = this.state;
      return Component && <Component {...this.props} />;
    }
  };
}
