"use client";
import Image from "next/image";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import DeleteModal from "./DeleteModal";

export default function UserTable({ users }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState("");
  const usersPerPage = 5;

  const handleDelete = (id) => {
    setModal(true);
    setModalId(id);
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="w-full bg-white rounded-2xl">
      <div className="flex items-center justify-between p-6">
        <p className="font-semibold text-lg">All users</p>
        <div className="relative hidden 2xl:block">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Quick search..."
            className="w-[250px] h-12 pl-10 pr-16 border border-border-input rounded-xl placeholder:text-[#9CA3AF]"
          />
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-[1000px] w-full border-collapse border border-border">
          <thead className="bg-[#F9FAFB] text-left">
            <tr>
              <th className="p-3"></th>
              <th className="p-3 text-light text-sm font-medium">Deal ID</th>
              <th className="p-3 text-light text-sm font-medium">Customer</th>
              <th className="p-3 text-light text-sm font-medium">
                Product/Service
              </th>
              <th className="p-3 text-light text-sm font-medium">Deal Value</th>
              <th className="p-3 text-light text-sm font-medium">Close Date</th>
              <th className="p-3 text-light text-sm font-medium">Status</th>
              <th className="p-3 text-light text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr
                key={user.dealId}
                className="bg-white border-b border-[#F9FAFB]"
              >
                {/* Select Checkbox */}
                <td className="p-3">
                  <input type="checkbox" className="w-4 h-4 rounded-xl" />
                </td>

                {/* Deal ID */}
                <td className="p-3 text-sm font-medium text-blackTbl">
                  {user.dealId}
                </td>

                {/* Customer */}
                <td className="p-3 flex items-center space-x-3">
                  <Image
                    src={user.avatar}
                    alt={user.customer}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-blackTbl">
                      {user.customer}
                    </span>
                    <span className="text-xs text-light">{user.email}</span>
                  </div>
                </td>

                {/* Product/Service */}
                <td className="p-3 text-sm font-normal text-blackTbl">
                  {user.product}
                </td>

                {/* Deal Value */}
                <td className="p-3 text-sm font-normal text-blackTbl">
                  {user.dealValue}
                </td>

                {/* Close Date */}
                <td className="p-3 text-sm font-normal text-blackTbl">
                  {user.closeDate}
                </td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      user.status === "Complete"
                        ? "bg-[#ECFDF3] text-[#039855]"
                        : "bg-[#FFFAEB] text-[#DC6803]"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* Action */}
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(user.dealId)}
                    className="text-blackTbl hover:text-[#EF4444] cursor-pointer"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - Outside the overflow container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 p-4">
        <div className="text-sm text-light">
          Showing{" "}
          <span className="text-blackTxt">
            {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, users.length)}
          </span>{" "}
          of <span className="text-blackTxt">{users.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="p-2.5 border border-border rounded-xl hover:bg-gray-100"
            disabled={currentPage === 1}
          >
            <IoArrowBackOutline color="#344054" size={14} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`py-2.5 px-[17px] font-medium text-sm rounded-xl hover:bg-btn hover:text-white ${
                currentPage === i + 1 ? "bg-btn text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="p-2.5 border border-border rounded-xl hover:bg-gray-100"
            disabled={currentPage === totalPages}
          >
            <IoArrowForward color="#344054" size={14} />
          </button>
        </div>
      </div>
      <DeleteModal id={modalId} modal={modal} setmodal={setModal} />
    </div>
  );
}
