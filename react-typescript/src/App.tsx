
import React from "react";
import { RegisterOptions, useForm } from 'react-hook-form';
import { NewNoteInput } from "./containers/todo/newNoteInput";

type Profile = {
  firstName: string,
  lastName: string,
  age: number
}


const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Profile>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">firstName</label>
          <input type="text"  {...register("firstName")} id='firsName' name='firstName' />

          <label htmlFor="lastName">lastName</label>
          <input  {...register("lastName")} type="text" id='lastName' name='lastName' />

          <label htmlFor="age">age</label>
          <input {...register("age")} type="text" id='age' name='age' />

          <button type='submit'>Save</button>
        </div>
      </form>
    </>
  );
}

export default App;