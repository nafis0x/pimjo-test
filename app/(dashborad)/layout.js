import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import AccountBtn from "@/components/common/AccountBtn";
import { fetchUserAction } from "../actions/auth";

export default async function DashBoardLayout({ children }) {
  const profile = await fetchUserAction();
  return (
    <>
      <div className="grid-container border-y border-border">
        {/* Top row */}
        <div className="md:block hidden border-r border-b border-border"></div>
        <div className="border-b border-border h-10"></div>
        <div className="md:block hidden border-l border-b border-border"></div>

        {/* Middle row */}
        <div className="md:block hidden border-r border-b border-border"></div>
        <div className="border-b border-border h-[83px] px-4 py-2 md:py-5 md:px-8">
          <div className="h-full flex items-center justify-between">
            <div className="flex items-center gap-11">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/imgs/Logo.png"}
                    width={110}
                    height={44}
                    alt="logo"
                    className="object-cover h-11"
                  />
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="2xl:flex items-center gap-2 hidden">
                <div className="py-2.5 px-[9px] rounded-[9px] border border-border">
                  <FaXTwitter size={18} color="#9CA3AF" />
                </div>
                <div className="py-2.5 px-[9px] rounded-[9px] border border-border">
                  <FaGithub size={18} color="#9CA3AF" />
                </div>
                <div className="py-2.5 px-[9px] rounded-[9px] border border-border">
                  <FaDiscord size={18} color="#9CA3AF" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <AccountBtn user={profile.user} />
              </div>
            </div>
          </div>
        </div>
        <div className="md:block hidden border-l border-b border-border"></div>

        {/* bottom row */}
        <div className="border-r border-b border-border"></div>
        <div className="grid grid-cols-[15px_1fr_15px] md:grid-cols-[40px_1fr_40px] border-b border-border">
          <div className="border-r border-border tilt-lines"></div>
          <div className="bg-cardbg overflow-hidden">{children}</div>
          <div className="border-l border-border tilt-lines "></div>
        </div>
        <div className="border-l border-b border-border"></div>
      </div>
    </>
  );
}
