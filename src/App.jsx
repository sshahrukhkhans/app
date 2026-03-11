import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/layout/header/header";
import CaseStudiesSection from "./components/layout/case-studies/case-studies";
import WhyChooseUsSection from "./components/layout/why-choose-us/why-choose-us";
import InvestCtaSection from "./components/layout/invest-cta/invest-cta";
import ProcessSection from "./components/layout/process/process";
import TestimonialSection from "./components/layout/testimonial/testimonial";
import LatestNewsSection from "./components/layout/latest-news/latest-news";
import SiteFooterSection from "./components/layout/site-footer/site-footer";
import ServicePage from "./pages/service-page";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";

gsap.registerPlugin(ScrollTrigger);
 
function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fade-in");
  const [showBootLoader, setShowBootLoader] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fade-out");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    let timerId;
    const hideLoader = () => {
      timerId = window.setTimeout(() => {
        setShowBootLoader(false);
      }, 550);
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader, { once: true });
    }

    return () => {
      if (timerId) window.clearTimeout(timerId);
      window.removeEventListener("load", hideLoader);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1,
    });

    lenisRef.current = lenis;
    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    let frameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      if (typeof lenis.off === "function") {
        lenis.off("scroll", onLenisScroll);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const sections = document.querySelectorAll(".app-sections > *");

    if (displayLocation.pathname !== "/") {
      sections.forEach((section) => {
        section.classList.remove("scroll-section", "is-visible");
        section.style.removeProperty("--reveal-delay");
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section, index) => {
      section.classList.add("scroll-section");
      section.classList.remove("is-visible");
      section.style.setProperty("--reveal-delay", `${index * 40}ms`);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [displayLocation.pathname]);

  useEffect(() => {
    if (displayLocation.pathname !== "/") return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallViewport = window.matchMedia("(max-width: 768px)").matches;
    if (prefersReducedMotion || isSmallViewport) return undefined;

    const hoverCleanup = [];
    const ctx = gsap.context(() => {
      const buildToVars = (fromVars) => {
        const toVars = {};
        Object.keys(fromVars).forEach((key) => {
          if (key === "opacity") {
            toVars[key] = 1;
          } else if (key === "scale") {
            toVars[key] = 1;
          } else {
            toVars[key] = 0;
          }
        });
        return toVars;
      };

      const reveal = (target, fromVars, trigger, start = "top 82%") => {
        if (!document.querySelector(target)) return;
        gsap.fromTo(
          target,
          fromVars,
          {
            ...buildToVars(fromVars),
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto",
            scrollTrigger: {
              trigger,
              start,
              once: true,
            },
          }
        );
      };

      const staggerReveal = (target, fromVars, trigger, stagger = 0.12, start = "top 82%") => {
        if (!document.querySelector(target)) return;
        gsap.fromTo(
          target,
          fromVars,
          {
            ...buildToVars(fromVars),
            duration: 0.72,
            ease: "power2.out",
            stagger,
            overwrite: "auto",
            scrollTrigger: {
              trigger,
              start,
              once: true,
            },
          }
        );
      };

      const addHoverLift = (target) => {
        const nodes = gsap.utils.toArray(target);
        const cleanups = [];
        nodes.forEach((node) => {
          const enter = () => gsap.to(node, { y: -8, duration: 0.24, ease: "power2.out" });
          const leave = () => gsap.to(node, { y: 0, duration: 0.24, ease: "power2.out" });
          node.addEventListener("mouseenter", enter);
          node.addEventListener("mouseleave", leave);
          cleanups.push(() => {
            node.removeEventListener("mouseenter", enter);
            node.removeEventListener("mouseleave", leave);
          });
        });
        return () => cleanups.forEach((fn) => fn());
      };

      // Hero
      reveal(".hero h1", { opacity: 0, y: 28 }, ".hero", "top 92%");
      reveal(".hero p", { opacity: 0, y: 20 }, ".hero", "top 90%");
      staggerReveal(".hero-buttons a", { opacity: 0, scale: 0.92, y: 10 }, ".hero", 0.1, "top 88%");

      // About / Statistics (Helping Ventures section)
      reveal(".process-header", { opacity: 0, y: 26 }, ".process-section");
      reveal(".process-stats-copy", { opacity: 0, y: 20 }, ".process-section");
      staggerReveal(".process-stat-card", { opacity: 0, y: 30 }, ".process-section", 0.14);
      reveal(".process-industry-wrap", { opacity: 0, x: 44 }, ".process-section");

      // Services
      staggerReveal(".services-grid .service-card", { opacity: 0, y: 34 }, ".services-section", 0.1);
      hoverCleanup.push(addHoverLift(".services-grid .service-card"));

      // CTA
      reveal(".invest-cta-content h2", { opacity: 0, y: 24 }, ".invest-cta-section");
      reveal(".invest-cta-content p", { opacity: 0, y: 18 }, ".invest-cta-section");
      gsap.fromTo(
        ".invest-cta-btn",
        { opacity: 0, scale: 0.9, y: 8, boxShadow: "0 0 0 rgba(56, 201, 247, 0)" },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          boxShadow: "0 0 22px rgba(56, 201, 247, 0.38)",
          scrollTrigger: {
            trigger: ".invest-cta-section",
            start: "top 82%",
            once: true,
          },
          onComplete: () => {
            gsap.to(".invest-cta-btn", {
              boxShadow: "0 12px 28px rgba(23, 114, 209, 0.24)",
              duration: 0.8,
              ease: "power1.out",
            });
          },
        }
      );

      // Footer
      reveal(".site-footer-section", { opacity: 0, y: 20 }, ".site-footer-section", "top 92%");
    });

    return () => {
      hoverCleanup.forEach((cleanup) => cleanup && cleanup());
      ctx.revert();
    };
  }, [displayLocation.pathname]);

  useEffect(() => {
    if (displayLocation.pathname === "/") return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallViewport = window.matchMedia("(max-width: 768px)").matches;
    if (prefersReducedMotion || isSmallViewport) return undefined;

    const ctx = gsap.context(() => {
      if (displayLocation.pathname === "/about-us") {
        gsap.fromTo(
          ".about-page-hero img",
          { scale: 1.08, autoAlpha: 0.72 },
          { scale: 1, autoAlpha: 1, duration: 1.05, ease: "power2.out", overwrite: "auto" }
        );
        gsap.fromTo(
          ".about-page-hero-overlay .container",
          { autoAlpha: 0, x: -44 },
          { autoAlpha: 1, x: 0, duration: 0.82, delay: 0.14, ease: "power2.out", overwrite: "auto" }
        );

        const aboutMainTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-page-main",
            start: "top 78%",
            once: true,
          },
        });

        aboutMainTl
          .from(".about-page-intro", { autoAlpha: 0, x: -64, duration: 0.72, ease: "power3.out" })
          .from(".about-page-copy", { autoAlpha: 0, x: 64, duration: 0.72, ease: "power3.out" }, "<0.08")
          .from(
            ".about-page-next-image img",
            { autoAlpha: 0, scale: 0.94, y: 28, duration: 0.7, ease: "power2.out" },
            "-=0.3"
          );

        gsap.fromTo(
          ".about-cta-visual-bg",
          { scale: 1.12, filter: "brightness(0.82)" },
          {
            scale: 1,
            filter: "brightness(1)",
            duration: 1.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".about-cta-visual",
              start: "top 76%",
              once: true,
            },
          }
        );

        gsap.from(".about-cta-visual-content p", {
          autoAlpha: 0,
          y: 44,
          duration: 0.82,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-cta-visual",
            start: "top 72%",
            once: true,
          },
        });

        gsap.from(".about-team-kicker, .about-team-section h2, .about-team-divider", {
          autoAlpha: 0,
          y: 24,
          stagger: 0.08,
          duration: 0.62,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-team-section",
            start: "top 80%",
            once: true,
          },
        });

        gsap.from(".about-team-card", {
          autoAlpha: 0,
          y: 58,
          rotateY: -8,
          transformOrigin: "center top",
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-team-grid",
            start: "top 84%",
            once: true,
          },
        });

        gsap.from(".about-stat-item", {
          autoAlpha: 0,
          y: 34,
          scale: 0.9,
          stagger: 0.12,
          duration: 0.72,
          ease: "back.out(1.35)",
          scrollTrigger: {
            trigger: ".about-stats-strip",
            start: "top 76%",
            once: true,
          },
        });

        gsap.from(".about-testimonial-intro > *", {
          autoAlpha: 0,
          x: -38,
          stagger: 0.08,
          duration: 0.68,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-testimonial-section",
            start: "top 80%",
            once: true,
          },
        });

        gsap.from(".about-testimonial-card", {
          autoAlpha: 0,
          x: 54,
          stagger: 0.12,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-testimonial-cards",
            start: "top 84%",
            once: true,
          },
        });
      }

      if (displayLocation.pathname === "/services") {
        gsap.fromTo(
          ".service-page-banner img",
          { scale: 1.08, autoAlpha: 0.74 },
          { scale: 1, autoAlpha: 1, duration: 1.05, ease: "power2.out", overwrite: "auto" }
        );
        gsap.fromTo(
          ".service-page-banner-content .container",
          { autoAlpha: 0, y: 34 },
          { autoAlpha: 1, y: 0, duration: 0.76, delay: 0.1, ease: "power2.out", overwrite: "auto" }
        );

        gsap.from(".service-link-item", {
          autoAlpha: 0,
          y: 26,
          stagger: 0.08,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-main",
            start: "top 78%",
            once: true,
          },
        });

        const serviceCopyTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-main",
            start: "top 74%",
            once: true,
          },
        });

        serviceCopyTl
          .from(".service-copy", { autoAlpha: 0, y: 30, scale: 0.97, duration: 0.75, ease: "power2.out" })
          .from(".service-copy > *", { autoAlpha: 0, y: 20, stagger: 0.08, duration: 0.56, ease: "power2.out" }, "-=0.3");

        gsap.from(".service-industry-intro > *", {
          autoAlpha: 0,
          x: -36,
          stagger: 0.08,
          duration: 0.68,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".service-industry-section",
            start: "top 80%",
            once: true,
          },
        });

        gsap.from(".service-drop-line-wrap", {
          autoAlpha: 0,
          y: 44,
          scale: 0.95,
          duration: 0.84,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".service-drop-line-section",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".service-drop-line-header > *", {
          autoAlpha: 0,
          y: 22,
          stagger: 0.08,
          duration: 0.62,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".service-drop-line-section",
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(".service-drop-line-grid input, .service-drop-line-grid textarea, .service-drop-line-grid button", {
          autoAlpha: 0,
          y: 18,
          stagger: 0.06,
          duration: 0.54,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".service-drop-line-grid",
            start: "top 86%",
            once: true,
          },
        });

      }

      if (displayLocation.pathname === "/contact-us") {
        gsap.fromTo(
          ".contact-page-hero img",
          { scale: 1.06, autoAlpha: 0.78 },
          { scale: 1, autoAlpha: 1, duration: 0.98, ease: "power2.out", overwrite: "auto" }
        );
        gsap.fromTo(
          ".contact-page-hero-overlay .container",
          { autoAlpha: 0, y: 38 },
          { autoAlpha: 1, y: 0, duration: 0.78, delay: 0.12, ease: "power2.out", overwrite: "auto" }
        );

        gsap.from(".contact-info-card", {
          autoAlpha: 0,
          y: 86,
          stagger: 0.14,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info-section",
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(".contact-info-icon", {
          autoAlpha: 0,
          scale: 0.42,
          stagger: 0.12,
          duration: 0.56,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: ".contact-info-section",
            start: "top 74%",
            once: true,
          },
        });

        gsap.from(".contact-form-wrap", {
          autoAlpha: 0,
          y: 44,
          scale: 0.95,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form-section",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".contact-form-header > *", {
          autoAlpha: 0,
          y: 22,
          stagger: 0.08,
          duration: 0.62,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form-section",
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(".contact-form-grid input, .contact-form-grid textarea, .contact-form-grid button", {
          autoAlpha: 0,
          y: 18,
          stagger: 0.06,
          duration: 0.54,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form-grid",
            start: "top 86%",
            once: true,
          },
        });
      }

      if (document.querySelector(".site-footer-section")) {
        gsap.from(".site-footer-section", {
          autoAlpha: 0,
          y: 26,
          duration: 0.74,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".site-footer-section",
            start: "top 95%",
            once: true,
          },
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, [displayLocation.pathname]);

  const HomePage = () => (
    <div className="app-sections home-page">
      <Header />
      <WhyChooseUsSection />
      <CaseStudiesSection />
      <InvestCtaSection />
      <ProcessSection />
      <TestimonialSection />
      <LatestNewsSection />
      <SiteFooterSection />
    </div>
  );

  const handleAnimationEnd = (event) => {
    if (event.target !== event.currentTarget) return;

    if (transitionStage === "fade-out") {
      setDisplayLocation(location);
      setTransitionStage("fade-in");
    }
  };

  return (
    <>
      <div className={`app-loader${showBootLoader ? " is-active" : " is-hidden"}`} aria-hidden={!showBootLoader}>
        <span className="loader loader--4" />
      </div>
      <div className={`page-route-transition ${transitionStage}`} onAnimationEnd={handleAnimationEnd}>
        <Routes location={displayLocation}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}
 
export default App;
 
