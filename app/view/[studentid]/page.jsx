import Students from "@/models/Students";
import Dbconnect from "@/utils/Dbconnect";
import Image from "next/image";

const page = async({params}) => {

    Dbconnect();
    const studentid =params.studentid;
    const data = await Students.findById(studentid);
    let totalmarks =data.maths+data.sci+data.eng+data.hindi+data.sst;
    
    let fail=false;
     

    if(data.maths<30) fail=true;
    if(data.sst<30) fail=true;
    if(data.hindi<30) fail=true;
    if(data.eng<30) fail=true;
    if(data.sci<30) fail=true;

    const Divison=(fail)?"fail":(totalmarks>=300 ? "1st":(totalmarks>=250) ? "2nd":(totalmarks>=150) ? "3rd" : "Fail");

  return (
    <div className="flex justify-center items-center flex-1">
        <table className="border w-6/12">
            <tbody>
                <tr className="border">
                    <th colSpan="4" className="text-center py-3 bg-blue-500">Personal Details</th>
                </tr>
                <tr className="border">
                    <th colSpan="2">FullName</th>
                    <td className="border p-4">{data.name}</td>
                    <td className="border  p-4" rowSpan="3">
                        <Image width={150} height={200} src={`/student_dp/${data.dp}`}/>
                    </td>
                </tr>
                <tr className="border">
                    <th colSpan="2">FatherName</th>
                    <td className="border p-4">{data.fatherName}</td>
                </tr>
                <tr className="border">
                    <th colSpan="2">School Name</th>
                    <td className="border p-4">{data.schoolName}</td>
                </tr>
                <tr className="border">
                    <th colSpan="4" className="text-center py-3 bg-red-500">Marks Details</th>
                </tr>
                <tr className="border">
                    <th className="border p-4">Subject</th>
                    <th className="border p-4">Total Marks</th>
                    <th className="border p-4">Pass Marks</th>
                    <th className="border p-4">Obtain Marks</th>
                </tr>
                <tr className="border">
                    <th className="border p-4">Maths</th>
                    <th className="border p-4">100 </th>
                    <th className="border p-4">30</th>
                    <th className="border p-4">{(data.maths<30) ? data.maths + "F" : data.maths}</th>
                </tr>
                <tr className="border">
                    <th className="border p-4">Science</th>
                    <th className="border p-4">100 </th>
                    <th className="border p-4">30</th>
                    <th className="border p-4">{(data.sci<30) ? data.sci + "F" : data.sci}</th>
                </tr>
                <tr className="border">
                    <th className="border p-4">Hindi</th>
                    <th className="border p-4">100 </th>
                    <th className="border p-4">30</th>
                    <th className="border p-4">{(data.hindi<30) ? data.hindi + "F" : data.hindi}</th>
                </tr>
                <tr className="border">
                    <th className="border p-4">English</th>
                    <th className="border p-4">100 </th>
                    <th className="border p-4">30</th>
                    <th className="border p-4">{(data.eng<30) ? data.eng + "F" : data.eng}</th>
                </tr>
                <tr className="border">
                    <th className="border p-4">Sst</th>
                    <th className="border p-4">100 </th>
                    <th className="border p-4">30</th>
                    <th className="border p-4">{(data.sst<30) ? data.sst + "F" : data.sst}</th>
                </tr>
                <tr className="border">
                    <th colSpan="4" className=" py-3 bg-green-500">Result Marks</th>
                </tr>
                <tr className="border">
                    <th colSpan="2">Total Marks</th>
                    <td className="border p-2" colSpan="2">{totalmarks}</td>
                </tr>
                <tr className="border">
                    <th colSpan="2">Divison</th>
                    <td className="border p-2" colSpan="2">{Divison}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default page