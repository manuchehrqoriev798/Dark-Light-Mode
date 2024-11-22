import React from 'react'
import './App.css';
import News from './components/News'
import Navbar from './components/Navbar'
import {ThemeContext} from './Theme'


function App() {

  const [theme, setTheme] = React.useState(true)

  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, changeTheme: changeTheme}}>
          <Navbar />
          <News />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
