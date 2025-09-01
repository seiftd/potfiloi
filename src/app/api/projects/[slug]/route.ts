import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const filePath = join(process.cwd(), 'projects', slug, 'index.html');

    const htmlContent = readFileSync(filePath, 'utf-8');

    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Project not found' },
      { status: 404 }
    );
  }
}
