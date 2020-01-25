import React from "react";
import styled from "styled-components";

export default class Player extends React.Component {
  render() {
    const { data } = this.props;
    return <li>{data}</li>;
  }
}
