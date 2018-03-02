import React, { Component } from 'react'

import Square from './Square'

class Board extends Component {
  componentDidMount () {
    let { board } = this.props
    if (this.props.numberOfPlayers === 1 && !this.props.humanGoesFirst) {
      this.props.aiRandomSquare(board)
    }
  }

  createSquare = (index) => {
    let value
    if (this.props.board[index] !== "X" && this.props.board[index] !== "O") {
      value = ""
    } else {
      value = this.props.board[index]
    }

    return (
      <Square
        {...this.props}
        value={value}
        index={index}
        updateSquare={this.props.updateSquare}
      />
    )
  }

  restartHandler = (e) => {
    e.preventDefault()
    this.props.restartGame()
  }

  render() {
    return (
      <div className="Board">
        <h1>Tic Tac Toe</h1>
        <div className="row">
          {this.createSquare(0)}
          {this.createSquare(1)}
          {this.createSquare(2)}
        </div>
        <div className="row">
          {this.createSquare(3)}
          {this.createSquare(4)}
          {this.createSquare(5)}
        </div>
        <div className="row">
          {this.createSquare(6)}
          {this.createSquare(7)}
          {this.createSquare(8)}
        </div>
        <span className="menu" onClick={(e) => this.props.returnToMenu(e)}>Menu</span>
        <span className="restart" onClick={(e) => this.restartHandler(e)}>Restart</span>
      </div>
    )
  }
}

export default Board