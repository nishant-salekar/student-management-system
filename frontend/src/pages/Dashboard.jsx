import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import StudentTable from "../components/StudentTable";
import AddStudentModal from "../components/AddStudentModal";
import EditStudentModal from "../components/EditStudentModal";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import ViewStudentModal from "../components/ViewStudentModal";



import {
  getStudents,
  deleteStudent,
} from "../services/studentService";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [editModal, setEditModal] =
    useState(false);

  const [currentPage, setCurrentPage] =
  useState(1);

  const studentsPerPage = 5;

  const [viewModal, setViewModal] =
  useState(false);

  const [selectedStudent, setSelectedStudent] =
    useState(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      student.admissionNumber
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const indexOfLastStudent =
  currentPage * studentsPerPage;

const indexOfFirstStudent =
  indexOfLastStudent -
  studentsPerPage;

const currentStudents =
  filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

const totalPages = Math.ceil(
  filteredStudents.length /
    studentsPerPage
);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);

      setStudents(
        students.filter(
          (student) =>
            student.id !== id
        )
      );

      alert("Student Deleted Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed To Delete Student");
    }
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setEditModal(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
        Loading Students...
      </div>
    );
  }

  const handleView = (student) => {
  setSelectedStudent(student);
  setViewModal(true);
};

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen p-8">

        {/* Welcome Card */}

        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">

          <div className="flex flex-col md:flex-row justify-between items-center">

            <div>

              <h1 className="text-4xl font-bold text-gray-800">
                Welcome Admin 👋
              </h1>

              <p className="text-gray-500 mt-2 text-lg">
                Manage student records efficiently.
              </p>

            </div>

            <div className="mt-5 md:mt-0 text-center md:text-right">

              <p className="text-gray-400 text-sm">
                Dashboard Overview
              </p>

              <h2 className="text-4xl font-bold text-blue-600">
                {students.length}
              </h2>

              <p className="text-gray-500">
                Students Registered
              </p>

            </div>

          </div>

        </div>

        {/* Statistics Heading */}

        <div className="mb-5">

          <h2 className="text-xl font-semibold text-gray-700">
            Student Statistics
          </h2>

          <p className="text-gray-500">
            Quick overview of student records
          </p>

        </div>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-4 gap-5 mb-8">

          <StatsCard
            title="Total Students"
            value={students.length}
          />

          <StatsCard
            title="Male Students"
            value={
              students.filter(
                (student) =>
                  student.gender === "Male"
              ).length
            }
          />

          <StatsCard
            title="Female Students"
            value={
              students.filter(
                (student) =>
                  student.gender === "Female"
              ).length
            }
          />

          <StatsCard
            title="Active Records"
            value={students.length}
          />

        </div>

        {/* Search + Add Button */}

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">

          <input
            type="text"
            placeholder="🔍 Search by Name or Admission Number"
            value={searchTerm}
            onChange={(e) => {
  setSearchTerm(e.target.value);
  setCurrentPage(1);
}}
            className="border bg-white p-3 rounded-xl w-full md:w-96 outline-none shadow-sm"
          />

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition shadow"
          >
            + Add Student
          </button>

        </div>

        {/* Search Results */}

        <div className="mb-5 text-gray-600 font-medium">

          Showing{" "}
          <span className="font-bold text-blue-600">
            {filteredStudents.length}
          </span>{" "}
          of{" "}
          <span className="font-bold text-blue-600">
            {students.length}
          </span>{" "}
          students

        </div>

        {/* Table */}

        <StudentTable
          students={currentStudents}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onView={handleView}
        />

        <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>

      </div>

      {/* Add Modal */}

      <AddStudentModal
        isOpen={showModal}
        onClose={() =>
          setShowModal(false)
        }
        setStudents={setStudents}
      />

      {/* Edit Modal */}

      <EditStudentModal
        isOpen={editModal}
        onClose={() =>
          setEditModal(false)
        }
        selectedStudent={selectedStudent}
        students={students}
        setStudents={setStudents}
      />

      <ViewStudentModal
  isOpen={viewModal}
  onClose={() =>
    setViewModal(false)
  }
  student={selectedStudent}
/>

      <Footer />
    </>
  );
}

export default Dashboard;