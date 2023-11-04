import './App.css'
import amongUs from '/Users/dennis/CodePath/CrewMemberDB/CodePathProject7/src/assets/amongUsNoBG.png'

// Removed unused import statement

function App() {

  return (
    <div className="App">

      <div className='header'>
        <h1>Welcome to the Crewmate Creator!</h1>
        <h2>Here you can create your own set of crewmates before sending them off into space!</h2>
      </div>
      <img src = {amongUs} alt = "amongUs"></img>

    </div>
  )
}

export default App
