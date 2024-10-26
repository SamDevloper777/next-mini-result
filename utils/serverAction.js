"use server"

import Students from "@/models/Students";
import Dbconnect from "./Dbconnect"
import { redirect } from "next/navigation";
import {join} from "path";
import { writeFile } from "fs/promises";

export async function insertResult(formdata)
{
    Dbconnect();
    //image work
    let image= formdata.get("dp");
    let bytes= await image.arrayBuffer();
    let buffer= Buffer.from(bytes);
    let path = join("./public","student_dp",image.name);
    await writeFile(path,buffer) 


    let data={
        name:formdata.get("name"),
        fatherName:formdata.get("fatherName"),
        schoolName:formdata.get("schoolName"),
        maths:formdata.get("maths"),
        sst:formdata.get("sst"),
        hindi:formdata.get("hindi"),
        eng:formdata.get("eng"),
        sci:formdata.get("sci"),
        dp:image.name,
    }
    let newData = await Students.create(data);

    redirect("/manage");
}
export async function Deletestudent(id,formdata)
{
    Dbconnect();
    await Students.findByIdAndDelete(id);
    redirect("/manage")
}