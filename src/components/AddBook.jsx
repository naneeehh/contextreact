import { useForm } from "react-hook-form";

const AddBook = ({setBooks}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const saveData = (newBook) => {
    setBooks((oldBooks) => [
        ...oldBooks, newBook
    ])
    reset();
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(saveData)}>
        <div className='d-flex flex-row align-items-center justify-content-start my-2'>
          <label
            htmlFor='bookTitle'
            className='form-label mx-3'
            style={{ width: "250px" }}
          >
            Book Title
          </label>
          <input
            type='text'
            id='bookTitle'
            className='form-control form-control-sm'
            {...register("bookTitle", { required: true })}
          />
        </div>
        {errors.bookTitle && (
          <div className='w-100'>
            <p className='text-danger'>This field is required</p>
          </div>
        )}

        <div className='d-flex flex-row align-items-center justify-content-start my-2'>
          <label
            htmlFor='bookPages'
            className='form-label mx-3'
            style={{ width: "250px" }}
          >
            Book Pages
          </label>
          <input
            type='text'
            id='bookPages'
            className='form-control form-control-sm'
            {...register("bookPages", {
              required: true,
              min: 0,
              max: 1000,
              pattern: /\d+/,
            })}
          />
        </div>
        {errors.bookPages && (
          <div className='w-100'>
            <p className='text-danger'>Write number from 0 to 1000</p>
          </div>
        )}

        <div className='d-flex flex-row align-items-center justify-content-start my-2'>
          <label
            htmlFor='bookYear'
            className='form-label mx-3'
            style={{ width: "250px" }}
          >
            Book Year
          </label>
          <input
            type='text'
            id='bookYear'
            className='form-control form-control-sm'
            {...register("bookYear", {
              required: true,
              min: 1700,
              pattern: /\d+/,
            })}
          />
        </div>
        {errors.bookYear && (
          <div className='w-100'>
            <p className='text-danger'>Write year from 1700</p>
          </div>
        )}

        <div className='d-flex flex-row justify-content-center'>
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
