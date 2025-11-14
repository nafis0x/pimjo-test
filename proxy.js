import { NextResponse } from "next/server";

export function proxy(request) {
  const path = request.nextUrl.pathname;

  if (path.startsWith("/dashboard")) {
    const token =
      request.cookies.get("token")?.value ||
      request.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if ((path === "/login" || path === "/signup") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
