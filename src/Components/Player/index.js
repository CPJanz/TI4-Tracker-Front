import React from "react";
import styled from "styled-components";

export default class Player extends React.Component {
  render() {
    const { name, faction, points } = this.props.data;
    const SAMPLE_POINTS = [{ score: 1 }, { score: 2 }, { score: 4 }];

    return (
      <tr>
        <td>{name}</td>
        <td>{faction}</td>
        <td>
          {points.length > 0
            ? points
                .map(value => value.score)
                .reduce(
                  (accumulator, currentValue) => accumulator + currentValue
                )
            : 0}
        </td>
      </tr>
    );
  }
}
