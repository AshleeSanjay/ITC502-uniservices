import AuthCheck2 from "../../utils/AuthCheck2";

export default function Services() {

  return (
    <AuthCheck2>
    <div>
      <div className="frame md:grid">
        <div className="service-container md:grid">
          <div className="flex items-center justify-center text-center">
            <p className="text-3xl md:text-8xl services-text">Services</p>{" "}
          </div>
          <div
            className="bg-green-500 md:w-3/4 min-h-[240px] items-center justify-center border border-black"
            style={{
              backgroundColor: "rgb(130, 179, 121)",
              width: "100%",
              minHeight: "240px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
            }}
          >
            <p
              className="m-1 max-w-[60ch] text-2xl text-white text-center"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              "At Kyvingus University, we're dedicated to providing our members
              with a wide range of services to enhance their educational and
              personal journeys. Whether you're in need of convenient
              transportation to and from our campus, a quiet and inspiring space
              to study and collaborate, or professional guidance and counseling
              to support your well-being, we've got you covered."
            </p>
          </div>
        </div>
        <div>
          <img className="image" src="/services.jpg" alt="" />
        </div>
      </div>
      <main
        className="flex flex-col items-center justify-between p-32"
        style={{
          background: "linear-gradient(to bottom, rgb(49, 62, 60), #ffffff)",
        }}
      >
        <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <a
            href="#"
            style={{ backgroundColor: "rgb(196, 72, 54)" }}
            className="group relative rounded-lg border border-transparent px-0.5 py-0.5 transition-all hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark-bg-neutral-800/30 mr-7 transform scale-100 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
         
          >
            <div className="h-20 w-25">
              <div className="h-30 w-30 rounded-t-md bg-black p-5 transition-all">
                <h2 className="mb-50 text-5xl text-white font-semibold">
                  Book a Vehicle{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-5">
              <p className="m-8 max-w-[40ch] text-2xl text-white row-start-2">
                "Drive Your Success: Booking a Vehicle, Your Journey Starts
                Here"
              </p>
            </div>
          </a>

          <a
            href="#"
            style={{ backgroundColor: "rgb(196, 72, 54)" }}
            className="group relative rounded-lg border border-transparent px-0.5 py-0.5 transition-all hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark-bg-neutral-800/30 mr-7 transform scale-100 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"

          >
            <div className="h-20 w-25">
              <div className="h-30 w-30 rounded-t-md bg-black p-5 transition-all">
                <h2 className="mb-50 text-5xl text-white font-semibold">
                  Book a Classroom{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-5">
              <p className="m-8 max-w-[40ch] text-2xl text-white row-start-2">
                "Learning Begins Here: Classroom Booking, Your Path to
                Knowledge"
              </p>
            </div>
          </a>

          <a
            href="#"
            style={{ backgroundColor: "rgb(196, 72, 54)" }}
            className="group relative rounded-lg border border-transparent px-0.5 py-0.5 transition-all hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark-bg-neutral-800/30 mr-7 transform scale-100 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"

          >
            <div className="h-20 w-25">
              <div className="h-30 w-30 rounded-t-md bg-black p-5 transition-all">
                <h2 className="mb-50 text-5xl text-white font-semibold">
                  Book a Counselor{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-5">
              <p className="m-8 max-w-[40ch] text-2xl text-white row-start-2">
                "Guiding Your Way: Booking a Counselor, Your Support System"
              </p>
            </div>
          </a>
        </div>
      </main>
      <div
        className="gap-7 text-center items-center"
        style={{
          border: "1px solid black",
          width: "100%",
          backgroundColor: "rgb(130, 179, 121)",
          padding: "100px 100px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <p className="text-2xl text-white text-center">
          "Navigating Academic Success with Kyvingus University: Where Every
          Booking, Be it for a Vehicle, Classroom, or Counselor, Reflects Our
          Commitment to Your Journey of Excellence"
        </p>
      </div>
    </div>

    </AuthCheck2>
    
  );
}
