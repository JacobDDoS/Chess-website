import React, { useContext } from 'react'
import { chessBoardContext } from '../App'

import "./board.css"

const Board = () => {
  const chessBoardState = useContext(chessBoardContext)

  console.log(chessBoardState);
  return (
    <div>
        <h2>Chess Board:</h2>
        <div id="board">
          {
            chessBoardState.map((row, rowIdx)=> {
              return <div className='row'>
                {
                  row.map((piece, colIdx) => {
                    return <span className={`piece ${(rowIdx+colIdx)%2===0 ? 'white' : 'black'}`}>
                      {
                        piece && piece.id.endsWith("Pawn") ? <div className='chess-piece'>{piece.color == "white" ? <>♙</> : <>♟︎</>}</div> : 
                        piece && piece.id.endsWith("Rook") ? <div className='chess-piece'>{piece.color == "white" ? <>♖</> : <>♜</>}</div> : 
                        piece && piece.id.endsWith("Queen") ? <div className='chess-piece'>{piece.color == "white" ? <>♕</> : <>♛</>}</div> : 
                        piece && piece.id.endsWith("Knight") ? <div className='chess-piece'>{piece.color == "white" ? <>♘</> : <>♞</>}</div> : 
                        piece && piece.id.endsWith("Bishop") ? <div className='chess-piece'>{piece.color == "white" ? <>♗</> : <>♝</>}</div> : 
                        piece && piece.id.endsWith("King") ? <div className='chess-piece'>{piece.color == "white" ? <>♔</> : <>♚</>}</div> : null
                      }
                    </span>
                  })
                }
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Board