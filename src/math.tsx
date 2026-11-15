import katex from "katex";
import "katex/dist/katex.min.css";
import { memo } from "react";

function render(tex: string, displayMode: boolean) {
  return katex.renderToString(tex, {
    displayMode,
    throwOnError: false,
    strict: "ignore",
    output: "htmlAndMathml",
  });
}

/** Công thức trong dòng, viết bằng LaTeX: <M t="u_1 = 3" /> */
export const M = memo(function M({ t }: { t: string }) {
  return <span className="math-inline" dangerouslySetInnerHTML={{ __html: render(t, false) }} />;
});

/** Công thức riêng dòng (display): <D t="\begin{cases} … \end{cases}" /> */
export const D = memo(function D({ t }: { t: string }) {
  return <div className="math-display" dangerouslySetInnerHTML={{ __html: render(t, true) }} />;
});
