import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toString = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        // const reqBody = await req.json();
        const user = await prisma.user.create({
            data: {
                firstName: "Rejaul",
                lastName: "Karim",
                email: "reza@gmail.com",
                mobile: "017001524",
                password: "abc-000",
            },
        });
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
