import type { ReactNode } from "react";
import { D, M } from "./math";

export type Question = {
  id: string;
  title: string;
  points?: string;
  prompt: ReactNode;
  answer: ReactNode;
};

export type Exam = {
  id: string;
  label: string;
  title: string;
  description: string;
  questions: Question[];
};

// Lưu ý: chuỗi trong thuộc tính JSX không xử lý ký tự thoát,
// nên có thể viết LaTeX trực tiếp (ví dụ t="\dfrac{1}{4}").

export const exams: Exam[] = [
  {
    id: "exam-1",
    label: "Đề số 1",
    title: "Đề số 1",
    description: "Chín bài về cấp số cộng, cấp số nhân và ứng dụng.",
    questions: [
      {
        id: "01",
        title: "Bài 1",
        prompt: (
          <>
            <p>
              Tìm số hạng đầu của cấp số nhân <M t="(u_n)" />, biết:
            </p>
            <D t="\begin{cases} u_5 + u_2 = 54 \\ u_6 - u_4 = 72 \end{cases}" />
          </>
        ),
        answer: <M t="u_1 = 3" />,
      },
      {
        id: "02",
        title: "Bài 2",
        prompt: (
          <>
            <p>
              Cho cấp số nhân <M t="(u_n)" /> có công bội <M t="q < 2" /> và các số hạng
              thỏa mãn:
            </p>
            <D t="\begin{cases} u_5 - u_2 = 168 \\ u_7 - u_4 = 1512 \end{cases}" />
            <p className="subquestion">
              a) Tìm số hạng đầu và công bội của cấp số nhân.
              <br />
              b) Số <M t="1458" /> là số hạng thứ mấy của cấp số nhân?
            </p>
          </>
        ),
        answer: (
          <div className="answer-lines">
            <span>
              a) <M t="u_1 = 2,\ q = -3" />
            </span>
            <span>
              b) <M t="n = 7" />
            </span>
          </div>
        ),
      },
      {
        id: "03",
        title: "Bài 3",
        prompt: (
          <p>
            Tổng ba số hạng liên tiếp của một cấp số cộng là <M t="42" />. Nếu lấy số thứ
            hai trừ đi <M t="2" /> và số thứ ba trừ đi <M t="2" /> thì ba số đó lập thành
            một cấp số nhân. Tính tích ba số đó, biết số hạng đầu có giá trị nhỏ hơn{" "}
            <M t="10" />.
          </p>
        ),
        answer: <M t="2240" />,
      },
      {
        id: "04",
        title: "Bài 4",
        prompt: (
          <p>
            Cho cấp số nhân có các số hạng lần lượt là{" "}
            <M t="\dfrac{1}{4};\ \dfrac{1}{2};\ 1;\ \ldots;\ 256" />. Tính tổng{" "}
            <M t="S" /> của tất cả các số hạng của cấp số nhân đã cho.
          </p>
        ),
        answer: <M t="S = \dfrac{2047}{4} = 511{,}75" />,
      },
      {
        id: "05",
        title: "Bài 5",
        prompt: (
          <p>
            Biết một cấp số nhân có số hạng đầu bằng <M t="4" />, số hạng thứ hai bằng{" "}
            <M t="12" /> và số hạng cuối bằng <M t="972" />. Tính tổng tất cả các số hạng
            của cấp số nhân đó.
          </p>
        ),
        answer: <M t="1456" />,
      },
      {
        id: "06",
        title: "Bài 6",
        prompt: (
          <>
            <p>
              Cho cấp số nhân <M t="(u_n)" /> biết <M t="u_1 = 3" />, <M t="u_5 = 48" /> và
              tổng
            </p>
            <D t="S_n = u_1 + u_2 + \cdots + u_n = 381." />
            <p>
              Tìm <M t="n" />, biết cấp số nhân có công bội dương.
            </p>
          </>
        ),
        answer: <M t="n = 7" />,
      },
      {
        id: "07",
        title: "Bài 7",
        prompt: (
          <p>
            Dân số của nước ta tính đến tháng <M t="12" /> năm <M t="2021" /> là{" "}
            <M t="98{,}5" /> triệu người. Nếu tỉ lệ tăng trưởng dân số trung bình hằng năm
            là <M t="1{,}2\%" /> thì dân số nước ta vào tháng <M t="12" /> năm{" "}
            <M t="2032" /> là bao nhiêu người? Tính theo đơn vị triệu người, làm tròn đến
            hàng đơn vị.
          </p>
        ),
        answer: (
          <>
            <M t="112{,}31 \approx 112" /> triệu người
          </>
        ),
      },
      {
        id: "08",
        title: "Bài 8",
        prompt: (
          <p>
            Ông Minh gửi số tiền <M t="150" /> triệu đồng vào một ngân hàng với hình thức
            lãi kép, kì hạn <M t="12" /> tháng, lãi suất <M t="6\%" />/năm. Giả sử trong
            khoảng thời gian gửi tiền ông Minh không rút tiền ra và lãi suất không thay
            đổi, hỏi sau <M t="10" /> năm thì tổng số tiền cả vốn lẫn lãi mà ông nhận được
            là bao nhiêu? Đơn vị: đồng, tính kết quả gần đúng đến hàng trăm.
          </p>
        ),
        answer: (
          <>
            <M t="268.627.200" /> đồng
          </>
        ),
      },
      {
        id: "09",
        title: "Bài 9",
        prompt: (
          <>
            <p>
              Kết quả của tổng sau theo <M t="n" /> (số hạng cuối gồm <M t="n" /> chữ số{" "}
              <M t="7" />):
            </p>
            <D t="S_n = 7 + 77 + 777 + \cdots + \underbrace{77\ldots7}_{n}" />
            <p>có dạng</p>
            <D t="\dfrac{a\left(10^{n} - b\right)}{81} - \dfrac{7n}{9}," />
            <p>
              với <M t="a,\ b" /> là các số tự nhiên. Giá trị của <M t="P = a - 30b" /> bằng
              bao nhiêu?
            </p>
          </>
        ),
        answer: <M t="P = 40" />,
      },
    ],
  },
  {
    id: "exam-2",
    label: "Đề số 2",
    title: "Đề số 2",
    description: "Hai câu nhìn thấy trong ảnh; giữ nguyên phần điểm của đề.",
    questions: [
      {
        id: "01",
        title: "Bài 1",
        points: "2 điểm",
        prompt: (
          <>
            <p>
              Tìm số hạng đầu của cấp số nhân <M t="(u_n)" />, biết:
            </p>
            <D t="\begin{cases} u_5 + u_2 = 336 \\ u_6 - u_4 = 864 \end{cases}" />
          </>
        ),
        answer: <M t="u_1 = 4" />,
      },
      {
        id: "02",
        title: "Bài 2",
        points: "3 điểm",
        prompt: (
          <>
            <p>
              Cho cấp số nhân <M t="(u_n)" /> có công bội <M t="q < 2" /> và các số hạng
              thỏa mãn:
            </p>
            <D t="\begin{cases} u_5 - u_2 = -54 \\ u_7 - u_4 = -216 \end{cases}" />
            <p className="subquestion">
              a) Tìm số hạng đầu và công bội của cấp số nhân.
              <br />
              b) Số <M t="-768" /> là số hạng thứ mấy của cấp số nhân?
            </p>
          </>
        ),
        answer: (
          <div className="answer-lines">
            <span>
              a) <M t="u_1 = -3,\ q = -2" />
            </span>
            <span>
              b) <M t="n = 9" />
            </span>
          </div>
        ),
      },
    ],
  },
];
