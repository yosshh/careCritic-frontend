import { useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/constants";
import { DOCTOR_API_END_POINT } from "@/constants";
import { HOSPITAL_API_END_POINT } from "@/constants";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
const { loading } = useSelector(store=>store.auth)
  const [step, setStep] = useState(1);
  const [input, setInput] = useState({
    fullName: "",
    name: "",
    contactNumber: "",
    qualification: [],
    experienceInYears: "",
    worksIn: "",
    address: "",
    specializedIn: [],
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    specialty: "",
    hospitalName: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    
    const formData = new FormData(); //formdata object
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("experienceInYears", input.experienceInYears);
    formData.append("contactNumber", input.contactNumber);
    formData.append("qualification", input.qualification);
    formData.append("password", input.password);
    formData.append("userName", input.userName);
    formData.append("address", input.address);
    formData.append("specializedIn", input.specializedIn.join(","));
    formData.append("hospitalName", input.hospitalName);
    formData.append("specialty", input.specialty);
    formData.append("role", input.role);
    console.log("input",input);


    if (input.file) {
      formData.append("file", input.file);
      console.log("Appended file:", input.file);
    }
    // formData.append("specializedIn", JSON.stringify(input.specializedIn));

    formData.forEach((value, key) => {
      console.log(key + ": " + value);
    });

    let endpoint = USER_API_END_POINT;
  
  if (input.role === "Doctor") {
    endpoint = DOCTOR_API_END_POINT;
  } else if (input.role === "Hospital") {
    endpoint = HOSPITAL_API_END_POINT;
  }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${endpoint}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-[#CCF5AC] rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">SignUp</h1>
          {step === 1 && (
            <div>
              <Label>Select Role</Label>
              <RadioGroup className="flex items-center gap-4 my-5 justify-center text-[#FB4141]">
                {["User", "Doctor", "Hospital"].map((role) => (
                  <div key={role} className="flex items-center space-x-2">
                    <Input
                      type="radio"
                      name="role"
                      value={role}
                      checked={input.role === role}
                      onChange={changeEventHandler}
                      className="cursor-pointer"
                    />
                    <Label className="text-xl hover:text-[#d96565]">
                      {role}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 2 && input.role === "User" && (
            <div>
              <div>
                <Label>UserName</Label>
                <Input
                  type="text"
                  name="userName"
                  placeholder="UserName"
                  value={input.userName}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Full Name</Label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={input.fullName}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Contact Number</Label>
                <Input
                  type="text"
                  name="contactNumber"
                  placeholder="contact Number"
                  value={input.contactNumber}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="flex items-center gap-2 my-4">
                <Label>Profile Photo</Label>
                <Input
                  accept="image/*"
                  name="file"
                  type="file"
                  className="cursor-pointer"
                  onChange={changeFileHandler}
                />
              </div>
            </div>
          )}

          {step === 2 && input.role === "Doctor" && (
            <div>
              <Label>Name</Label>
              <Input
                type="text"
                name="fullName"
                placeholder="fullName"
                value={input.fullName}
                onChange={changeEventHandler}
              />
              <div>
                <Label>Contact Number</Label>
                <Input
                  type="text"
                  name="contactNumber"
                  placeholder="98XXXXXXX"
                  value={input.contactNumber}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="doctor@gmail.com"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Specialty</Label>
                <Input
                  type="text"
                  name="specialty"
                  placeholder="Specialty"
                  value={input.specialty}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Qualification</Label>
                <Input
                  type="text"
                  name="qualification"
                  placeholder="MBBS, etc"
                  value={input.qualification}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Experience</Label>
                <Input
                  type="text"
                  name="experienceInYears"
                  placeholder="experience"
                  value={input.experienceInYears}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="flex items-center gap-2 my-4">
                <Label>Profile Photo</Label>
                <Input
                  accept="image/*"
                  name="file"
                  type="file"
                  className="cursor-pointer"
                  onChange={changeFileHandler}
                />
              </div>
            </div>
          )}

          {step === 2 && input.role === "Hospital" && (
            <div>
              <div>
                <Label>Hospital Name</Label>
                <Input
                  type="text"
                  name="hospitalName"
                  placeholder="Hospital Name"
                  value={input.hospitalName}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Address</Label>
                <Input
                  type="text"
                  name="address"
                  placeholder="address"
                  value={input.address}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Contact Number</Label>
                <Input
                  type="text"
                  name="contactNumber"
                  placeholder="98XXXXXX"
                  value={input.contactNumber}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="doctor@gmail.com"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Specialises In</Label>
                <Input
                  name="specializedIn"
                  placeholder="Cardio, Neuro,...."
                  value={input.specializedIn.join(",")}
                  onChange={(e) =>
                      setInput({ ...input, specializedIn: e.target.value.split(",") })
                    }
                    className="col-span-3"
                />
              </div>
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="flex items-center gap-2 my-4">
                <Label>Hospital image</Label>
                <Input
                  accept="image/*"
                  name="file"
                  type="file"
                  className="cursor-pointer"
                  onChange={changeFileHandler}
                />
              </div>
            </div>
          )}

          <div className="flex justify-between mt-5">
            {step > 1 && (
              <Button
                onClick={prevStep}
                type="button"
                className="bg-[#DF6D2D] hover:bg-[#9e5932]"
              >
                Back
              </Button>
            )}
            <span className="text-sm">Already have an account? <Link to="/login" className="text-[#F14A00]">Login</Link></span>
            {step < 2 && (
              <Button
                onClick={nextStep}
                type="button"
                className="bg-[#DF6D2D] hover:bg-[#9e5932]"
              >
                Next
              </Button>
            )}
            {step === 2 && (
              
              <Button type="submit" className="w-full my-4 bg-[#DF6D2D] hover:bg-[#9e5932]">
                {loading ? (
                  <Loader2 className="animate-spin mr-2" />
                ) : (
                  "Register"
                )}
              </Button>
            
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
