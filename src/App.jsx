import { useState } from 'react'
import './App.css'



 const phrases = [
  "No",
  "Really Sure?",
  "My Love Please!",
  "Don't di this to me",
  "You're breaking my heart",
 ]

function App() {

  const [noCount, setNotCount] = useState(0);  
  const [yesPressed, setYesPressed] = useState(false)
  const yesButtonSize = noCount * 20 +16

  function handleNoClick (){
    setNotCount(noCount+1)
  }

  function getNoCountButtonText(){
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <>
    <div className="valintine-container">
      {yesPressed ?
      (
        <>
        <img className='yesImage' src="https://media.tenor.com/OHKT0LAthQEAAAAi/newt00th-newtooth.gif" alt="bear kissing" />
        <div className="text">Yay!</div>
        </>
      ):(
      <>
      <img className='defaultImage' src="https://media.tenor.com/OAJH7-07ssMAAAAi/hom-hold-me-tight.gif" alt="bear kissing" />
      <div className="text1">Will you be my Valintine!</div>
      <div>
        <button 
        className='yesButton'
        style={{fontSize:yesButtonSize}}
        onClick={() => setYesPressed(true)}
        >Yes</button>
        <button onClick={handleNoClick} className='noButton'>
          {getNoCountButtonText()}
        </button>
      </div>
      </>
      )
    }
    </div>
    </>
  )
}
export default App
