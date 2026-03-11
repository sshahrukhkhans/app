import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./latest-news.css";
import { latestNewsCards } from "../../../data/news-articles";

const LatestNewsSection = () => {
  const newsItems = latestNewsCards;
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
                <article className="latest-news-card" key={item.slug}>
                  <div className="latest-news-image-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="latest-news-date">{item.date}</span>
                  </div>

                  <div className="latest-news-body">
                    <h4>{item.title}</h4>
                    <p>{item.excerpt}</p>
                    <Link to={`/news/${item.slug}`}>READ ARTICLE +</Link>
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
