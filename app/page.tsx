import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";
import Tilt from "@/components/Tilt";
import Parallax from "@/components/Parallax";
import ScrollProgress from "@/components/ScrollProgress";
import MobileCta from "@/components/MobileCta";
import HowItWorks from "@/components/HowItWorks";

const features = [
  ["🧠", "یادگیری شخصی", "فندق با سطح، سرعت و اشتباه‌های هر کودک جلو می‌رود؛ نه با یک مسیر یکسان برای همه.", "#a8c3a0"],
  ["🔎", "کشف به‌جای حفظ", "سؤال، بازی، تمرین و داستان کمک می‌کنند کودک خودش به جواب برسد و یادگیری ماندگارتر شود.", "#a9cde3"],
  ["🎨", "خلاقیت واقعی", "از نقاشی و قصه تا حل مسئله و فکر کردن متفاوت؛ فقط نمره مهم نیست.", "#f3b7a6"],
  ["🌱", "رشد همه‌جانبه", "مهارت‌های زندگی و رشد شخصی را در قالب موقعیت‌ها و داستان‌های قابل لمس یاد می‌گیرد.", "#f4d58d"]
] as const;

const ages = [
  ["۳–۴", "مهدکودک", "🧸", "#f3b7a6", "بازی، رنگ‌ها، شکل‌ها و اولین کلمه‌ها", 250],
  ["۵–۶", "پیش‌دبستانی", "✏️", "#a9cde3", "آمادگی مدرسه: عدد، حرف و دقت", 290],
  ["۶–۷", "اول دبستان", "📚", "#a8c3a0", "خواندن، نوشتن و حساب پایه", 330],
  ["۷–۸", "دوم دبستان", "🔢", "#f4d58d", "جمع و تفریق، متن کوتاه و «چرا؟»", 370],
  ["۸–۹", "سوم دبستان", "🌍", "#f3b7a6", "مسئله‌های ساده، علوم و مهارت‌های زندگی", 410]
] as const;

function Words({ text, start = 0, className = "" }: { text: string; start?: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span className="w-mask" key={i}>
          <span className={`w ${className}`} style={{ ["--i" as string]: start + i } as React.CSSProperties}>{w}</span>{" "}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><i className="eyebrow-dot" /> دنیای یادگیری و رشد برای ۳ تا ۹ ساله‌ها</span>
              <h1>
                <Words text="یاد بگیر." start={0} /><br />
                <Words text="کشف کن." start={2} className="green" /><br />
                <Words text="رشد کن." start={4} />
              </h1>
              <p className="lead">فندق یک دوست کنجکاو برای کوچولوهاست؛ از مهدکودک تا سوم دبستان، جایی که آموزش، بازی، خلاقیت و مهارت‌های زندگی کنار هم قرار می‌گیرند.</p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-large" href="#waitlist">می‌خوام با فندق شروع کنم ←</a>
                <a className="btn btn-soft btn-large" href="#ages">فندق برای چه سنی؟</a>
              </div>
              <div className="hero-note"><b>🐾 فندق جواب همه‌چیز را نمی‌داند.</b> عاشق پیدا کردن جواب‌هاست.</div>
            </div>

            <Reveal delay={120} variant="scale" className="hero-art">
              <Tilt className="hero-art-stage" max={7} lift={0}>
                <Parallax speed={0.06} className="blob blob-one" />
                <Parallax speed={0.1} className="blob blob-two" />
                <Parallax speed={0.14} className="blob blob-three" />
                <div className="hero-orbit">
                  <span className="floatie orbit-a">🍎</span>
                  <span className="floatie orbit-b">⭐</span>
                </div>
                <div className="mascot-crop" aria-label="فندق، دوست یادگیرنده‌ی بچه‌ها" />
                <div className="float-card card-a"><div className="float-icon">✨</div><strong>بیا با هم کشفش کنیم!</strong><span>شعار فندق</span></div>
                <div className="float-card card-b"><div className="float-icon">🧩</div><strong>اشتباه؟ عالیه!</strong><span>هر اشتباه یک سرنخ است.</span></div>
                <div className="float-card card-c"><div className="float-icon">🌍</div><strong>دنیای بزرگ، قدم‌های کوچک</strong><span>یادگیری با سرعت خود کودک</span></div>
              </Tilt>
            </Reveal>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track"><span>ریاضی ✦ علوم ✦ زبان ✦ خلاقیت ✦ داستان ✦ حل مسئله ✦ مهارت‌های زندگی ✦</span><span>ریاضی ✦ علوم ✦ زبان ✦ خلاقیت ✦ داستان ✦ حل مسئله ✦ مهارت‌های زندگی ✦</span></div>
          <div className="marquee-track reverse"><span>۳ تا ۹ ساله‌ها ✦ مهدکودک ✦ پیش‌دبستانی ✦ اول ✦ دوم ✦ سوم دبستان ✦ کنجکاوی ✦</span><span>۳ تا ۹ ساله‌ها ✦ مهدکودک ✦ پیش‌دبستانی ✦ اول ✦ دوم ✦ سوم دبستان ✦ کنجکاوی ✦</span></div>
        </div>

        <section className="section section-tight ages-section" id="ages">
          <Parallax speed={0.1} className="deco clay-orb deco-a" />
          <div className="container">
            <Reveal variant="blur">
              <span className="eyebrow"><i className="eyebrow-dot" /> فندق برای چه سنی؟</span>
              <h2 className="h2">از ۳ تا ۹ سالگی،<br />قدم‌به‌قدم بزرگ می‌شویم.</h2>
              <p className="lead">فندق برای کودکان <b>۳ تا ۹ ساله</b> طراحی می‌شود؛ از مهدکودک تا سوم دبستان. هسته‌ی اصلی محصول، سن ۴ تا ۸ سال است و محتوا با سن و سطح هر کودک تنظیم می‌شود.</p>
            </Reveal>
            <Reveal variant="up" className="ages-reveal">
              <div className="ages">
                {ages.map(([age, name, icon, tint, text, h], i) => (
                  <div className="age-slot" key={name}>
                    <article className="age-card" style={{ ["--tint" as string]: tint, ["--h" as string]: `${h}px` } as React.CSSProperties}>
                      <span className="age-icon">{icon}</span>
                      <div className="age-num">{age}<small>سال</small></div>
                      <h3>{name}</h3>
                      <p>{text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="why">
          <Parallax speed={0.14} className="deco clay-orb deco-b" />
          <div className="container">
            <Reveal variant="blur"><span className="eyebrow"><i className="eyebrow-dot" /> فندق چه فرقی دارد؟</span><h2 className="h2">آموزش، فقط جواب درست نیست.</h2><p className="lead">هدف فندق این است که کودک بفهمد، سؤال بپرسد، امتحان کند، اشتباه کند و دوباره تلاش کند.</p></Reveal>
            <div className="grid-4">
              {features.map(([icon, title, text, bg], i) => (
                <Reveal key={title} delay={i * 70} variant="pop">
                  <Tilt className="feature-tilt" max={8}>
                    <article className="feature-card"><div className="feature-icon" style={{ background: bg, ["--tint" as string]: bg } as React.CSSProperties}>{icon}</div><h3>{title}</h3><p>{text}</p></article>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="how-section">
          <HowItWorks />
        </section>

        <section className="section" id="world">
          <Parallax speed={0.12} className="deco clay-orb deco-c" />
          <div className="container">
            <Reveal variant="blur"><span className="eyebrow"><i className="eyebrow-dot" /> دنیای فندق</span><h2 className="h2">چه چیزهایی می‌توانیم کشف کنیم؟</h2><p className="lead">مسیر فندق فقط کتاب درسی نیست؛ پایه‌های درسی محکم، در کنار خلاقیت و مهارت‌هایی که برای زندگی لازم‌اند.</p></Reveal>
            <div className="subjects">
              <Reveal variant="right"><Tilt className="subject-tilt" max={6}><article className="subject math"><div className="shape" /><h3>🧮 ریاضی و تفکر</h3><p>عدد، الگو، مسئله، منطق و تمرین‌هایی که کودک را به فکر کردن دعوت می‌کنند.</p></article></Tilt></Reveal>
              <Reveal delay={60} variant="left"><Tilt className="subject-tilt" max={6}><article className="subject science"><div className="shape" /><h3>🔬 علوم و کشف جهان</h3><p>از بدن و حیوانات تا فضا، طبیعت و آزمایش‌های کوچک و جذاب.</p></article></Tilt></Reveal>
              <Reveal delay={120} variant="right"><Tilt className="subject-tilt" max={6}><article className="subject creative"><div className="shape" /><h3>🎨 خلاقیت و هنر</h3><p>نقاشی، قصه، ساختن، موسیقی، حل مسئله و فکرهای تازه.</p></article></Tilt></Reveal>
              <Reveal delay={180} variant="left"><Tilt className="subject-tilt" max={6}><article className="subject life"><div className="shape" /><h3>🌱 مهارت‌های زندگی</h3><p>تصمیم‌گیری، ارتباط، مسئولیت‌پذیری، مدیریت احساسات و آشنایی ساده با پول.</p></article></Tilt></Reveal>
            </div>
          </div>
        </section>

        <section className="section parents" id="parents">
          <div className="container parent-grid">
            <Reveal variant="left">
              <span className="eyebrow"><i className="eyebrow-dot" /> برای والدین</span>
              <h2 className="h2">والد بداند؛<br />کودک هم پیش برود.</h2>
              <p className="lead">قرار نیست والد هر روز نقش معلم خصوصی را بازی کند. فندق باید بخشی از مسیر را ساده‌تر، شفاف‌تر و قابل پیگیری‌تر کند.</p>
              <div className="checks">
                <div className="check"><b>✓</b><span>گزارش قابل فهم از پیشرفت و نقاط نیازمند تمرین</span></div>
                <div className="check"><b>✓</b><span>تمرکز روی یادگیری واقعی، نه فقط تعداد تمرین‌ها</span></div>
                <div className="check"><b>✓</b><span>تجربه‌ای امن، آرام و مناسب سن کودک</span></div>
              </div>
            </Reveal>
            <Reveal delay={100} variant="right">
              <div className="parent-panel-wrap">
                <Tilt max={5} lift={16}>
                  <div className="parent-panel">
                    <div className="report-row"><span className="report-label">درک مفهوم جمع</span><span className="report-value">خوب</span><span className="bar"><i style={{ width: "78%" }} /></span></div>
                    <div className="report-row"><span className="report-label">حل مسئله</span><span className="report-value">در حال رشد</span><span className="bar"><i style={{ width: "54%" }} /></span></div>
                    <div className="report-row"><span className="report-label">الگوها</span><span className="report-value">نیاز به تمرین</span><span className="bar"><i style={{ width: "36%" }} /></span></div>
                    <div style={{ marginTop: 20, padding: 18, borderRadius: 20, background: "rgba(168,195,160,.25)", lineHeight: 1.9, fontSize: 13 }}>💡 پیشنهاد فندق‌یار: قبل از رفتن سراغ مرحله‌ی بعد، یک بازی کوتاه با الگوها انجام بده.</div>
                  </div>
                </Tilt>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <Reveal variant="blur"><span className="eyebrow"><i className="eyebrow-dot" /> سؤالات متداول</span><h2 className="h2">قبل از شروع، هر سؤالی داری بپرس.</h2></Reveal>
            <div className="faq">
              <Reveal><details><summary>فندق برای چه سنی است؟</summary><p>فندق برای کودکان ۳ تا ۹ ساله، یعنی از مهدکودک تا سوم دبستان طراحی می‌شود. هسته‌ی اصلی محصول ۴ تا ۸ سال است و تجربه و محتوا بر اساس سن و سطح هر کودک تنظیم می‌شود.</p></details></Reveal>
              <Reveal delay={50}><details><summary>آیا فندق جای معلم را می‌گیرد؟</summary><p>نه. فندق یک همراه یادگیری است که می‌تواند تمرین و بازخورد شخصی‌سازی‌شده بدهد؛ هدف، کمک به یادگیری بهتر کودک است نه حذف نقش معلم و والد.</p></details></Reveal>
              <Reveal delay={100}><details><summary>چه چیزهایی در نسخه‌ی اول وجود دارد؟</summary><p>تمرکز MVP روی درس‌های پایه، تمرین تعاملی، مدل یادگیری کودک و فندق‌یار است. قابلیت‌های پیشرفته مثل تحلیل تصویر و صدا می‌توانند بعداً اضافه شوند.</p></details></Reveal>
              <Reveal delay={150}><details><summary>چه زمانی آماده می‌شود؟</summary><p>فندق به‌صورت مرحله‌ای ساخته می‌شود و اعضای لیست انتظار جزو اولین افرادی هستند که امکان تجربه‌ی نسخه‌های اولیه را خواهند داشت.</p></details></Reveal>
            </div>
          </div>
        </section>

        <section className="section section-tight" id="waitlist">
          <div className="container">
            <Reveal variant="pop">
              <div className="waitlist-wrap">
                <div><span className="eyebrow">🌰 قدم اول</span><h2>بیا فندق را<br />با هم بسازیم.</h2><p>اگر دوست داری جزو اولین خانواده‌هایی باشی که فندق را تجربه می‌کنند، اطلاعاتت را ثبت کن.</p></div>
                <WaitlistForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
