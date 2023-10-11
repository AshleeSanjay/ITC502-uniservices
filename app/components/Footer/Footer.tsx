export default function Footer() {
  return (
    <footer className="p-4 bg-black md:p-8 lg:p-10 text-white">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold"
        >
          <img className="logo" src="University.png" alt="" />
          Kyvingus University
        </a>
        <p className="my-6">
          "Empowering Minds, Shaping Futures: Your Path to Success at Kyvingus
          University"
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm">
          © 2023-2024{" "}
          <a href="#" className="hover:underline">
            Kyvingus University™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
