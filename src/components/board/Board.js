import React, { Component } from 'react';
import Square from '../square/Square';

export default class Board extends Component {
    render() {
        return (
            
    <div className="board">
      <h2>Tic-Tac-Toe</h2>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
        )
    }
}
