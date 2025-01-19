
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Award, Contact, GraduationCap, Mail } from "lucide-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";



const DoctorCard = () => {
  

  const { doctor } = useSelector((store) => store.auth);

  useEffect(() => {
    // console.log("Doctor in Profile:", doctor);
  }, [doctor]);

  return (
    <div className="bg-[#8FD14F]">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-[#D84040] text-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={doctor?.profilePhoto} alt="profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{doctor?.name}</h1>
              <p>{doctor?.experienceInYears}+ yrs experience</p>
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{doctor?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{doctor?.contactNumber}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Award />
            <span>{doctor?.specialty}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <GraduationCap />
            <span>{doctor?.qualification}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorCard;
