import React from "react";
import Link from "next/link";
import AuthCheck2 from "@/utils/AuthCheck2";
import BookingFormDynamic from "@/components/Forms/BookingFormDynamic";


export default function Services() {
  return (
    <AuthCheck2>
      <BookingFormDynamic predefinedBookingType={"room"} />
    </AuthCheck2>
  );
}
