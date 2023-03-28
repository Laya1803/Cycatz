import React from 'react';
// import './myStyles.css'
function Style(props) {
    let className=props.primary ? 'primary' : '';
    return (
        <div>
           <h1 className={className}>Welcome!!</h1> 
        </div>
    );
}

export default Style;