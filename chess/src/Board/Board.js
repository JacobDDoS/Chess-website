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
                    return <span className={`piece ${(rowIdx+colIdx)%2===0 ? 'white' : 'black'}`}></span>
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