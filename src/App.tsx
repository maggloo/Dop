import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
type PropsType = {
    completed: boolean,
    id: number,
    title: string,
    userId: number
}

function App() {

    const [todos, setTodos] = useState<PropsType[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    console.log(todos)
    const onClickHandler = () => {
        setTodos([]);
    }



  return (
    <div className="App">
        <button onClick={onClickHandler}>Clean Posts</button>
        <ul>
            {todos.map(el => {
                return(
                    <li>
                        <span>{el.id} - </span>
                        <span>{el.title}</span>
                        <span>{el.completed}</span>
                    </li>
                )
            })
            }

        </ul>


    </div>
  );
}

export default App;
