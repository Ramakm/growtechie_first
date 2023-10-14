const Social = () => {
  return (
    <div className="fixed right-0 top-1/4 z-50 px-5 py-3 bg-transparent flex flex-col space-y-3">
      <a
        href="https://www.facebook.com/profile.php?id=61551916223733"
        className="footer-icons"
        title="Share on Facebook"
        target="_blank"
      >
        <img src="/assets/facebook.svg" alt="Facebook" width="40" height="40" />
      </a>

      <a
        href="https://www.instagram.com/growtechie/"
        className="footer-icons"
        title="Share on Instagram"
        target="_blank"
      >
        <img src="/assets/insta.svg" alt="Instagram" width="40" height="40" />
      </a>

      <a
        href="https://twitter.com/growtechie"
        className="footer-icons"
        title="Share on Twitter"
        target="_blank"
      >
        <img src="/assets/tweet.svg" alt="Twitter" width="40" height="40" />
      </a>

      <a
        className="footer-icons"
        href="https://www.linkedin.com/company/growtechieind"
        title="Share on LinkedIn"
        target="_blank"
      >
        <img src="/assets/linkedin.svg" alt="LinkedIn" width="40" height="40" />
      </a>
    </div>
  );
};

export default Social;
