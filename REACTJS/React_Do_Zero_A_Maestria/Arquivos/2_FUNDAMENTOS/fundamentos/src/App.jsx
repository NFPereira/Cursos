import React from 'react'

// styles / CSS
import './App.css';

// components
import FirstComponets from './components/FirstComponets';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

const App = () => {
  return (
    <div className='App'>
      <h1>Fundamentos React</h1>
      <FirstComponets />
      <TemplateExpression />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  )
}

export default App