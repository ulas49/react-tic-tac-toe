import { useState ,useEffect} from 'react'
import Cell from './Components/Cell'



function App() {

const [cells,setCells]=useState(["","","","","","","","",""])
const [go,setGo]=useState("circle")
const [winningMessage,setWinningMessage]=useState(null)
const message = `it is now ${go}'s go`
console.log(cells);

const checkScore = ()=>{

const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

winningCombos.forEach(array=>{
 let circleWins= array.every(cell=>cells[cell]==="circle")
 if(circleWins){
  setWinningMessage("Circle Wins!")
  return
 }
})

winningCombos.forEach(array=>{
  let crossWins= array.every(cell=>cells[cell]==="cross")
  if(crossWins){
   setWinningMessage("Cross Wins!")
   return 
  }
 })

}

useEffect(()=>{
checkScore()
},[cells])


const retry = ()=>{
  setCells(["","","","","","","","",""])
  setWinningMessage(null)
  setGo("circle")
}
  return (
    <div className='App'>
      <div className='Board'>
      {cells.map((cell,index)=>{
        return <Cell key={index} id={index} cell={cell} setCells={setCells}  go={go} setGo={setGo} cells={cells} winningMessage={winningMessage} />
      })}
      </div>
      <p className='message'>{winningMessage || message}</p>
      <button className='playAgain' onClick={retry}>Play Again</button>
   

    </div>
    
  
  )
}

export default App
