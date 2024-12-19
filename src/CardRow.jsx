import {
  FaUniversity,
  FaCertificate,
  FaUserGraduate,
  FaLaptop,
} from "react-icons/fa";

const CardRow = () => {
  const cards = [
    {
      title: "Card 1",
      content: (
        <>
          <p>Affordable MBA pursuit at D.Y.Patil Vidyapeeth</p>
          <small className="text-sm text-gray-500 mt-2 block">
            UGC Recognized & NAAC AICTE, ASSOCHAM, AIU & WES accredited
          </small>
        </>
      ),
      icon: <FaUniversity className="text-violet-900 mx-auto text-6xl" />,
    },
    {
      title: "Card 2",
      content: "Corporate industry recognised 15+ code finance certifications",
      icon: <FaCertificate className="text-violet-900 mx-auto text-6xl" />,
    },
    {
      title: "Card 3",
      content:
        "Obtain 1-year job in finance recognized by FINXL BUSINESS SCHOOL",
      icon: <FaUserGraduate className="text-violet-900 mx-auto text-6xl" />,
    },
    {
      title: "Card 4",
      content: "Transforming Students Into Business Management Professionals",
      icon: <FaLaptop className="text-violet-900 mx-auto text-6xl" />,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mt-12 mb-16">
        <div className="w-40 h-1 bg-orange-500 mb-2"></div>
        <h1 className="text-3xl font-bold text-orange-500 text-left">
          Pursue a Practical MBA
        </h1>
      </div>

      <div className="flex justify-center mb-16">
        <div className="flex items-center justify-center bg-violet-900 rounded-lg px-8 py-4 max-w-full w-8/12 relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <img
              src="https://pngimg.com/d/pin_PNG14.png"
              alt="Realistic Pin"
              className="w-20 h-12 transform -rotate-60 relative bottom-5 right-2"
            />
          </div>
          <h2 className="text-white text-base font-semibold text-center text-lg">
            A career that fulfills you and makes a difference is possible with
            us
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out bg-white h-auto min-h-72 md:h-72 flex flex-col justify-between"
          >
            <div className="text-center flex flex-col h-full">
              <div className="mb-6 mt-6">{card.icon}</div>
              <p className="text-gray-600 font-bold px-2">{card.content}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-32 bg-gradient-to-r from-violet-900 to-red-300 text-white py-6 max-w-full ">
        <div className="text-center mt-4">
          <p className="font-bold text-3xl ">Created by Nikhil Chavan</p>
          <p className="mt-8">
            Email:{" "}
            <a
              href="mailto:nikhilchaven4003@gmail.com"
              className="underline hover:text-purple-900"
            >
              nikhilchavan4003@gmail.com
            </a>
          </p>
          <p className="mt-2">
            GitHub:{" "}
            <a
              href="https://github.com/nikhilchavan2004"
              className="underline hover:text-violet-900"
            >
              github.com/nikhilchavan2004
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CardRow;
