import React from 'react';
import Balance from './components/Balance';
import Info from './components/Info';
import './styles/styles.css'

const App = () => {
  return (
    <main className="container">
      <div className="wrapper">
        <Balance />
        <Info />
      </div>
      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Thiago Garin</a>.
      </div>
    </main>
  )
}

export default App;