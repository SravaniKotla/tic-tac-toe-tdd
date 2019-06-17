import React, { Component } from 'react'
import Board from '../board/Board';
import { calculateWinner } from '../../helpers/calculateWinner';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0, 
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice(); //stores current square array as a new array object
    //If there is a winner or if the box already has a value, do nothing and no state update
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //to insert x or o in the squares array and display value on board
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
//update stepNumber to go to the previous moves, xIsNext is false if the move number is odd
//once state is set the component will re render and the current move will be calculated based on the stepNumber
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }


  render() {
    const history = this.state.history;  //has history of all moves
    const current = history[this.state.stepNumber]; //returns the current square array
    const winner = calculateWinner(current.squares);  //Calculate winner each time when the current square array rendered
    //To provide unique key for each list item
    //here step is the key and move is the index
    const moves = history.map((step, move) => {
      const desc = move ?   //If move is 0 return New Game else return move #
        'move #' + move : <div className="newGame">New Game</div>;  
        //list to show the moves
        //jumpTo will be executed on click
      return (
        <li key={move}>
          <button className="moves-button" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;

    if (winner) {
      status = <div className="winner">Winner : {winner}</div>
    } else {
      if (this.state.stepNumber === 9) { //Only 9 moves allowed in this tic tac toe and if no winner then draw
        status = <div className="tie">It's a Draw</div>;
      } else {
        status = <div className="player">Player : {this.state.xIsNext ? 'X' : 'O'} </div>;
      }

    }

    return (
      <div className="game">
        <div className="game-board">

          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ul className="moves">{moves}</ul>
        </div>
      </div>
    )
  }
}
