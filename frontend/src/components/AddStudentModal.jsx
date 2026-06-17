import { useState } from "react";
import { createStudent } from "../services/studentService";

import toast from "react-hot-toast";

function AddStudentModal({
  isOpen,
  onClose,
  setStudents,
}) {
  const [student, setStudent] = useState({
    name: "",
    course: "",
    year: "",
    dob: "",
    email: "",
    mobile: "",
    gender: "",
    address: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setStudent((prev) => ({
      ...prev,
      photo: e.target.files[0],
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const admissionNumber =
      "PU" + Date.now();

    const formData =
  new FormData();

formData.append(
  "admissionNumber",
  admissionNumber
);

formData.append(
  "name",
  student.name
);

formData.append(
  "course",
  student.course
);

formData.append(
  "year",
  student.year
);

formData.append(
  "dob",
  student.dob
);

formData.append(
  "email",
  student.email
);

formData.append(
  "mobile",
  student.mobile
);

formData.append(
  "gender",
  student.gender
);

formData.append(
  "address",
  student.address
);

if (student.photo) {

  formData.append(
    "photo",
    student.photo
  );

}

    const savedStudent =
      await createStudent(formData);

    setStudents((prev) => [
      savedStudent,
      ...prev,
    ]);

    toast.success(
  "Student Added Successfully"
);

    onClose();
  } catch (error) {
    console.log(error);

    alert(
      "Error Adding Student"
    );
  }
};

if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl p-8 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Add New Student
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl font-bold"
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={student.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <select
            name="year"
            value={student.year}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>

          <input
            type="date"
            name="dob"
            value={student.dob}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={student.mobile}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <select
            name="gender"
            value={student.gender}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          >
            <option value="">
              Select Gender
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="file"
            accept="image/*"
            placeholder="Add Photograph"
            onChange={handleFileChange}
            className="border p-3 rounded-lg"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={student.address}
            onChange={handleChange}
            className="border p-3 rounded-lg col-span-2"
            rows="4"
            required
          />

          <div className="col-span-2 flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Save Student
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddStudentModal;