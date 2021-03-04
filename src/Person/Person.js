import React from 'react';
import './Person.css'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    
    return(
        <div className='Person'>
            <p>My name is { props.name } and my age is { props.age }</p>
            <p>{ props.children }</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;
