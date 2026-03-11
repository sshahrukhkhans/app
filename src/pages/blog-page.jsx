import { Link } from "react-router-dom";
import Header from "../components/layout/header/header";
import SiteFooterSection from "../components/layout/site-footer/site-footer";
import bannerImage from "../assets/images/banner.jpg";
import { latestNewsCards } from "../data/news-articles";
import "./blog-page.css";

const BlogPage = () => {
  return (
    <div className="app-sections">
      <Header showHero={false} />

      <section id="blog-top" className="blog-page-hero" aria-label="Blog banner">
        <img src={bannerImage} alt="Blog banner" loading="lazy" />
        <div className="blog-page-hero-overlay">
          <div className="container">
            <h1>Blog</h1>
            <nav className="blog-page-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">&rsaquo;</span>
              <span>Blog</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="blog-page-list-section" aria-label="Blog list">
        <div className="container">
          <header className="blog-page-list-header">
            <p>READ OUR LATEST NEWS</p>
            <h2>Latest Articles</h2>
          </header>

          <div className="blog-page-grid">
            {latestNewsCards.map((item) => (
              <article key={item.slug} className="blog-page-card">
                <div className="blog-page-card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span>{item.date}</span>
                </div>

                <div className="blog-page-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link to={`/news/${item.slug}`}>Read Article +</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooterSection />
    </div>
  );
};

export default BlogPage;
