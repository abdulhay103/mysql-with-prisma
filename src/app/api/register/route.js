import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toString = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        await prisma.user.create({
            data: reqBody,
        });
        return NextResponse.json({
            status: "Registration Success",
        });
    } catch (error) {
        return NextResponse.json({
            status: "Registration Fail",
            result: error.toString(),
        });
    }
}
