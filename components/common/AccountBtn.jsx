"use client";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { PiCirclesFour } from "react-icons/pi";
import { BsDownload } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";
import Image from "next/image";
import { logoutAction } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

export default function AccountBtn({ user }) {
  const [activeMenu, setActiveMenu] = useState(false);
  const router = useRouter();

  const handleMenuClick = () => {
    setActiveMenu(!activeMenu);
  };
  const handleLogout = async () => {
    await logoutAction();
    router.refresh();
    router.push("/");
  };
  return (
    <div className="relative">
      <button
        onClick={handleMenuClick}
        className="bg-blackTxt border border-blackTxt hover:bg-transparent cursor-pointer px-[18px] h-[42px] flex items-center justify-center text-white hover:text-blackTxt text-sm font-medium rounded-xl"
      >
        <Image
          src={"/imgs/avatar.png"}
          width={24}
          height={24}
          alt="avatar"
          className="h-6 object-cover mr-1.5"
        />
        Account
        <FiChevronDown
          className={`ml-2.5 transition-transform duration-200 ${
            activeMenu ? "rotate-180" : ""
          }`}
        />
      </button>
      {activeMenu && (
        <div className="absolute right-0 top-full mt-2 w-[230px] sm:w-[300px] bg-white border border-border rounded-[20px] shadow-lg p-2 z-50">
          <div className="border-b border-border px-4 py-3.5">
            <p className="text-base font-medium text-blackTxt">{user.name}</p>
            <p className="text-sm font-normal text-light">{user.email}</p>
          </div>
          <div className="border-b border-border py-1">
            <div className="flex items-center gap-2 px-4 py-3.5 hover:bg-cardbg rounded-[14px]">
              <PiCirclesFour size={24} color="#9CA3AF" />
              <p className="text-base font-medium text-blackTxt">Overview</p>
            </div>
            <div className="flex items-center gap-2  px-4 py-3.5 hover:bg-cardbg rounded-[14px]">
              <BsDownload size={24} color="#9CA3AF" />
              <p className="text-base font-medium text-blackTxt">Download</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-3.5 hover:bg-cardbg rounded-[14px]">
              <GrDocumentText size={24} color="#9CA3AF" />
              <p className="text-base font-medium text-blackTxt">Billing</p>
            </div>
          </div>
          <div className="py-1">
            <div
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-3.5 hover:bg-cardbg rounded-[14px] cursor-pointer"
            >
              <TbLogout2 size={24} color="#9CA3AF" />
              <p className="text-base font-medium text-blackTxt">Logout</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
