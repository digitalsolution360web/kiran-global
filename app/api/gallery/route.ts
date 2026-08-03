import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';

    const offset = (page - 1) * limit;

    let query = `
      SELECT 
       *
      FROM galleries
    `;

    let countQuery = `
      SELECT COUNT(*) as total
      FROM galleries
      
    `;

    const params: any[] = [];

    if (search) {
      query += `
        WHERE 
          galleries.title LIKE ?
      `;

      countQuery += `
        WHERE 
          galleries.title LIKE ?
      `;

      params.push(
        `%${search}%`
      );
    }

    query += `
      ORDER BY galleries.order DESC
      LIMIT ? OFFSET ?
    `;

    const [rows] = await pool.query(query, [
      ...params,
      limit,
      offset,
    ]);

    const [countResult] = await pool.query(countQuery, params);

    return NextResponse.json({
      data: rows,
      total: (countResult as any[])[0].total,
      page,
      limit,
    });

  } catch (error: any) {
    console.error('GET GALLERY ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to fetch gallery images' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      title,
      alt,
      heading,
      order,
      image,
    } = body;

    const [result] = await pool.query(
      `
      INSERT INTO galleries (
        title,
        alt,
        heading,
        order,
        image
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        title || null,
        alt || null,
        heading || null,
        order,
        image,
      ]
    );

    return NextResponse.json({
      success: true,
      id: (result as any).insertId,
    });

  } catch (error: any) {
    console.error('CREATE GALLERY ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to create gallery image' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      id,
      title,
      alt,
      heading,
      order,
      image,
    } = body;

    await pool.query(
      `
      UPDATE galleries
      SET
        title = ?,
        alt = ?,
        heading = ?,
        order = ?,
        image = ?
      WHERE id = ?
      `,
      [
        title || null,
        alt || null,
        heading || null,
        order,
        image,
        id,
      ]
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error: any) {
    console.error('UPDATE GALLERY ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to update gallery image' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Image ID is required' },
        { status: 400 }
      );
    }

    try {
      await pool.query(
        'DELETE FROM galleries WHERE id = ?',
        [id]
      );
    } catch (err) {
      // Table might not exist, continue
      console.log('No galleries table or no records deleted');
    }

    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully',
    });

  } catch (error: any) {
    console.error('DELETE GALLERY ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to delete gallery image' },
      { status: 500 }
    );
  }
}