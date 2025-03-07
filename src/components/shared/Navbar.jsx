import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User2 } from "lucide-react";
import { Button } from "../ui/button";
import logo from '../../assets/logo.png';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setLogout } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/constants";
import { DOCTOR_API_END_POINT } from "@/constants";
import { HOSPITAL_API_END_POINT } from "@/constants";
import { persistor } from "@/redux/store";

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.auth); 
  const { doctor } = useSelector((store)=> store.auth)
  const { hospital } = useSelector((store)=> store.auth)

  // Determine profile route based on user role
  console.log("Redux user object:", user);

  const getProfileRoute = () => {
    console.log("Redux user object:", user, doctor, hospital); // Debugging
  
    if (doctor) return "/doctorProfile";
    if (hospital) return "/hospitalProfile";
    return "/userProfile";
  };
  

  let endpoint = USER_API_END_POINT;

  if (user?.doctor?.role === "Doctor") {
    endpoint = DOCTOR_API_END_POINT;
  } else if (user?.hospital?.role === "Hospital") {
    endpoint = HOSPITAL_API_END_POINT;
  }
  

  const logoutHandler = async () => { 
    try {
      const res = await axios.get(`${endpoint}/logout`, {
        withCredentials: true,
      });

      console.log("Logout successful", res.data);

      if (res.data.success) {
        localStorage.clear();  // ✅ Clear all stored data
        sessionStorage.clear();  // ✅ Clear session data
        dispatch(setLogout());  // ✅ Reset Redux state
        persistor.purge();  // ✅ Clear persisted Redux state

        navigate("/"); // ✅ Redirect to homepage
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Logout failed.");
    }
  };

  

  return (
    <div className="bg-[#F9E6CF]">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div className="font-serif flex">
          <Link to="/">
            <Button variant="outline">
              <Avatar>
                <AvatarImage src={logo} />
              </Avatar>
              <h1 className="text-2xl font-bold text-[#69247C]">
                Care<span className="text-[#F83002]"> Critic</span>
              </h1>
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-Poppins font-medium items-center gap-5 text-[#543A14]">
            <li className="hover:text-[#dba14a]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#dba14a]">
              <Link to="/hospital">Hospitals</Link>
            </li>
            <li className="hover:text-[#dba14a]">
              <Link to="/doctors">Doctors</Link>
            </li>
            <li className="hover:text-[#dba14a]">
              <Link>About Us</Link>
            </li>
          </ul>
          {(!user && !doctor && !hospital) ? (
  <div className="flex items-center gap-2">
    <Link to="/login">
      <Button
        variant="outline"
        className="bg-[#FB4141] hover:bg-[#79f146]"
      >
        Login
      </Button>
    </Link>
    <Link to="/signup">
      <Button className="bg-[#79f146] hover:bg-[#FB4141]">
        Signup
      </Button>
    </Link>
  </div>
) : (
  <Popover>
    <PopoverTrigger asChild>
      <Avatar className="cursor-pointer">
        <AvatarImage
          src={user?.profilePhoto || doctor?.profilePhoto || hospital?.hospitalImage || "https://github.com/shadcn.png"}
          alt="Profile Photo"
        />
      </Avatar>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div>
        <div className="flex gap-4 space-y-2">
          <Avatar className="cursor-pointer">
            <AvatarImage
              src={user?.profilePhoto || doctor?.profilePhoto || hospital?.profilePhoto || "https://github.com/shadcn.png"}
              alt="Profile Photo"
            />
          </Avatar>
          <div>
            <h4>{user?.fullName || doctor?.fullName || hospital?.hospitalName ||"Guest"}</h4>
          </div>
        </div>
        <div className="flex flex-col my-2 text-gray-600">
          <div className="flex w-fit items-center gap-2 cursor-pointer">
            <User2 />
            <Button variant="link">
              <Link to={getProfileRoute()}>View Profile</Link>
            </Button>
          </div>
          <div className="flex w-fit items-center gap-2 cursor-pointer">
            <User2 />
            <Button variant="link" onClick={logoutHandler}>Logout</Button>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
)}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
