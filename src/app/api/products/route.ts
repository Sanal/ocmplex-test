import { NextRequest, NextResponse } from "next/server";
import { PAGE_SIZE } from "@/constants";

export async function GET(
  req: NextRequest
): Promise<NextResponse<ProductsResponse>> {
  const page = Number(req.nextUrl.searchParams.get("page") || "1");

  const res = await fetch(
    `http://o-complex.com:1337/products?page=${page}&page_size=${PAGE_SIZE}`
  );
  const data = await res.json();

  return NextResponse.json(data);
}
