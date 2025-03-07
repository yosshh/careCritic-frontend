import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useEffect } from "react";
import { setSingleHospital } from "@/redux/hospitalSlice";
import axios from "axios";
import { HOSPITAL_API_END_POINT } from "@/constants";
import { toast } from "sonner";

const HospitalReview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { singleHospital } = useSelector((store) => store.hospital);
  const { user } = useSelector((store) => store.auth);
  const params = useParams();
  const hospitalId = params.id;
  console.log("Raw useParams output:", params); // 
console.log("Raw hospitalId from useParams:", params.id); 
console.log("Trimmed hospitalId:", params.id?.trim());

  useEffect(() => {
    if (!user) {
      console.log("User not logged in, skipping API call.");
      return;
    }
  
    console.log("Raw hospitalId from useParams:", hospitalId); 
  
    const fetchSingleHospital = async () => {
      try {
        dispatch(setSingleHospital(null));
  
        const res = await axios.get(
          `${HOSPITAL_API_END_POINT}/getHospital/${hospitalId}`,
          { withCredentials: true }
        );
  
        console.log("Fetched Hospital Data:", res.data.data); 
  
        if (res.data.success) {
          dispatch(setSingleHospital(res.data.data));
        }
      } catch (error) {
        console.error("Error fetching hospital:", error);
        toast.error(error?.response?.data?.message || "Failed to load hospital details.");
      }
    };
  
    fetchSingleHospital();
  }, [hospitalId, dispatch, user]);
  
  

  return (
    <div>
      <Table>
        <TableCaption>A list of doctor reviews</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Ratings</TableHead>
            <TableHead>Comments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
  {singleHospital?.reviews?.length === 0 ? (
    <TableRow>
      <TableCell colSpan={4} className="text-center">
        No reviews yet.
      </TableCell>
    </TableRow>
  ) : (
    singleHospital?.reviews?.map((review) => (
      <TableRow key={review?._id}>
        <TableCell>{new Date(review?.date).toLocaleDateString()}</TableCell>
        <TableCell>{review?.user?.fullName || "Unknown User"}</TableCell>
        <TableCell>
          {Array.from({ length: review?.rating || 0 }, (_, index) => (
            <span key={index}>⭐</span>
          ))}
        </TableCell>
        <TableCell>{review?.comment || "No comment provided."}</TableCell>
      </TableRow>
    ))
  )}
</TableBody>
      </Table>
      <Button
        className="bg-[#69247C] hover:bg-[#b664cc] text-white mx-5"
        onClick={() => navigate(`/hospital`)}
      >
        Back
      </Button>
    </div>
  );
};

export default HospitalReview;
