import { NextResponse } from "next/server";

export async function GET() {
  const posts = Array.from({ length: 5 }).map(() => ({
    id: Math.random().toString(36).substring(2),
    user: `User ${Math.floor(Math.random() * 100)}`,
    text: `Post content ${Math.floor(Math.random() * 1000)}`,
    image: `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`
  }));
  return NextResponse.json(posts);
}