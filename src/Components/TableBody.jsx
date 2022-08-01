const TableBody = (props) => {
  const { students, removeStudent } = props;

  return (
    <tbody>
      {students.map((student, index) => {
        return (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>
              <button
                onClick={() => {
                  removeStudent(index);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableBody;
