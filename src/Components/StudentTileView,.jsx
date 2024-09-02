import React, { useState } from 'react';
import TileDetailView from './TileDetailView';
import { students as initialStudents } from './constant';

const StudentTileView = () => {
  const [students, setStudents] = useState(initialStudents); 
  const [selectedStudent, setSelectedStudent] = useState(null); 
  const [editingStudent, setEditingStudent] = useState(null); 


  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleSave = (id, updatedStudent) => {
    setStudents(students.map(student => (student.id === id ? updatedStudent : student)));
    setEditingStudent(null);
  };


  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  const handleOpen = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="p-8 bg-sky-100 min-h-screen">
      {selectedStudent ? (
        <TileDetailView
          student={selectedStudent}
          close={() => setSelectedStudent(null)}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="relative bg-white rounded-lg shadow-lg p-6 text-center transform transition hover:scale-105 cursor-pointer"
              onClick={() => handleOpen(student)}
            >
              {editingStudent && editingStudent.id === student.id ? (
                <div>
                  <input
                    type="text"
                    value={editingStudent.name}
                    onChange={(e) =>
                      setEditingStudent({ ...editingStudent, name: e.target.value })
                    }
                    className="text-xl font-semibold text-gray-800 mb-2"
                  />
                  <input
                    type="text"
                    value={editingStudent.grade}
                    onChange={(e) =>
                      setEditingStudent({ ...editingStudent, grade: e.target.value })
                    }
                    className="text-gray-700 mb-4"
                  />
                  <div className="flex justify-center space-x-2">
                    <button
                      className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleSave(student.id, editingStudent);
                      }}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCancelEdit();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{student.name}</h4>
                  <p className="text-gray-700 mb-4">Grade: {student.grade}</p>
                  <div className="flex justify-center space-x-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleEdit(student);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(student.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
                     
                    >
                      Flag
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentTileView;
