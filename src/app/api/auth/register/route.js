import { NextResponse } from "next/server";

export async function GET()
{
    return NextResponse.json({message : "your data will get from here"});
}
export async function POST(req)
{
    let {name , email , password}= await req.json();
    if(!name || !email || !password)
    {
        return NextResponse.json({error:"Please provide your Credentials"});
    }
    console.log(name,email,password);
    return NextResponse.json({message:"your data is submitted",name});
}