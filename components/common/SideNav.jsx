"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

export default function SideNav({ menu }) {
  const [nav, setNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleNav = () => setNav(!nav);
  const toggleSubMenu = (id, type) => {
    if (type !== "mega") return;
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="relative ">
      <GiHamburgerMenu
        onClick={toggleNav}
        className="lg:hidden block cursor-pointer"
        size={20}
      />

      <div
        className={`fixed top-0 right-0 bg-white z-50 min-h-screen w-4/5 sm:w-1/2 shadow-2xl border-l border-gray-200 transform transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoClose
          onClick={toggleNav}
          size={28}
          color="#9CA3AF"
          className="absolute top-6 right-5 cursor-pointer"
        />

        <div className="flex flex-col gap-6 px-6 pt-16 pb-4 border-b border-gray-100">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Quick search..."
              className="w-full h-12 pl-10 pr-16 border border-border-input rounded-xl placeholder:text-[#9CA3AF] text-sm focus:ring-2 focus:ring-indigo-100 outline-none transition"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-7 text-xs text-light border border-[#F3F4F6] rounded-md">
              ⌘ K
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="py-2.5 px-[9px] rounded-[9px] border border-border hover:bg-gray-50 transition">
              <FaXTwitter size={18} color="#9CA3AF" />
            </div>
            <div className="py-2.5 px-[9px] rounded-[9px] border border-border hover:bg-gray-50 transition">
              <FaGithub size={18} color="#9CA3AF" />
            </div>
            <div className="py-2.5 px-[9px] rounded-[9px] border border-border hover:bg-gray-50 transition">
              <FaDiscord size={18} color="#9CA3AF" />
            </div>
          </div>
        </div>

        <div className="px-6 py-6 space-y-6 overflow-y-auto">
          {menu.map((item) => (
            <div key={item.id} className="border-b border-gray-100 pb-4">
              <button
                onClick={() => toggleSubMenu(item.id, item.type)}
                className="flex items-center justify-between w-full text-left text-gray-800 font-medium text-base"
              >
                <span>{item.label}</span>
                {item.type === "mega" && (
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      activeMenu === item.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.type === "mega" && (
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeMenu === item.id
                      ? "max-h-[1000px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 gap-4">
                    {item.columns.map((col) => (
                      <Link
                        key={col.title}
                        href={col.href}
                        className="block p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition"
                        onClick={toggleNav}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="text-gray-500">
                            <i className={`icon-${col.icon} text-lg`}></i>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              {col.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {col.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {item.type !== "mega" && (
                <Link
                  href={item.href}
                  onClick={toggleNav}
                  className="block mt-2 text-gray-600 hover:text-gray-900 transition"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
