import { NextResponse } from "next/server";
import connectToDb from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) =>{
    //fetch

    try{
        await connectToDb()

        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), {status:200});
    }catch(err){
        console.log(err)
        return new NextResponse(err, {status:500});
    }
}