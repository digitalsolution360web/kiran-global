import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [blogs] = await pool.query(`
      SELECT
        id,
        h1,
        slug,
        excerpt,
        image,
        created_at
      FROM blogs
      WHERE status = 1
      ORDER BY created_at DESC
      LIMIT 3
    `);

    return NextResponse.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("Home Blog API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs",
      },
      {
        status: 500,
      }
    );
  }
}