import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const student = {
    name,
    age,
  };

  const inputOnChangeHandler = (event) => {
    const { name, value } = event.target;
    return name === "name" ? setName(value) : setAge(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    return props.addStudent(student);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={inputOnChangeHandler}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        name="age"
        value={age}
        onChange={inputOnChangeHandler}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
export default Form;
