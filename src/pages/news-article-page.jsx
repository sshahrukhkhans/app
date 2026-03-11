import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/layout/header/header";
import SiteFooterSection from "../components/layout/site-footer/site-footer";
import bannerImage from "../assets/images/banner.jpg";
import { getNewsArticleBySlug, latestNewsCards } from "../data/news-articles";
import "./news-article-page.css";

const renderBlock = (block, index) => {
  if (block.type === "heading") {
    return (
      <h2 key={`heading-${index}`} className="news-article-heading">
        {block.text}
      </h2>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3 key={`subheading-${index}`} className="news-article-subheading">
        {block.text}
      </h3>
    );
  }

  if (block.type === "ordered") {
    return (
      <ol key={`ordered-${index}`} className="news-article-ordered-list">
        {block.items.map((item) => (
          <li key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <p key={`paragraph-${index}`} className="news-article-paragraph">
      {block.text}
    </p>
  );
};

const NewsArticlePage = () => {
  const { slug } = useParams();
  const article = getNewsArticleBySlug(slug);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollElement = document.documentElement;
      const maxScroll = scrollElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100));
      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [slug]);

  if (!article) {
    return (
      <div className="app-sections">
        <Header showHero={false} />
        <section className="news-article-not-found">
          <div className="container">
            <h1>Article Not Found</h1>
            <p>The article you opened is unavailable. Please browse our latest insights.</p>
            <Link to="/">Back to Home</Link>
          </div>
        </section>
        <SiteFooterSection />
      </div>
    );
  }

  const relatedArticles = latestNewsCards
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="app-sections">
      <div className="news-reading-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      </div>
      <Header showHero={false} />

      <section className="news-article-hero" aria-label="News article banner">
        <img src={bannerImage} alt="Blogs banner" loading="lazy" />
        <div className="news-article-hero-overlay">
          <div className="container news-article-hero-copy">
            <h1>Blogs</h1>
            <nav className="news-article-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">&rsaquo;</span>
              <Link to="/blog">Blog</Link>
            </nav>
          </div>
        </div>
      </section>

      <main className="news-article-main">
        <div className="container news-article-layout">
          <article className="news-article-body">
            <header className="news-article-body-header">
              <p className="news-article-body-meta">
                <span>{article.date}</span>
                <span aria-hidden="true">•</span>
                <span>{article.readTime}</span>
              </p>
              <h2 className="news-article-body-title">{article.title}</h2>
            </header>
            <figure className="news-article-feature-image">
              <img src={article.image} alt={article.title} loading="lazy" />
            </figure>
            {article.blocks.map((block, index) => renderBlock(block, index))}
          </article>

          <aside className="news-article-sidebar" aria-label="Related articles">
            <h3>Related Articles</h3>
            <span className="news-article-sidebar-line" aria-hidden="true" />
            <div className="news-article-related-list">
              {relatedArticles.map((item) => (
                <article key={item.slug} className="news-article-related-card">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div>
                    <p>{item.date}</p>
                    <h4>{item.title}</h4>
                    <Link to={`/news/${item.slug}`}>Read Article +</Link>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </main>

      <SiteFooterSection />
    </div>
  );
};

export default NewsArticlePage;
