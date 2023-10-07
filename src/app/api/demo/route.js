import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const prisma = new PrismaClient();
        //Insert One
        await prisma.user.create({
            data: {
                firstName: "Sumit2",
                lastName: "Saha",
                email: "sumit122@gmail.com",
                mobile: "01700000",
                password: "abc-123",
                otp: "123",
            },
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

// await prisma.products.create({
//     data: {
//         // user_id: 1,
//         // category_id: 1,
//         name: "Apple",
//         price: "250",
//         unit: "10",
//         img_url: "abd",
//     },
// });
