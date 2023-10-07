import { NextResponse } from "next/server";

export async function POST(req) {
    const res = await req.json();
    let email = res["email"];

    if (email) {
        return NextResponse.json({
            status: "success",
        });
    } else {
        return NextResponse.json({
            status: "Fail",
        });
    }
}
