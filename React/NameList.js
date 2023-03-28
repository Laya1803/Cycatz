import React from 'react';
import Person from './Person';

function NameList() {
    const persons = [
        {
            id:1,
            name:'Madhu',
            age:21,
            skill:'React JS'
        },
        {
            id:2,
            name:'Nivi',
            age:21,
            skill:'Angular JS'
        },
        {
            id:3,
            name:'Aysha',
            age:21,
            skill:'Python'
        }

    ]
    const personList = persons.map(person =>(
        <Person key={person.id} person={person}/>
    ))
    return (
        <div className='primary'>
            {personList}
        </div>
    );
}

export default NameList;