import { useSelector } from "react-redux";
// import { Badge } from './ui/badge'
import { useNavigate } from "react-router-dom";
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

const DoctorReview = () => {
  const navigate = useNavigate();
  const { singleDoctor } = useSelector((store) => store.doctor);
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
          {singleDoctor?.reviews?.length == 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No reviews yet.
              </TableCell>
            </TableRow>
          ) : (
            singleDoctor?.reviews?.map((review) => (
              <TableRow key={review?._id}>
                <TableCell>
                  {new Date(review?.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {review?.user?.fullName || "Unknown User"}
                </TableCell>
                <TableCell>
                  {Array.from({ length: review?.rating }, (_, index) => (
                    <span key={index}>⭐</span>
                  ))}
                </TableCell>

                <TableCell>{review?.comment}</TableCell>
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
