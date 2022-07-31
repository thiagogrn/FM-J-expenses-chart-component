import React from 'react';
import Balance from './components/Balance';
import Info from './components/Info';
import './styles/styles.css'

const App = () => {
  return (
    <div className="container">
      <main className="wrapper">
        <Balance />
        <Info />
      </main>
      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Thiago Garin</a>.
      </div>
    </div>
  )
}

export default App;