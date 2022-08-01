import { useState } from "react";
import Table from "./Components/Table";
import Form from "./Components/Form/Form";

const App = () => {
  const [students, setStudent] = useState([]);

  const removeStudent = (index) => {
    setStudent(
      students.filter((_, i) => {
        return index !== i;
      })
    );
  };

  const addStudent = (student) => {
    return setStudent([...students, student]);
  };
  console.log(students);
  return (
    <div>
      <Table students={students} removeStudent={removeStudent} />
      <Form addStudent={addStudent} />
    </div>
  );
};

export default App;
