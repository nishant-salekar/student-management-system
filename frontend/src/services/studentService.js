import axios from "axios";

const API_URL =  "https://student-management-system-7via.onrender.com/api/students";

export const getStudents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createStudent = async (
  studentData
) => {
  const formData = new FormData();

  Object.keys(studentData).forEach(
    (key) => {
      formData.append(
        key,
        studentData[key]
      );
    }
  );

  const response = await axios.post(
    API_URL,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const updateStudent = async (
  id,
  studentData
) => {
  const response = await axios.put(
    `http://localhost:5000/api/students/${id}`,
    studentData
  );

  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};