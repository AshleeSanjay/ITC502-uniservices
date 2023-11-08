import AuthCheck2 from "../../utils/AuthCheck2";
import BookingForm from "../../components/Forms/BookingForm";
import BookingsTable from "@/components/Forms/BookingTable";



export default function Services() {

  return (
    <AuthCheck2>

    <BookingForm />
    <BookingsTable/>

    </AuthCheck2>
  );
}
