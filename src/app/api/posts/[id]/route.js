import { NextResponse } from "next/server";
import connectToDb from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, {params}) =>{
    //fetch

    const {id} = params;
    try{
        await connectToDb()

        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), {status:200});
    }catch(err){
        console.log(err)
        return new NextResponse(err, {status:500});
    }
}