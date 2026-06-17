function ViewStudentModal({
  isOpen,
  onClose,
  student,
}) {
  if (!isOpen || !student)
    return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Student Details
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            ✕
          </button>

        </div>

        <div className="flex flex-col items-center mb-6">

  <img
    src={
      student.photo ||
      "https://via.placeholder.com/150"
    }
    alt={student.name}
    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
  />

  <h3 className="mt-4 text-xl font-bold text-gray-800">
    {student.name}
  </h3>

  <p className="text-gray-500">
    {student.admissionNumber}
  </p>

</div>

        <div className="grid grid-cols-2 gap-4">

          <Info
            label="Admission No"
            value={student.admissionNumber}
          />

          <Info
            label="Full Name"
            value={student.name}
          />

          <Info
            label="Course"
            value={student.course}
          />

          <Info
            label="Year"
            value={student.year}
          />

          <Info
            label="Email"
            value={student.email}
          />

          <Info
            label="Mobile"
            value={student.mobile}
          />

          <Info
            label="Gender"
            value={student.gender}
          />

          <Info
            label="Address"
            value={student.address}
          />

        </div>

      </div>

    </div>
  );
}

function Info({
  label,
  value,
}) {
  return (
    <div className="bg-gray-100 p-3 rounded-lg">

      <p className="text-gray-500 text-sm">
        {label}
      </p>

      <p className="font-semibold">
        {value}
      </p>

    </div>
  );
}

export default ViewStudentModal;