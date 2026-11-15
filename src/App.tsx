import { useEffect, useState, type CSSProperties } from "react";
import { exams } from "./content";
import { D, M } from "./math";

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* bỏ qua */
  }
}

function PrintIcon() {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M7 14h10v7H7zM17 11h.01" />
    </svg>
  );
}

export default function App() {
  const [activeExamId, setActiveExamId] = useState<string>(() => {
    const id = load<string>("csn.exam", exams[0].id);
    return exams.some((e) => e.id === id) ? id : exams[0].id;
  });
  const [answersVisible, setAnswersVisible] = useState<boolean>(() => load("csn.answers", true));
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [scrolled, setScrolled] = useState(false);
  const activeExam = exams.find((exam) => exam.id === activeExamId) ?? exams[0];
  const activeIndex = exams.findIndex((exam) => exam.id === activeExam.id) + 1;

  useEffect(() => save("csn.exam", activeExamId), [activeExamId]);
  useEffect(() => save("csn.answers", answersVisible), [answersVisible]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function selectExam(id: string) {
    if (id === activeExamId) return;
    const from = exams.findIndex((e) => e.id === activeExamId);
    const to = exams.findIndex((e) => e.id === id);
    setDirection(to > from ? "next" : "prev");
    setActiveExamId(id);
  }

  return (
    <div className="app-shell">
      <div className="backdrop-art" aria-hidden="true" />

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Mạch Số, về đầu trang">
          <span className="wordmark-mark">
            <M t="\Sigma" />
          </span>
          <span className="wordmark-copy">
            <strong>MẠCH SỐ</strong>
            <small>PHIẾU ÔN TẬP TOÁN</small>
          </span>
        </a>
        <span className="header-note">TOÁN 11 · CẤP SỐ</span>
      </header>

      <main id="top" className="main-content">
        <section className="intro" aria-labelledby="page-title">
          <div className="intro-text">
            <p className="eyebrow">DÃY SỐ / BẢN ĐỐI CHIẾU</p>
            <h1 id="page-title">
              Cấp số <span>&</span> dãy số
            </h1>
            <p className="intro-copy">
              Toàn bộ câu hỏi nhìn thấy trong ảnh đã được gõ lại; lời giải viết tay
              được bỏ đi, đáp số đặt riêng bên cạnh. Mọi công thức và con số được dựng
              bằng LaTeX.
            </p>
          </div>
          <div className="formula-card" aria-hidden="true">
            <span className="formula-card-label">CẤP SỐ NHÂN</span>
            <D t="u_n = u_1 \cdot q^{\,n-1}" />
            <span className="formula-card-rule" />
            <D t="S_n = u_1 \cdot \dfrac{1 - q^{\,n}}{1 - q}" />
          </div>
        </section>

        <section className="workspace" aria-label="Bản đề đã gõ lại">
          <div className="toolbar">
            <div
              className="exam-tabs"
              role="tablist"
              aria-label="Chọn đề"
              style={{ "--count": exams.length, "--index": activeIndex - 1 } as CSSProperties}
            >
              <span className="exam-tabs-pill" aria-hidden="true" />
              {exams.map((exam) => (
                <button
                  key={exam.id}
                  className={`exam-tab ${activeExamId === exam.id ? "is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={activeExamId === exam.id}
                  onClick={() => selectExam(exam.id)}
                >
                  {exam.label}
                </button>
              ))}
            </div>
            <div className="toolbar-actions">
              <button
                className="quiet-button answer-toggle"
                type="button"
                aria-pressed={answersVisible}
                onClick={() => setAnswersVisible((visible) => !visible)}
              >
                <span className={`switch ${answersVisible ? "is-on" : ""}`} aria-hidden="true" />
                <span>Đáp án</span>
              </button>
              <button className="print-button" type="button" onClick={() => window.print()}>
                <PrintIcon />
                <span>In / PDF</span>
              </button>
            </div>
          </div>

          <section
            className={`sheet ${answersVisible ? "" : "answers-off"}`}
            aria-labelledby="exam-title"
          >
            <div className={`sheet-swap sheet-swap--${direction}`} key={activeExam.id}>
              <div className="sheet-heading">
                <div>
                  <p className="sheet-kicker">PHIẾU BÀI TẬP · CẤP SỐ</p>
                  <h2 id="exam-title">{activeExam.title}</h2>
                  <p className="sheet-description">{activeExam.description}</p>
                </div>
                <div className="sheet-folio" aria-label={`Đề ${activeIndex} trên ${exams.length}`}>
                  <span>TOÁN 11</span>
                  <strong>
                    <M t={`${activeIndex}\\,/\\,${exams.length}`} />
                  </strong>
                </div>
              </div>

              <div className="column-heading">
                <span>NỘI DUNG CÂU HỎI</span>
                <span className="column-heading-answer">ĐÁP SỐ ĐỂ ĐỐI CHIẾU</span>
              </div>

              <div className="question-list">
                {activeExam.questions.map((question, i) => (
                  <article
                    className="question-row"
                    key={question.id}
                    style={{ "--i": i } as CSSProperties}
                  >
                    <div className="question-main">
                      <div className="question-title">
                        <span className="question-index">
                          <M t={String(Number(question.id))} />
                        </span>
                        <h3>{question.title}</h3>
                        {question.points && <span className="points">{question.points}</span>}
                      </div>
                      <div className="question-prompt">{question.prompt}</div>
                    </div>
                    <aside
                      className="answer-side"
                      aria-label={`Đáp số ${question.title}`}
                      aria-hidden={!answersVisible}
                    >
                      <div className="answer-clip">
                        <div className="answer-inner">
                          <span className="answer-label">ĐÁP SỐ</span>
                          <div className="answer-value">{question.answer}</div>
                        </div>
                      </div>
                    </aside>
                  </article>
                ))}
              </div>

              <footer className="sheet-footer">
                <span>Không kèm lời giải viết tay</span>
                <span>Đáp số được tính lại để đối chiếu</span>
              </footer>
            </div>
          </section>
        </section>

        <footer className="page-note">
          <span>NỘI DUNG ĐƯỢC CHUẨN HÓA TỪ ẢNH BẠN GỬI</span>
          <span>LaTeX (KaTeX) · A4 print-ready</span>
        </footer>
      </main>
    </div>
  );
}
