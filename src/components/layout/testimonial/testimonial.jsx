import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  {
    quote:
      "Professional communication, consistent delivery, and excellent quality made every review cycle smooth for our team.",
    name: "Rayan Kellar",
    place: "Chicago",
  },
];

const partnerLogos = [


  { name: "XARION", tag: "BUSINESS FIRM" },
  { name: "Busineratec", tag: "BUSINESS FIRM" },
  { name: "BradeNer's", tag: "CONSULTATION" },
  { name: "Investapp", tag: "APPLICATION" },
];

gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const isAnimatingRef = useRef(false);

  const visibleTestimonials = useMemo(
    () =>
      Array.from({ length: cardsPerView }, (_, offset) => {
        const index = (startIndex + offset) % testimonials.length;
        return testimonials[index];
      }),
    [cardsPerView, startIndex]
  );

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return undefined;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 84%",
        once: true,
      },
    });

    tl.fromTo(
      header,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.72, ease: "power2.out" }
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const cardsWrap = cardsRef.current;
    if (!cardsWrap) return undefined;

    const cards = cardsWrap.querySelectorAll(".testimonial-item");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 0.62, ease: "power2.out", stagger: 0.12, clearProps: "opacity,transform" }
    );

    const intervalId = window.setInterval(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const outgoingCards = cardsWrap.querySelectorAll(".testimonial-item");
      const nextIndex = (startIndex + 1) % testimonials.length;

      const changeTl = gsap.timeline({
        onComplete: () => {
          setStartIndex(nextIndex);
          isAnimatingRef.current = false;
        },
      });

      changeTl
        .to(
          outgoingCards,
          {
            opacity: 0,
            y: -28,
            duration: 0.36,
            ease: "power2.in",
            stagger: 0.08,
          },
          0
        );
    }, 4200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [startIndex]);

  return (
    <section className="testimonial-section" ref={sectionRef}>
      <div className="container testimonial-wrap">
        <div className="testimonial-top">
          <header className="testimonial-header" ref={headerRef}>
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
            <div
              className="testimonial-cards"
              ref={cardsRef}
              style={{ "--testimonial-visible": cardsPerView }}
            >
              {visibleTestimonials.map((item) => (
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
              {testimonials.map((item, index) => (
                <span key={item.name} className={index === startIndex ? "is-active" : ""} />
              ))}
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
