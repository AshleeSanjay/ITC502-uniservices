import AuthCheck2 from "../../utils/AuthCheck2";
import BookingForm from "../../components/Forms/BookingForm";
import TripReport from "./TripReport";

export default function Services() {

  return (
    <AuthCheck2>

    <BookingForm />

    </AuthCheck2>
  );
}
