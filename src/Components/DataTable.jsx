import React, { useState } from "react";
import { useTable } from "react-table";
import ReactPaginate from "react-paginate";
import { students } from "./constant";

const DataTable = () => {
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Mobile", accessor: "mobile" },
      { Header: "Age", accessor: "age" },
      { Header: "Grade", accessor: "grade" },
      { Header: "Address", accessor: "address" },
      { Header: "Enrollment Year", accessor: "enrollmentYear" },
      { Header: "Major", accessor: "major" },
      { Header: "GPA", accessor: "gpa" }
    ],
    []
  );

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Calculate the starting and ending indices of the current page
  const startIdx = currentPage * itemsPerPage;
  const currentItems = students.slice(startIdx, startIdx + itemsPerPage);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: currentItems,
    });

  const handlePageChange = ({ selected }) => setCurrentPage(selected);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(0); // Reset to the first page whenever the items per page change
  };

  return (
    <div className="p-10 bg-gradient-to-r from-blue-500 to-teal-400 text-white min-h-screen flex flex-col items-center justify-center">

      <h2 className="text-5xl font-extrabold mb-10 tracking-wide drop-shadow-lg">
        Student Data
      </h2>


      <div className="flex items-center justify-center mb-8 space-x-4">
        <span className="font-semibold">Rows per page:</span>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="p-2 bg-white text-gray-800 rounded-md shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div className="w-full max-w-7xl bg-white shadow-2xl rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-3xl duration-300">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <thead className="bg-gradient-to-r from-teal-400 to-blue-500">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-white"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="divide-y divide-gray-300">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-teal-50 transition duration-200">
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


      <div className="mt-8 flex items-center justify-center space-x-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(students.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"pagination flex justify-center items-center space-x-2"}
          pageClassName={"px-4 py-2 rounded-md bg-white text-blue-500 shadow-md hover:bg-teal-200 transition-all duration-300 cursor-pointer"}
          activeClassName={"bg-teal-500 text-white"}
          previousClassName={"px-4 py-2 rounded-md bg-teal-500 text-white shadow-md hover:bg-teal-400 transition duration-300 cursor-pointer"}
          nextClassName={"px-4 py-2 rounded-md bg-teal-500 text-white shadow-md hover:bg-teal-400 transition duration-300 cursor-pointer"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
          pageLinkClassName={"pagination-link"}
        />
      </div>
    </div>
  );
};

export default DataTable;
