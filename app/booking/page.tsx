import AuthCheck2 from "../../utils/AuthCheck2";
import BookingForm from "../../components/Forms/BookingForm";
import UserBookings from "@/components/User/UserBookings";

export default function Services() {

  return (
    <AuthCheck2>

    <BookingForm />
    {/* <BookingsTable/> */}
    <UserBookings />
    </AuthCheck2>
  );
}
