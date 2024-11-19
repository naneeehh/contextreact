import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MyRouter from './routes/MyRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([])
  const [books, setBooks] = useState([
    {bookTitle: "myBook", bookPages: "200", bookYear: "2008", desctiption: ""}
  ])

  useEffect(() => {
    // console.log("Axios worked")
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTasks(response.data)
      })
  }, [])

  useEffect(() => {
    // console.log("Tasks changed", tasks[0])
  }, [tasks])


  return (
    <BrowserRouter>
      <MyRouter books={books} setBooks={setBooks} />
    </BrowserRouter>
  );
}

export default App;
