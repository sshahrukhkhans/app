import { useEffect, useRef, useState } from "react";
import "./process.css";
import processImage from "../../../assets/images/process.png";

const processStats = [
  {
    count: 1500,
    label: "Project Completed",
    type: "handshake",
  },
  {
    count: 45,
    label: "Prestigious Award",
    type: "award",
  },
];

const useCountUp = (target, startValue, shouldStart, duration = 1800) => {
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    if (!shouldStart) return;

    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(startValue + (target - startValue) * progress);
      setValue(current);

      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, startValue, shouldStart, duration]);

  return value;
};

const StatIcon = ({ type }) => {
  if (type === "award") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="none" stroke="#4a83e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="26" r="12" />
          <path d="M20 50l4-10m20 10-4-10M26 44l6 5 6-5" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke="#4a83e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 36l10-10 8 8 8-8 10 10" />
        <path d="M24 26l5-6h6l5 6" />
        <circle cx="32" cy="16" r="4" />
      </g>
    </svg>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const projectCount = useCountUp(1500, 1, startCount);
  const awardCount = useCountUp(45, 1, startCount);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionNode);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="process-section">
      <div className="container process-layout">
        <div className="process-stats" aria-label="Key achievements">
          {processStats.map((item, index) => (
            <article key={item.label} className="process-stat-card" style={{ "--delay": `${index * 140}ms` }}>
              <span className="process-stat-ribbon" aria-hidden="true" />
              <span className="process-stat-icon" aria-hidden="true">
                <StatIcon type={item.type} />
              </span>
              <strong>{item.count === 1500 ? projectCount : awardCount}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>

        <div className="process-image-wrap" aria-hidden="true">
          <img src={processImage} alt="" loading="lazy" />
        </div>

        <div className="process-content">
          <div className="process-kicker-wrap">
            <span className="process-kicker-line" />
            <span className="process-kicker">PROCESS</span>
          </div>

          <h2>
            Helping Ventures For
            <br />
            Being Successful
          </h2>

          <div className="process-points">
            <article className="process-point">
              <span className="process-point-icon" aria-hidden="true">
                ▣
              </span>
              <div>
                <h3>Project Analysis</h3>
                <p>A business firm is either the sole partnership owned by an individual.</p>
              </div>
            </article>

            <article className="process-point">
              <span className="process-point-icon" aria-hidden="true">
                ▦
              </span>
              <div>
                <h3>Decision &amp; Consultancy</h3>
                <p>Designing and implementing technology tools that they need to win.</p>
              </div>
            </article>
          </div>

          <a href="/" className="process-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
