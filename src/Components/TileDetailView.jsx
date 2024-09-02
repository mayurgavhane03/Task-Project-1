import React from 'react';

const TileDetailView = ({ student, close }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-96 relative shadow-2xl transform transition-transform hover:scale-105">
        <button
          className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
          onClick={close}
        >
          Close
        </button>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{student.name}</h2>
        <div className="text-lg text-gray-700">
          <p className="mb-4"><strong>Age:</strong> {student.age}</p>
          <p className="mb-4"><strong>Grade:</strong> {student.grade}</p>
          <p className="mb-4"><strong>Email:</strong> {student.email}</p>
          <p className="mb-4"><strong>address:</strong> {student.address}</p>
          <p className="mb-4"><strong>enrollmentYear:</strong> {student.enrollmentYear}</p>
          <p className="mb-4"><strong>gpa:</strong> {student.gpa}</p>
          <p className="mb-4"><strong>isActive:</strong> {student.isActive}</p>
          <p className="mb-4"><strong>Mobile:</strong> {student.mobile}</p>
          <p className="mb-4"><strong>Mobile:</strong> {student.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default TileDetailView;
