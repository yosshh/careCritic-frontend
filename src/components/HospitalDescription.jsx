import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Contact, Mail, Star } from "lucide-react";
import Navbar from "./shared/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HOSPITAL_API_END_POINT, APPOINTMENT_API_END_POINT } from "@/constants";
import { toast } from "sonner";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import { setSingleHospital } from "@/redux/hospitalSlice";
import { Button } from "./ui/button";
import PostHospitalReviewDialog from "./PostHospitalReviewDialog";

const HospitalDescription = () => {
  const dispatch = useDispatch();
  const { singleHospital } = useSelector((store) => store.hospital);
  const { user } = useSelector((store) => store.auth);
  const params = useParams();
  const hospitalId = params.id;

  const [isBooked, setIsBooked] = useState(false);
  const [date, setDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [reason, setReason] = useState("");
  const [open, setOpen] = useState(false);

  // Fetch the single doctor's details
  useEffect(() => {
    const fetchSingleHospital = async () => {
      try {
        const res = await axios.get(
          `${HOSPITAL_API_END_POINT}/getHospital/${hospitalId}`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setSingleHospital(res.data.data));
          const isAlreadyBooked = res.data.data.appointments?.some(
            (appointment) => appointment.user === user?._id
          );
          setIsBooked(isAlreadyBooked || false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleHospital();
  }, [hospitalId, dispatch, user?._id]);

  // Booking handler
  const bookAppointmentHandler = async () => {
    if (!date || !timeSlot || !reason) {
      toast.error("Please fill all fields before booking!");
      return;
    }

    const appointmentDetails = {
      date,
      timeSlot,
      reason,
    };

    try {
      const res = await axios.post(
        `${APPOINTMENT_API_END_POINT}/bookHospital/${hospitalId}`,
        appointmentDetails,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setIsBooked(true);
        const updatedSingleHospital = {
          ...singleHospital,
          appointments: [...singleHospital.appointments, { user: user?._id }],
        };
        dispatch(setSingleHospital(updatedSingleHospital));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Booking failed.");
    }
  };

  return (
    <div className="bg-[#8FD14F]">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-[#D84040] text-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={singleHospital?.hospitalImage} alt="profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{singleHospital?.hospitalName}</h1>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
           <Star />Post Review
          </Button>
        </div>

        {/* Doctor details */}
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{singleHospital?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{singleHospital?.contactNumber}</span>
          </div>

        </div>
        {/* Booking Details */}
        <div className="p-4 bg-[#FFF6DA] rounded-md23 z-20 ">
            <h4 className="text-lg font-semibold text-[#B82132] mb-4">
              Book Appointment
            </h4>

            {/* Date Picker */}
            <div className="mb-3">
              <label className="block text-sm mb-1 text-[#a01b2b72]">
                Select Date:
              </label>
              <DatePicker
                selected={date}
                onChange={(selectedDate) => setDate(selectedDate)}
                className="w-full p-2 rounded-md border bg-white text-gray-900"
                placeholderText="Pick a date"
                minDate={new Date()} // Prevent selecting past dates
              />
            </div>

            {/* Time Picker */}
            <div className="mb-3">
              <label className="block text-sm mb-1 text-[#a01b2b72]">
                Select Time:
              </label>
              <TimePicker
                value={timeSlot}
                onChange={(selectedTime) => setTimeSlot(selectedTime)}
                className="w-full p-2 rounded-md border bg-white text-gray-900"
                disableClock={true} // Removes the clock UI
              />
            </div>

            {/* Reason Input */}
            <div className="mb-3">
              <label className="block text-sm mb-1 text-[#a01b2b72]">
                Reason for Appointment:
              </label>
              <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-2 rounded-md border bg-white text-gray-900"
                placeholder="Enter a reason"
              />
            </div>

            <button
              onClick={bookAppointmentHandler}
              disabled={isBooked}
              className={`w-full p-2 text-white rounded-md ${
                isBooked ? "bg-gray-600 cursor-not-allowed" : "bg-[#FFA09B]"
              }`}
            >
              {isBooked ? "Already Booked" : "Book Appointment"}
            </button>
          </div>
      </div>
      <PostHospitalReviewDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default HospitalDescription;
