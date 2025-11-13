"use client";

import { useState } from "react";
import { deleteUsers } from "@/app/actions/auth";
import Image from "next/image";

export default function DeleteModal({ id, setmodal, modal }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!modal) return null;

  const handledelete = async () => {
    setLoading(true);
    const res = await deleteUsers(id);

    setMessage(res.data);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-[#374151CC] backdrop-blur-[10px] flex items-center justify-center z-50">
      <div className="bg-cardbg flex flex-col items-center rounded-2xl p-6 lg:p-10 w-80 lg:w-[552px] shadow-lg">
        <Image
          src={"/imgs/delete.png"}
          width={120}
          height={120}
          alt="delete"
          className="h-[120px] object-cover"
        />
        <h2 className="text-lg font-medium text-blackTxt  mt-6 mb-4">
          Remove User Confirmation
        </h2>
        <p className="text-sm text-light mb-6 text-center">
          Are you sure you want to remove this user? This action cannot be
          undone and the user’s access will be permanently revoked.
        </p>

        {message && (
          <p className="text-sm text-center text-[#EF4444] mb-4">{message}</p>
        )}

        <div className="flex justify-center gap-3">
          <button
            onClick={() => {
              setLoading(false);
              setMessage(null);
              setmodal(false);
            }}
            className="px-4 py-2 rounded-xl font-medium bg-white border border-border text-blackTxt hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handledelete}
            disabled={loading || !!message}
            className={`px-4 py-2 rounded-xl bg-[#EF4444] font-medium border border-border text-white hover:bg-red-600 transition flex items-center justify-center ${
              loading || !!message ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Deleting..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}
