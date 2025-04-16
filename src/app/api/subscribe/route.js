import { NextResponse } from "next/server";
import { ConnectDb } from "@/helper/connection";
import subscribemodel  from "@/modal/subscribe";
export async function GET() {
    await ConnectDb();
    let detail = await subscribemodel.find();
    return NextResponse.json({ name: "user created with specific id"  , detail});
}

export async function POST(req) {
    await ConnectDb();
    let {email} = await req.json();
    if (!email) {
        return NextResponse.json({ error: "some missing data" });
    }
    try {
        let existinguser = await subscribemodel.findOne({email});
        if (existinguser) {
            return NextResponse.json({ message: "this user is already exit" });
        }
        let usermodel = await new subscribemodel({email});
        let result = await usermodel.save();

        return NextResponse.json({ message: "thank yor for your interest",  result});
    } catch (error) {
        return NextResponse.json({ error: "no user created" });
    }



}