import Students from "@/models/Students";
import Dbconnect from "@/utils/Dbconnect";
import { Deletestudent } from "@/utils/serverAction";
import Link from "next/link"


const page = async() => {
  Dbconnect();
  
  const data= await Students.find({})
  return (
    <div className="flex flex-1 flex-col items-center p-10  h-screen  ">
        
        <table className="border  w-full">
            <thead>
                <tr>
                    <th className="border p-5">Id</th>
                    <th className="border p-5">Name</th>
                    <th className="border p-5">Father</th>
                    <th className="border p-5">School</th>
                    <th className="border p-5">Maths</th>
                    <th className="border p-5">Sci</th>
                    <th className="border p-5">Sst</th>
                    <th className="border p-5">Hindi</th>
                    <th className="border p-5">Eng</th>
                    <th className="border p-5">Total</th>
                    <th className="border p-5">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                data.map((std,i)=>{
                  let id= std._id;
                  const StudentDeleteWithId = Deletestudent.bind(null,id);

                  return(
                  <tr key={i}>
                    <td className="border p-4">{i+1}</td>
                    <td className="border p-4">{std.name}</td>
                    <td className="border p-4">{std.fatherName}</td>
                    <td className="border p-4">{std.schoolName}</td>
                    <td className="border p-4">{std.maths}</td>
                    <td className="border p-4">{std.sci}</td>
                    <td className="border p-4">{std.sst}</td>
                    <td className="border p-4">{std.hindi}</td>
                    <td className="border p-4">{std.eng}</td>
                    <td className="border p-4">{std.maths+std.eng+std.hindi+std.sst+std.sci}</td>
                    <td className="border p-4 flex justify-center gap-3">
                      <Link href={`/view/${std._id}`} className="bg-green-600 px-3 py-2 rounded text-white">View Marksheet</Link>
                      <form action={StudentDeleteWithId} method="post">
                        <button className="bg-red-600 hover:bg-red-800 text-white px-3 py-2 rounded">Delete</button>
                      </form>
                    </td>
                  </tr>)
})
                }
            </tbody>
        </table>
        <div className=" flex w-full mt-5 justify-between gap-3 items-start">
          <Link href="/" className="bg-indigo-500 text-center w-[200px] px-3 py-2 rounded ">Go Back</Link>
          <Link href="/insert" className=" px-3 py-2 rounded w-[200px] text-center bg-green-500 " >Insert</Link>
        </div>
    </div>
    
  )
}

export default page