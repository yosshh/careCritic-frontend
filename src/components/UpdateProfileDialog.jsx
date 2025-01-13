import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { USER_API_END_POINT } from '@/constants'
import axios from 'axios'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import PropTypes from 'prop-types'


const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
  
    const [input, setInput] = useState({
      fullName: user?.fullName || "",
      email: user?.email || "",
      contactNumber: user?.contactNumber || "",      
      userName: user?.userName || [], 
      file: user?.file || null, 
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
      formData.append("userName", input.userName);
      if (input.file) {
        formData.append("file", input.file);
      }
  
      try {
        setLoading(true);
        const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
  
        if (res.data.success) {
          dispatch(setUser(res.data.data));
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
                  <Label htmlFor="userName" className="text-right">
                    UserName
                  </Label>
                  <Input
                    id="userName"
                    name="userName"
                    type="text"
                    value={input.userName}
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
                  <Label htmlFor="file" className="text-right">
                    Profile Image
                  </Label>
                  <Input
                    id="file"
                    name="file"
                    type="file"
                    accept="application/pdf"
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

  UpdateProfileDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};
  
  export default UpdateProfileDialog;
  
