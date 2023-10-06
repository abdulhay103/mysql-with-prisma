import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
    try {
        const prisma = new PrismaClient();
        //Insert One
        let result = await prisma.products.create({
            data: { name: "Apple", price: "250", unit: "10", img_url: "abd" },
        });
        return NextResponse.json({
            status: "Success",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
        });
    }
}
