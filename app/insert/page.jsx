import Students from "@/models/Students";
import Dbconnect from "@/utils/Dbconnect"
import { insertResult } from "@/utils/serverAction";
import Link from "next/link"


const page =  () => {
  
  return (
    <div className="flex flex-1  items-center justify-center h-screen  ">
      <form action={insertResult} method="post" className="border border-blue-600 bg-zinc-900 w-5/12 rounded-md p-10 ">
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="name">FullName</label>
          <input type="text" className="border px-3 py-2 rounded text-black  w-full" name="name" />
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="FatherName">FatherName</label>
          <input type="text" className="border px-3 py-2 rounded  text-black w-full" name="fatherName" />
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="schoolName">schoolName</label>
          <input type="text" className="border px-3 py-2 rounded  text-black w-full" name="schoolName" />
        </div>
        <div className="grid grid-cols-5 gap-5">
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="maths">maths</label>
            <input type="text" className="border px-3 py-2 rounded  text-black w-full" name="maths" />
          </div><div className="mb-3 flex flex-col gap-2">
            <label htmlFor="sci">sci</label>
            <input type="text" className="border px-3 py-2 rounded text-black  w-full" name="sci" />
          </div><div className="mb-3 flex flex-col gap-2">
            <label htmlFor="eng">eng</label>
            <input type="text" className="border px-3 py-2 rounded text-black  w-full" name="eng" />
          </div><div className="mb-3 flex flex-col gap-2">
            <label htmlFor="hindi">hindi</label>
            <input type="text" className="border px-3 py-2 rounded text-black  w-full" name="hindi" />
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="sst">sst</label>
            <input type="text" className="border px-3 py-2 rounded text-black  w-full" name="sst" />
          </div>
        </div>
        <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="dp">dp</label>
            <input type="file" className="border px-3 py-2 rounded text-black  w-full" name="dp" />
          </div>
          
        <div className="mb-3 flex w-full justify-between py-2 gap-2 ">
          <Link href="/" className="bg-indigo-500 text-center w-full px-3 py-2 rounded ">Go Back</Link>
          <input type="submit" className=" px-3 py-2 rounded w-full bg-green-500 " value="Create new Result" />
        </div>

      </form>
    </div>
  )
}

export default page