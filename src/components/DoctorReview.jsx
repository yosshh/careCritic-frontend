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
import { setSingleDoctor } from "@/redux/doctorSlice";
import axios from "axios";
import { DOCTOR_API_END_POINT } from "@/constants";
import { toast } from "sonner";

const DoctorReview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { singleDoctor } = useSelector((store) => store.doctor);
  const { user } = useSelector((store) => store.auth);
  const params = useParams();
  const doctorId = params.id;
  console.log("Raw useParams output:", params); // 🔥 Check what useParams is returning
console.log("Raw doctorId from useParams:", params.id); 
console.log("Trimmed doctorId:", params.id?.trim());

  useEffect(() => {
    if (!user) {
      console.log("User not logged in, skipping API call.");
      return;
    }
  
    console.log("Raw doctorId from useParams:", doctorId); // 🔥 Log doctorId from URL params
  
    let cleanDoctorId = doctorId?.replace(/[^\da-f]/gi, ""); // ✅ Remove invalid characters
    console.log("Cleaned doctorId:", cleanDoctorId); // 🔥 Log cleaned doctorId
  
    if (!cleanDoctorId || cleanDoctorId.length !== 24) {
      console.error("Doctor ID is missing or invalid:", cleanDoctorId);
      toast.error("Invalid Doctor ID.");
      return;
    }
  
    const fetchSingleDoctor = async () => {
      try {
        dispatch(setSingleDoctor(null));
  
        const res = await axios.get(
          `${DOCTOR_API_END_POINT}/getDoctors/${cleanDoctorId}`,
          { withCredentials: true }
        );
  
        console.log("Fetched Doctor Data:", res.data.data); 
  
        if (res.data.success) {
          dispatch(setSingleDoctor(res.data.data));
        }
      } catch (error) {
        console.error("Error fetching doctor:", error);
        toast.error(error?.response?.data?.message || "Failed to load doctor details.");
      }
    };
  
    fetchSingleDoctor();
  }, [doctorId, dispatch, user]);
  
  

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
  {singleDoctor?.reviews?.length === 0 ? (
    <TableRow>
      <TableCell colSpan={4} className="text-center">
        No reviews yet.
      </TableCell>
    </TableRow>
  ) : (
    singleDoctor?.reviews?.map((review) => (
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
        onClick={() => navigate(`/doctors`)}
      >
        Back
      </Button>
    </div>
  );
};

export default DoctorReview;
