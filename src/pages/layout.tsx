import { Component, PureComponent, ReactNode } from "react";
import { h } from "..";
import { Outlet } from "react-router";

export default class Layout extends Component {

  constructor(props: any) {
    super(props)
    this.render()
  }

  render(): ReactNode {
      return (
        <div>
          <div className="menu">
          </div>
          <div className="content">
            <Outlet></Outlet>
          </div>
        </div>
      );
  }
}