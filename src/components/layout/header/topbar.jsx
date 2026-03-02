const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-content">
        <div className="top-left">
          <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
          <span>contact@xyz.com</span>
          <span>12345678990</span>
        </div>
        <div className="top-right">
          <a className="social-link" href="/" aria-label="Facebook">
            <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.1-.1-2.1-.1-2 0-3.4 1.2-3.4 3.6v2.1H8.7V14H11v7h2.5Z" />
            </svg>
          </a>
          <a className="social-link" href="/" aria-label="Twitter">
            <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.9 4H22l-6.8 7.8L23 20h-6.1l-4.8-6.2L6.7 20H3.6l7.2-8.2L3 4h6.2l4.3 5.7L18.9 4Zm-1.1 14.1h1.7L8.3 5.8H6.5l11.3 12.3Z" />
            </svg>
          </a>
          <a className="social-link" href="/" aria-label="Instagram">
            <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 7.1A4.9 4.9 0 1 0 12 17a4.9 4.9 0 0 0 0-9.9Zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm6.2-8.3a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21 7.9c0-1.6-.4-3-1.5-4.1C18.4 2.7 17 2.3 15.4 2.3h-6.8C7 2.3 5.6 2.7 4.5 3.8 3.4 4.9 3 6.3 3 7.9v6.2c0 1.6.4 3 1.5 4.1 1.1 1.1 2.5 1.5 4.1 1.5h6.8c1.6 0 3-.4 4.1-1.5 1.1-1.1 1.5-2.5 1.5-4.1V7.9Zm-1.8 6.1c0 1.1-.2 1.8-.8 2.4-.6.6-1.3.8-2.4.8H8.8c-1.1 0-1.8-.2-2.4-.8-.6-.6-.8-1.3-.8-2.4V8c0-1.1.2-1.8.8-2.4.6-.6 1.3-.8 2.4-.8h6.3c1.1 0 1.8.2 2.4.8.6.6.8 1.3.8 2.4v6Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
 
export default Topbar;
 
 