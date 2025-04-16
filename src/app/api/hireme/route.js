import { NextResponse } from 'next/server';
import {ConnectDb} from "@/helper/connection"
import Comment from '@/modal/schema';
export async function GET()
{
    await ConnectDb();
    let detail = await Comment.find();
    return NextResponse.json({name : "Vinay Kumar Jha" , detail});
}

export async function POST(req)
{
    await ConnectDb();
    let body = await req.json();
    let result = await new Comment(body);
    let resulttosave = await result.save();
    return NextResponse.json({message : "your first post" , resulttosave});
}