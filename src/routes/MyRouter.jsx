import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";
import Login from "../components/Login";
import Layout from "../components/Layout";
import AddBook from '../components/AddBook';

const MyRouter = ({books, setBooks}) => {
  // console.log(props.books);
  // console.log(books, setBooks);
  // const {books, setBooks} = props
  // console.log(books, setBooks);

  const routing = useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home books={books}/>
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/addBook",
          element: <AddBook  setBooks={setBooks}/>
        },
      ]
    }
  ])
  
  return (routing
    
      // <Routes>
      //   <Route path='' element={<Layout />}>
      //     <Route path='' element={<Home />} />
      //     <Route path='/login' element={<Login />} />
      //   </Route>
      //   <Route path='*' element={<PageNotFound />} />
      // </Routes>
  );
};

export default MyRouter;
