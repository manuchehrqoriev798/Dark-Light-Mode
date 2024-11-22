import React from 'react'
import {ThemeContext} from '../Theme'


function Navbar() {

const ThemeData = React.useContext(ThemeContext);

const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',     
        paddingBottom: 10,
        border: '1px solid #ccc'
    }
const buttonStyle = {
    padding: 10,
    margin: 10,
    background:'#2e2e2e',
    border: 0,
    borderRadius: 7,
    fontSize: 16,
    color: '#fff',
    cursor: 'pointer'
}

return (
        <div style={navStyle}>
            <h3>REACT-CONTEXT-API</h3>
            <button style={buttonStyle} onClick={()=>ThemeData.changeTheme()}>Change Theme</button>
        </div>
    )
}

export default Navbar