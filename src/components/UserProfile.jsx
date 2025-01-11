import ReviewTable from "./ReviewTable";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
// import { Badge } from "./ui/badge";
// import { Label } from "./ui/label";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// const skills = ["Html", "Css", "Javascript", "Reactjs"]

const Profile = () => {
  // useGetAppliedJobs()
  // const [open, setOpen] = useState(false);
  // const { user } = useSelector((store) => store.auth);
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
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>bio</p>
            </div>
          </div>
          <Button
            // onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>email</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9650802602</span>
          </div>
        </div>

        
      </div>
      <div className="max-w-4xl mx-auto rounded-2xl">
        <ReviewTable />
       
      </div>
      {/* <UpdateProfileDialog open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default Profile;
