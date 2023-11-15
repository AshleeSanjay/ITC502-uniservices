import React from "react";
import AuthCheck2 from "@/utils/AuthCheck2";
import BookingFormDynamic from "@/components/Forms/BookingFormDynamic";


export default function Services() {
  return (
    <AuthCheck2>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md ">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Counsellor Bookings
          </h1>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Book now
            </p>
        </div>
        </div>
      <BookingFormDynamic predefinedBookingType={"counselor"} />
    </AuthCheck2>
  );
}
