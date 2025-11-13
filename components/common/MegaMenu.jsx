"use client";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function MegaMenu({ menu }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (id, type) => {
    if (type !== "mega") return setActiveMenu(null);
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <nav className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center space-x-4 h-16">
          {menu.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleMenuClick(item.id, item.type)}
                className="flex items-center space-x-1 text-text hover:bg-cardbg p-1 2xl:py-1.5 2xl:px-2 rounded-lg font-medium focus:outline-none"
              >
                <span>{item.label}</span>
                {item.type === "mega" && (
                  <FiChevronDown
                    className={`transition-transform duration-200 ${
                      activeMenu === item.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.type === "mega" && activeMenu === item.id && (
                <div className="absolute left-0 top-full mt-2 w-[800px] bg-white rounded-[20px] shadow-lg p-2 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="absolute top-4 bottom-4 left-1/2 w-px bg-border"></div>
                    {item.columns.map((col) => (
                      <Link
                        key={col.title}
                        href={col.href}
                        className="group block rounded-[14px] hover:bg-cardbg p-3"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-gray-500 group-hover:text-indigo-600">
                            <i className={`icon-${col.icon} text-xl`}></i>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-blackTxt group-hover:text-indigo-600">
                              {col.title}
                            </h4>
                            <p className="text-xs text-light mt-1">
                              {col.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
