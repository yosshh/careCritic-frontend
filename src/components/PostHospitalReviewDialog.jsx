import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REVIEW_API_END_POINT,HOSPITAL_API_END_POINT } from '@/constants'
import axios from 'axios'
import { setSingleHospital } from '@/redux/hospitalSlice'
import { toast } from 'sonner'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";

const PostHospitalReviewDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const [hasReviewed, setHasReviewed] = useState(false);
    const { singleHospital, setAddReview } = useSelector((store) => store.hospital); 
    const { user } = useSelector((store) => store.auth);
    console.log(user,"user");
    
    const dispatch = useDispatch();
    const params = useParams();
    const hospitalId = params.id;
//     console.log("Doctor in Redux State:", singleDoctor);
// console.log("Single Doctor:", singleDoctor);
// console.log("Doctor ID:", singleDoctor?._id);


useEffect(() => {
  if (!user || !open) return; 

  const fetchSingleDoctor = async () => {
    try {
      dispatch(setSingleHospital(null)); 

      const res = await axios.get(
        `${HOSPITAL_API_END_POINT}/getHospital/${hospitalId}`,
        {
          headers: { Authorization: `Bearer ${user?.token}` },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setSingleHospital(res.data.data));

        const hasAlreadyReviewed = res.data.data.reviews?.some(
          (review) => String(review?.user?._id) === String(user?._id)
        );
        setHasReviewed(hasAlreadyReviewed);
      }
    } catch (error) {
      console.error("Error fetching doctor:", error);
    }
  };

  fetchSingleDoctor();

  return () => {
    setHasReviewed(false)};
}, [hospitalId, dispatch, user, open]); 

  
    const [input, setInput] = useState({
      rating:  "", 
      comments: "",
    });

    const changeEventHandler = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
  
    const submitHandler = async (e) => {
      e.preventDefault();
  
     
      if (!input.rating || input.rating < 1 || input.rating > 5) {
        toast.error("Rating must be between 1 and 5.");
        return;
      }
      if (!input.comment.trim()) {
        toast.error("Comment cannot be empty.");
        return;
      }
  
      const newReview = {
        user: user?._id,
        rating: input.rating,
        comment: input.comment,
        date: new Date(),
      };


      try {
        setLoading(true);
        const res = await axios.put(
          `${REVIEW_API_END_POINT}/hospital/${singleHospital?._id}`,
          newReview,
          {
            headers: { "Content-Type": "application/json" , }, 
            withCredentials: true,
          }
        );

       if (res.data.success) {
               dispatch(setAddReview(res.data.data)); 
       
               toast.success(res.data.message);
               setHasReviewed(true); 
               setInput({ rating: "", comment: "" });
               setOpen(false);
             }
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    // console.log(singleHospital);
    
  
    return (
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Post A Review</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rating" className="text-right">
                  Rating
                </Label>
                <Input
                  id="rating"
                  name="rating"
                  type="number"
                  min={1}
                  max={5}
                  value={input.rating}
                  onChange={changeEventHandler}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="comments" className="text-right">
                  Comments
                </Label>
                <Input
                  id="comments"
                  name="comments"
                  type="text"
                  value={input.comments}
                  onChange={changeEventHandler}
                  className="col-span-3"
                  required
                />
              </div>
            </div>
            <DialogFooter>
            <Button
              type="submit"
              className="w-full my-4"
              disabled={hasReviewed || loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting...
                </>
              ) : hasReviewed ? (
                "Already Reviewed"
              ) : (
                "Post"
              )}
            </Button>
          </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  };

  PostHospitalReviewDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
  };
  
  export default PostHospitalReviewDialog;
