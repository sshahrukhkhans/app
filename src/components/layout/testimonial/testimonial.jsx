import "./testimonial.css";
import profileImage from "../../../assets/images/profile.jpg";

const testimonials = [
  {
    quote:
      "Its an amazing experience for us to workwith you. We are hoping to work again & again in near future",
    name: "Oscar Bingham",
    place: "Los Angeles",
  },
  {
    quote:
      "We are So Happy That We have chosen Bizgrowth for our A1 project. They are just amazing",
    name: "Miranda Stocklin",
    place: "New York",
  },
];

const partnerLogos = [


  { name: "XARION", tag: "BUSINESS FIRM" },
  { name: "Busineratec", tag: "BUSINESS FIRM" },
  { name: "BradeNer's", tag: "CONSULTATION" },
  { name: "Investapp", tag: "APPLICATION" },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="container testimonial-wrap">
        <div className="testimonial-top">
          <header className="testimonial-header">
            <div className="testimonial-kicker-wrap">
              <span className="testimonial-kicker-line" />
              <span className="testimonial-kicker">TESTIMONIAL</span>
            </div>
            <h2>Our Happy Customers</h2>
            <p>
              Our main goal is to provide best services to our customers & to
              help them grow.
            </p>
          </header>

          <div className="testimonial-cards-wrap">
            <div className="testimonial-cards">
              {testimonials.map((item) => (
                <div key={item.name} className="testimonial-item">
                  <article className="testimonial-card">
                    <div className="testimonial-stars">★★★★★</div>
                    <span className="testimonial-quote-mark">❞</span>
                    <p>{item.quote}</p>
                    <span className="testimonial-tail" aria-hidden="true" />
                  </article>
                  <div className="testimonial-person">
                    <img className="testimonial-avatar" src={profileImage} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <span>{item.place}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial-dots" aria-hidden="true">
              <span className="is-active" />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="testimonial-logos">
          {partnerLogos.map((item) => (
            <div key={item.name} className="testimonial-logo-item">
              <strong>{item.name}</strong>
              <span>{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
