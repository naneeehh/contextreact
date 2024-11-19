const Home = ({ books }) => {
  console.log(books);

  return (
    <div className='container'>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Book Title</th>
            <th scope='col'>Page count</th>
            <th scope='col'>Year</th>
            <th scope='col'>Description</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={index}>
                <th scope='col'>1</th>
                <td>{book.bookTitle}</td>
                <td>{book.bookPages}</td>
                <td>{book.bookYear}</td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
