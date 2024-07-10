import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // return Nextfunction GETResponse.redirect();
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};
