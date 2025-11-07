
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
];

function StudentList() {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span className="id">{student.id}:</span>
            <span className="name">{student.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
