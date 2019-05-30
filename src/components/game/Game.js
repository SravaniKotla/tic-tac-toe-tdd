import React, { Component } from 'react';
import Board from '../board/Board';

class Game extends Component {
    render() {
        return (
            <div className="game">
                <Board />
            </div>
        )
    }
}

export default Game;