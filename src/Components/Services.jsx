import React from "react";

const servicesData = [
  {
    title: "Architecture & Masterplanning",
    bgImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    overlayColor: "bg-[#314870]",
    textColor: "text-white",
  },
  {
    title: "Building Planning & Design",
    bgImage:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    overlayColor: "bg-[#11132c]",
    textColor: "text-[#eeb821]",
  },
  {
    title: "Interior Design",
    bgImage:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    overlayColor: "bg-[#b3cfe4]",
    textColor: "text-[#11132c]",
  },
  {
    title: "Landscape Design",
    bgImage:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    overlayColor: "bg-[#9b5c26]",
    textColor: "text-white",
  },
  {
    title: "MEP Engineering",
    bgImage:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    overlayColor: "bg-[#314870]",
    textColor: "text-[#efefef]",
  },
  {
    title: "Project Planning & Control",
    bgImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    overlayColor: "bg-[#bcc3d3]",
    textColor: "text-[#11132c]",
  },
];

const Services = () => {
  return (
    <section className="flex flex-col items-center py-16 bg-[#efefef]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#314870] mb-2 tracking-wide text-center">
        Our Services
      </h2>
      <p className="text-lg text-[#314870] mb-10 text-center">
        End-to-end solutions for homes and commercial projects
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl px-4 mb-10">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className={`relative h-72 flex items-center justify-center rounded-lg border-2 border-gray-300 bg-cover bg-center shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
            style={{ backgroundImage: `url(${service.bgImage})` }}
          >
            <div
              className={`absolute inset-0 ${service.overlayColor} opacity-60 rounded-lg`}
            ></div>
            <span
              className={`relative z-10 font-bold text-lg md:text-xl text-center ${service.textColor}`}
            >
              {service.title.split(" ").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="/services"
        className="inline-block mt-2 px-7 py-3 rounded-full shadow text-lg font-semibold bg-[#eeb821] text-[#11132c] hover:bg-[#314870] hover:text-[#eeb821] transition-all duration-200"
      >
        Discover More
      </a>
    </section>
  );
};

export default Services;
