import React from "react";

const testimonials = [
  {
    text: "Working with Klick India Corporation was a seamless experience. They understood our vision from the start and turned our ideas into a home that’s both functional and beautiful. Every detail reflects thoughtfulness and quality – we couldn’t be happier!",
    author: "Mr. & Mrs. Sharma",
    location: "New Delhi",
  },
  {
    text: "Klick India Corporation handled our factory project with incredible precision. Their team balanced operational requirements with efficient design, making the workflow smoother and the space highly functional. The project was delivered on time and within budget.",
    author: "Mr. Rajiv Malhotra",
    location: "Industrial Owner, Pune",
  },
  {
    text: "Our new office space designed by Klick India Corporation has transformed the way we work. The layout is practical, the interiors are inspiring, and every corner reflects professionalism and creativity. It’s a space our employees genuinely love.",
    author: "Ms. Priya Khanna",
    location: "Business Owner, Bangalore",
  },
];

const Testimonials = () => {
  return (
    <section style={{ backgroundColor: "#ffffff", color: "#31487a", padding: "5rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#11132c",
          }}
        >
          Client Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f8f9fa", // light gray for subtle contrast
                borderRadius: "16px",
                padding: "2rem",
                textAlign: "left",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                border: "1px solid #e0e0e0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  color: "#31487a",
                }}
              >
                “{t.text}”
              </p>
              <div
                style={{
                  fontWeight: "600",
                  color: "#000000",
                }}
              >
                — {t.author},{" "}
                <br />
                <span style={{ fontWeight: "400", color: "#31487a" }}>{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
