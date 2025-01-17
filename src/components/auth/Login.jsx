import { useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/constants";
import { DOCTOR_API_END_POINT } from "@/constants";
import { HOSPITAL_API_END_POINT } from "@/constants";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux"
import { setLoading, setUser, setDoctor } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading } = useSelector(store=>store.auth)
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
  
    let endpoint = USER_API_END_POINT;
    
    if (input.role === "Doctor") {
      endpoint = DOCTOR_API_END_POINT;
    } else if (input.role === "Hospital") {
      endpoint = HOSPITAL_API_END_POINT;
    }
  
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${endpoint}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(res);
      if (res.data.success) {
        console.log("User Data:", res.data.data);
        if (input.role === "Doctor") {
          dispatch(setDoctor(res.data.data));
          navigate("/doctorProfile");
        } else if (input.role === "Hospital") {
          // dispatch(setHospital(res.data.data));
          navigate("/hospital/profile");
        } else {
          dispatch(setUser(res.data.data));
          navigate("/userProfile");
        }
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-[#CCF5AC] rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="email"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="password"
              value={input.password}
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between text-[#FB4141]">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2 hover:text-[#b43737]">
                <Input
                  type="radio"
                  name="role"
                  value="User"
                  checked={input.role === "User"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">User</Label>
              </div>
              <div className="flex items-center space-x-2 hover:text-[#b43737]">
                <Input
                  type="radio"
                  name="role"
                  value="Doctor"
                  checked={input.role === "Doctor"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Doctor</Label>
              </div>
              <div className="flex items-center space-x-2 hover:text-[#b43737]">
                <Input
                  type="radio"
                  name="role"
                  value="Hospital"
                  checked={input.role === "Hospital"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Hospital</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="bg-[#DF6D2D] w-full my-4 hover:bg-[#9e5932]">
              {" "}
              <Loader2 className="mr-2 bg-[#DF6D2D] h-4 w-4 animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4 bg-[#DF6D2D] hover:bg-[#9e5932]">
              Login
            </Button>
          )}
          <span className="text-sm mx-12">
            Dont have an account?{" "}
            <Link to="/signup" className="text-[#F14A00]">
              SignUp
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
