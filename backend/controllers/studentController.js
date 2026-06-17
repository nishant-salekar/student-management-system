const prisma = require("../config/prisma");

const cloudinary = require("../config/cloudinary");

const getStudents = async (req, res) => {
  try {
    const students =
      await prisma.student.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createStudent = async (
  req,
  res
) => {
  try {

    const {
      admissionNumber,
      name,
      course,
      year,
      dob,
      email,
      mobile,
      gender,
      address,
    } = req.body;

    let photoUrl = null;

    if (req.file) {

      const fileString =
        `data:${req.file.mimetype};base64,${req.file.buffer.toString(
          "base64"
        )}`;

      const uploadedImage =
        await cloudinary.uploader.upload(
          fileString,
          {
            folder:
              "student-management-system",
          }
        );

      photoUrl =
        uploadedImage.secure_url;
    }

    const student =
      await prisma.student.create({
        data: {
          admissionNumber,
          name,
          course,
          year: Number(year),
          dob: new Date(dob),
          email,
          mobile,
          gender,
          address,
          photo: photoUrl,
        },
      });

    res.status(201).json(student);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedStudent =
      await prisma.student.update({
        where: { id },
        data: req.body,
      });

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.student.delete({
      where: { id },
    });

    res.status(200).json({
      message: "Student Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};