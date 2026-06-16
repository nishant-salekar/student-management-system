import { useState, useEffect } from "react";
import { updateStudent } from "../services/studentService";

import toast from "react-hot-toast";

function EditStudentModal({
  isOpen,
  onClose,
  selectedStudent,
  students,
  setStudents,
}) {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    year: "",
    dob: "",
    email: "",
    mobile: "",
    gender: "",
    address: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const updatedStudent =
      await updateStudent(
        selectedStudent.id,
        formData
      );

    const updatedStudents =
      students.map((student) =>
        student.id === selectedStudent.id
          ? updatedStudent
          : student
      );

    setStudents(updatedStudents);

    toast.success(
  "Student Updated Successfully"
);

    onClose();
  } catch (error) {
    console.log(error);

    alert(
      "Failed To Update Student"
    );
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-3xl rounded-xl p-8">

        <div className="flex justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Edit Student
          </h2>

          <button
            onClick={onClose}
            className="text-red-500"
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-2 gap-4"
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded col-span-2"
          >
            Update Student
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditStudentModal;