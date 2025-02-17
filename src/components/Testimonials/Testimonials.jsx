import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import   './Testimonials.scss';


// Import images
 import user1 from "../../assets/images/user1.jpeg"
 import user2 from "../../assets/images/user2.jpeg";
 import user3 from "../../assets/images/user3.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    review: "Great service! The electrician was on time and very professional.",
    image: user1,
  },
  {
    id: 2,
    name: "Amit Verma",
    review: "The cleaning service was amazing! My house is spotless now.",
   image: user2,
  },
  {
    id: 3,
    name: "Rani Singh",
    review: "Very satisfied with the plumbing work. Highly recommend!",
    image: user3,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row justify-content-center">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4 col-sm-6">
              <div className="testimonial-card text-center p-4">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-img mb-3" />
                <p className="testimonial-review">"{testimonial.review}"</p>
                <h5 className="testimonial-name">{testimonial.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
