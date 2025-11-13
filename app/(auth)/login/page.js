import LogInForm from "@/components/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 md:gap-[18px] py-10 down-border">
        <Link href={"/"}>
          <Image
            src={"/imgs/Logo.png"}
            width={110}
            height={44}
            alt="logo"
            className="object-cover h-11"
          />
        </Link>
        <p
          style={{ lineHeight: "48px" }}
          className="font-dm text-3xl sm:text-[40px] text-center font-medium text-clrTwo"
        >
          Sign In to your account
        </p>
        <p
          style={{ lineHeight: "28px" }}
          className="font-dm text-lg font-normal text-light text-center"
        >
          Unlock exclusive access to premium components <br />
          and design resources.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="p-3 w-full sm:w-auto sm:p-8 lg:p-[60px] md:border-x border-border">
          <LogInForm />
        </div>
      </div>
    </div>
  );
}
