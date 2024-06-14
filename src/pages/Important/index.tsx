import { PureComponent, ReactNode } from "react";
import { h } from "../..";
import { connectToRedux } from "../connectToRedux";
import Application from "../../Application";
import { Button, Select } from "antd";

class Important extends PureComponent<Application.ReduxProps> {
  render(): ReactNode {
    const { value, increment, decrement } = this.props
    return (
      <div onClick={() => increment()}>
        <Button>提示</Button>
        <Select defaultValue="" style={{ width: 120 }}>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="34">2</Select.Option>
            <Select.Option value="2" disabled>3</Select.Option>
            <Select.Option value="3">4</Select.Option>
        </Select>
        
      </div>
    );
  }
}

export default connectToRedux(Important)