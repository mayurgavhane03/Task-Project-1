import React from 'react';
import { students } from './constant';

const StudentGridView = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-lg shadow-lg p-5 text-center transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{student.name}</h3>
            <p className="text-gray-600 text-lg">Age: {student.age}</p>
            <p className="text-gray-600 text-lg">Grade: {student.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentGridView;
