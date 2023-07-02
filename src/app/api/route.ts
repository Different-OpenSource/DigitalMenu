import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function GET() {
  try {
    const items = await prisma.item.findMany();

    const groupedItems = items.reduce((groups :any, item) => {
      const category = groups[item.category] || [];
      category.push(item);
      groups[item.category] = category;
      return groups;
    }, {});
    
    return NextResponse.json(groupedItems);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
