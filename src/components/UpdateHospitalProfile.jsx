import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HOSPITAL_API_END_POINT } from '@/constants'
import axios from 'axios'
import { setHospital } from '@/redux/authSlice'
import { toast } from 'sonner'
import PropTypes from 'prop-types'


const UpdateHospitalProfile = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { hospital } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
  
    const [input, setInput] = useState({
      hospitalName: hospital?.hospitalName || "",
      email: hospital?.email || "",
      contactNumber: hospital?.contactNumber || "", 
      specializedIn: hospital?.specializedIn || "", 
      address: hospital?.address || "",    
      file: hospital?.file || null, 
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
      formData.append("hospitalName", input.hospitalName);
      formData.append("email", input.email);
      formData.append("contactNumber", input.contactNumber);
      formData.append("qualification", input.specializedIn);
      formData.append("address", input.address);
      if (input.file) {
        formData.append("file", input.file);
      }
      console.log("file", input.file);
      
  
      try {
        setLoading(true);
        const res = await axios.post(`${HOSPITAL_API_END_POINT}/update`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
  
        if (res.data.success) {
          dispatch(setHospital(res.data.data));
          console.log("Hospital state after update:", hospital);
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
                  <Label htmlFor="hospitalName" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="hospitalName"
                    name="hospitalName"
                    type="text"
                    value={input.hospitalName}
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
                  <Label htmlFor="specializedIn" className="text-right">
                  specialisation
                  </Label>
                  <Input
                    id=""
                    name="specializedIn"
                    type="text"
                    value={input.specializedIn}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="address" className="text-right">
                  Address
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    value={input.address}
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

  UpdateHospitalProfile.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};
  
  export default UpdateHospitalProfile;
  
