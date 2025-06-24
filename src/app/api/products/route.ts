import { NextRequest, NextResponse } from "next/server";
import { PAGE_SIZE, PRODUCTS_URL } from "@/constants";

export async function GET(
  req: NextRequest
): Promise<NextResponse<ProductsResponse>> {
  const page = Number(req.nextUrl.searchParams.get("page") || "1").toString();
  const page_size = PAGE_SIZE.toString();
  const params = new URLSearchParams({ page, page_size }).toString();
  const res = await fetch(`${PRODUCTS_URL}?${params}`);
  const data = await res.json();

  return NextResponse.json(data);
}
