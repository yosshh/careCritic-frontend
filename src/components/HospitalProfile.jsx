import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Award, Contact, Mail, MapPinned, Pen } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HospitalReviewTable from "./HospitalReviewTable"
import UpdateHospitalProfile from "./updateHospitalProfile";



const HospitalProfile = () => {
  
  const [open, setOpen] = useState(false);
  const { hospital } = useSelector((store) => store.auth);

  useEffect(() => {
    console.log("Hospital in Profile:", hospital);
  }, [hospital]);

  return (
    <div className="bg-[#8FD14F]">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-[#D84040] text-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={hospital?.hospitalImage} alt="profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{hospital?.hospitalName}</h1>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{hospital?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{hospital?.contactNumber}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Award />
            <span>{hospital?.specializedIn}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
          <MapPinned />
            <span>{hospital?.address}</span>
          </div>
        </div>
      </div>
      <UpdateHospitalProfile open={open} setOpen={setOpen} />
      <HospitalReviewTable />
    </div>
  );
};
export default HospitalProfile;
