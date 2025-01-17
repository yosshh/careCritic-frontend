import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DOCTOR_API_END_POINT } from '@/constants'
import axios from 'axios'
import { setDoctor } from '@/redux/authSlice'
import { toast } from 'sonner'
import PropTypes from 'prop-types'


const UpdateDoctorProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { doctor } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
  
    const [input, setInput] = useState({
      fullName: doctor?.fullName || "",
      email: doctor?.email || "",
      contactNumber: doctor?.contactNumber || "",      
      userName: doctor?.userName || [], 
      file: doctor?.file || null, 
    });
 
    
  
    const changeEventHandler = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
  
    const fileChangeHandler = (e) => {
      const file = e.target.files?.[0];
      setInput({ ...input, file });
    };
  
    const submitHandler = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("fullName", input.fullName);
      formData.append("email", input.email);
      formData.append("contactNumber", input.contactNumber);
      formData.append("qualification", input.qualification);
      formData.append("experienceInYears", input.experienceInYears);
      if (input.file) {
        formData.append("file", input.file);
      }
      console.log("file", input.file);
      
  
      try {
        setLoading(true);
        const res = await axios.post(`${DOCTOR_API_END_POINT}/profile/update`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
  
        if (res.data.success) {
          dispatch(setDoctor(res.data.data));
          console.log("Doctor state after update:", doctor);
          toast.success(res.data.message);
          setOpen(false); // Close dialog only on success
        }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div>
        <Dialog open={open}>
          <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
            <DialogHeader>
              <DialogTitle>Update Profile</DialogTitle>
            </DialogHeader>
            <form onSubmit={submitHandler}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="fullName" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={input.fullName}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={input.email}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="contactNumber" className="text-right">
                    Number
                  </Label>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    value={input.contactNumber}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="experienceInYears" className="text-right">
                    Experience
                  </Label>
                  <Input
                    id="experienceInYears"
                    name="experienceInYears"
                    type="number"
                    value={input.experienceInYears}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="qualification" className="text-right">
                    Qualification
                  </Label>
                  <Input
                    id="qualification"
                    name="qualification"
                    type="text"
                    value={input.qualification}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="file" className="text-right">
                    Profile Image
                  </Label>
                  <Input
                    id="file"
                    name="file"
                    type="file"
                    accept="image/*"
                    onChange={fileChangeHandler}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                {loading ? (
                  <Button className="w-full my-4">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                  </Button>
                ) : (
                  <Button type="submit" className="w-full my-4">
                    Update
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  UpdateDoctorProfileDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};
  
  export default UpdateDoctorProfileDialog;
  
