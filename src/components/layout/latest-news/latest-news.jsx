import { useEffect, useState } from "react";
import "./latest-news.css";
import project01 from "../../../assets/images/project-01.jpg";
import project02 from "../../../assets/images/project-02.jpg";
import project03 from "../../../assets/images/project-03.jpg";
import project04 from "../../../assets/images/project-04.jpg";

const newsItems = [
  {
    image: project01,
    date: "MARCH 11, 2023",
    title: "How consultation in business is affecting new ventures",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled...",
  },
  {
    image: project02,
    date: "MARCH 11, 2023",
    title: "Challanges of consulting new Business Firms",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled...",
  },
  {
    image: project03,
    date: "MARCH 11, 2023",
    title: "Revitalising your people in to a retail downturn",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled...",
  },
  {
    image: project04,
    date: "MARCH 11, 2023",
    title: "Smart audit planning for high-growth service teams",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled...",
  },
  {
    image: project01,
    date: "APRIL 02, 2023",
    title: "Why risk-focused reviews improve financial confidence",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled...",
  },
  {
    image: project02,
    date: "APRIL 18, 2023",
    title: "Operational checks that reduce audit cycle delays",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled...",
  },
  {
    image: project03,
    date: "MAY 05, 2023",
    title: "Building scalable review workflows for growing teams",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled...",
  },
  {
    image: project04,
    date: "MAY 21, 2023",
    title: "Better documentation habits for stronger engagements",
    excerpt: "We denounce with righteous indignation and dislike men who are so beguiled...",
  },
];

const LatestNewsSection = () => {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const maxStart = Math.max(0, newsItems.length - visibleCount);

  useEffect(() => {
    const updateVisible = () => {
      const nextVisible =
        window.innerWidth <= 780 ? 1 : window.innerWidth <= 1200 ? 2 : 4;
      setVisibleCount(nextVisible);
      setStart((prev) =>
        Math.min(prev, Math.max(0, newsItems.length - nextVisible)),
      );
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    if (maxStart <= 0) return;

    const timer = setInterval(() => {
      setStart((prev) => (prev >= maxStart ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [maxStart]);

  const handlePrev = () => setStart((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setStart((prev) => Math.min(prev + 1, maxStart));

  return (
    <section className="latest-news-section">
      <div className="container latest-news-wrap">
        <header className="latest-news-header">
          <div className="latest-news-kicker-wrap">
            <span className="latest-news-kicker-line" />
            <span className="latest-news-kicker">LATEST NEWS</span>
          </div>
          <h2>
            Read Our Latest <span>News</span>
          </h2>
          <p>
            As a business firm our main goal is to provide best services to our
            customers & create best ideas to help grow our clients.
          </p>
        </header>

        <div className="latest-news-slider">
          <button
            type="button"
            className="latest-news-arrow"
            onClick={handlePrev}
            aria-label="Previous news"
            disabled={start === 0}
          >
            ‹
          </button>

          <div className="latest-news-viewport">
            <div
              className="latest-news-grid"
              style={{
                "--visible-count": visibleCount,
                transform: `translateX(-${(start * 100) / visibleCount}%)`,
              }}
            >
              {newsItems.map((item) => (
                <article className="latest-news-card" key={item.title}>
                  <div className="latest-news-image-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="latest-news-date">{item.date}</span>
                  </div>

                  <div className="latest-news-body">
                    <h4>{item.title}</h4>
                    <p>{item.excerpt}</p>
                    <a href="/">READ ARTICLE +</a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="latest-news-arrow"
            onClick={handleNext}
            aria-label="Next news"
            disabled={start >= maxStart}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
