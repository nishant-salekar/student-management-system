function StudentTable({
  students,
  onDelete,
  onEdit,
  onView,
}) {
  if (students.length === 0) {
    return (
      <div className="bg-white shadow rounded-xl p-10 text-center">

        <div className="text-6xl mb-4">
          🎓
        </div>

        <h2 className="text-2xl font-bold text-gray-700">
          No Students Found
        </h2>

        <p className="text-gray-500 mt-2">
          Add a student to get started.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center p-4 border-b">

        <h2 className="text-xl font-bold text-gray-700">
          Student Records
        </h2>

        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
          {students.length} Students
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Admission No</th>
              <th className="p-3">Photo</th>
              <th className="p-3">Name</th>
              <th className="p-3">Course</th>
              <th className="p-3">Year</th>
              <th className="p-3">Email</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Actions</th>
            </tr>

          </thead>

          <tbody>

            {students.map((student, index) => (

              <tr
                key={student.id}
                className="border-b text-center hover:bg-gray-50 transition"
              >

                <td className="p-3 font-medium">
                  {index + 1}
                </td>

                <td className="p-3">
                  {student.admissionNumber}
                </td>

                {/* Photo Column */}

                <td className="p-3">

                  {student.photo ? (

                    <img
                      src={`http://localhost:5000/uploads/${student.photo}`}
                      alt={student.name}
                      className="w-12 h-12 rounded-full object-cover mx-auto border"
                    />

                  ) : (

                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mx-auto">
                      👤
                    </div>

                  )}

                </td>

                <td className="font-medium">
                  {student.name}
                </td>

                <td>
                  {student.course}
                </td>

                <td>
                  {student.year}
                </td>

                <td>
                  {student.email}
                </td>

                <td>
                  {student.mobile}
                </td>

                <td className="space-x-2 p-3">

                  <button
  onClick={() =>
    onView(student)
  }
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg transition"
>
  View
</button>

                  <button
                    onClick={() =>
                      onEdit(student)
                    }
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-lg transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      onDelete(student.id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StudentTable;