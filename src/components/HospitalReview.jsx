import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const HospitalReview = () => {
  const navigate = useNavigate();
  const { singleHospital } = useSelector((store) => store.hospital);

  return (
    <div>
      <Table>
        <TableCaption>A list of hospital reviews</TableCaption>
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
                <TableCell>{review?.rating} ⭐</TableCell>
                <TableCell>{review?.comment}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Button className="bg-[#69247C] hover:bg-[#b664cc] text-white mx-5" onClick={() => navigate(`/hospital`)}>
        Back
      </Button>
    </div>
  );
};

export default HospitalReview;
