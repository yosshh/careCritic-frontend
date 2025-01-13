import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Award, Contact, GraduationCap, Hospital, Mail, Pen } from "lucide-react";
import UpdateProfileDialog from "./UpdateProfileDialog";

import { useState } from "react";
import { useSelector } from "react-redux";


const DoctorProfile = () => {
  
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="bg-[#8FD14F]">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-[#D84040] text-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="" alt="profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.doctor?.name}</h1>
              <p>{user?.doctor?.experienceInYears}+ yrs experience</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.doctor?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.doctor?.contactNumber}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
          <Award />
            <span>{user?.doctor?.specialty}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
          <GraduationCap />
            <span>{user?.doctor?.qualification}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
          <Hospital />
            <span>{user?.doctor?.worksIn}</span>
          </div>

        </div>

        
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default DoctorProfile;
