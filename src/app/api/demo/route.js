import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const prisma = new PrismaClient();
        //Insert One
        await prisma.user.createMany({
            data: [
                {
                    firstName: "Sabuj",
                    lastName: "Mia",
                    email: "sabuj@gmail.com",
                    mobile: "01700001",
                    password: "abc-124",
                    otp: "1122",
                },
                {
                    firstName: "Abdul",
                    lastName: "Kuddus",
                    email: "kuddus@gmail.com",
                    mobile: "01700010",
                    password: "abc-10",
                    otp: "1100",
                },
                {
                    firstName: "Sumon",
                    lastName: "Ahmed",
                    email: "sumon@gmail.com",
                    mobile: "0170002233",
                    password: "abc-12322",
                    otp: "2233",
                },
            ],
        });
        return NextResponse.json({
            status: "Success",
        });
    } catch (error) {
        console.log(error.toString());
        return NextResponse.json({
            status: "Fail",
        });
    }
}
