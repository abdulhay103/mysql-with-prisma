import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        const user = await prisma.user.create({ data: reqBody });
        return NextResponse.json({
            status: "Registration Success",
            data: user,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Registration Fail",
            result: error.toString(),
        });
    }
}
