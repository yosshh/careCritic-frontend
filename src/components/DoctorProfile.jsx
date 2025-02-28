import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Award, Contact, GraduationCap, Mail, Pen } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UpdateDoctorProfileDialog from "./updateDoctorProfileDialog";



const DoctorProfile = () => {
  
  const [open, setOpen] = useState(false);
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
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
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
      <UpdateDoctorProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};
export default DoctorProfile;
