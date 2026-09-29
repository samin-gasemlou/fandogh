export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand"><span className="brand-mark"><img src="/brand/logo-mark.png" alt="فندق" width={64} height={64} /></span><span className="brand-text">فندق<small>یادگیری و رشد</small></span></div>
            <p>یک دنیای کوچک برای یادگیری، کشف، خلاقیت و رشد کوچولوهای کنجکاو.</p>
          </div>
          <div className="footer-links">
            <a href="/privacy">حریم خصوصی</a>
            <a href="/terms">شرایط استفاده</a>
            <a href="mailto:hello@fandogh.learn">تماس با ما</a>
            <a href="https://instagram.com/fandogh.learn" target="_blank" rel="noreferrer">اینستاگرام</a>
          </div>
        </div>
        <div className="footer-bottom"><span>© ۱۴۰۵ فندق</span><span>یاد بگیر، کشف کن، رشد کن 🌱</span></div>
      </div>
    </footer>
  );
}
