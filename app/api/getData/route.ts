import database from "@/database/database"
import { NextResponse } from "next/server"

export async function GET() {
  const [results] = await database.query('SELECT * FROM a')
  return NextResponse.json({ msg: 'Hello from server', results })
}