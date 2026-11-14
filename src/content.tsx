import type { ReactNode } from "react";

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

export function M({ children }: { children: ReactNode }) {
  return <span className="math-inline">{children}</span>;
}

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
              Tìm số hạng đầu của cấp số nhân <M>(u<sub>n</sub>)</M>, biết:
            </p>
            <div className="equation-set">
              <M>
                u<sub>5</sub> + u<sub>2</sub> = 54
              </M>
              <M>
                u<sub>6</sub> − u<sub>4</sub> = 72
              </M>
            </div>
          </>
        ),
        answer: (
          <M>
            u<sub>1</sub> = 3
          </M>
        ),
      },
      {
        id: "02",
        title: "Bài 2",
        prompt: (
          <>
            <p>
              Cho cấp số nhân <M>(u<sub>n</sub>)</M> có công bội <M>q &lt; 2</M> và
              các số hạng thỏa mãn:
            </p>
            <div className="equation-set equation-set--compact">
              <M>
                u<sub>5</sub> − u<sub>2</sub> = 168
              </M>
              <M>
                u<sub>7</sub> − u<sub>4</sub> = 1512
              </M>
            </div>
            <p className="subquestion">
              a) Tìm số hạng đầu và công bội của cấp số nhân.
              <br />
              b) Số 1458 là số hạng thứ mấy của cấp số nhân?
            </p>
          </>
        ),
        answer: (
          <div className="answer-lines">
            <span>
              a) <M>u<sub>1</sub> = 2</M>, <M>q = −3</M>
            </span>
            <span>
              b) <M>n = 7</M>
            </span>
          </div>
        ),
      },
      {
        id: "03",
        title: "Bài 3",
        prompt: (
          <p>
            Tổng ba số hạng liên tiếp của một cấp số cộng là 42. Nếu lấy số thứ hai
            trừ đi 2 và số thứ ba trừ đi 2 thì ba số đó lập thành một cấp số nhân.
            Tính tích ba số đó, biết số hạng đầu có giá trị nhỏ hơn 10.
          </p>
        ),
        answer: <M>2240</M>,
      },
      {
        id: "04",
        title: "Bài 4",
        prompt: (
          <p>
            Cho cấp số nhân có các số hạng lần lượt là <M>¼; ½; 1; …; 256</M>.
            Tính tổng <M>S</M> của tất cả các số hạng của cấp số nhân đã cho.
          </p>
        ),
        answer: <M>2047/4 = 511,75</M>,
      },
      {
        id: "05",
        title: "Bài 5",
        prompt: (
          <p>
            Biết một cấp số nhân có số hạng đầu bằng 4, số hạng thứ hai bằng 12
            và số hạng cuối bằng 972. Tính tổng tất cả các số hạng của cấp số nhân
            đó.
          </p>
        ),
        answer: <M>1456</M>,
      },
      {
        id: "06",
        title: "Bài 6",
        prompt: (
          <p>
            Cho cấp số nhân <M>(u<sub>n</sub>)</M> biết <M>u<sub>1</sub> = 3</M>,{" "}
            <M>u<sub>5</sub> = 48</M> và tổng <M>S<sub>n</sub> = u<sub>1</sub> +
            u<sub>2</sub> + … + u<sub>n</sub> = 381</M>. Tìm <M>n</M>, biết cấp số
            nhân có công bội dương.
          </p>
        ),
        answer: <M>n = 7</M>,
      },
      {
        id: "07",
        title: "Bài 7",
        prompt: (
          <p>
            Dân số của nước ta tính đến tháng 12 năm 2021 là 98,5 triệu người. Nếu
            tỉ lệ tăng trưởng dân số trung bình hằng năm là 1,2% thì dân số nước ta
            vào tháng 12 năm 2032 là bao nhiêu người? Tính theo đơn vị triệu
            người, làm tròn đến hàng đơn vị.
          </p>
        ),
        answer: (
          <>
            <M>112,31 → 112</M> triệu người
          </>
        ),
      },
      {
        id: "08",
        title: "Bài 8",
        prompt: (
          <p>
            Ông Minh gửi số tiền 150 triệu đồng vào một ngân hàng với hình thức lãi
            kép, kì hạn 12 tháng, lãi suất 6%/năm. Giả sử trong khoảng thời gian gửi
            tiền ông Minh không rút tiền ra và lãi suất không thay đổi, hỏi sau 10
            năm thì tổng số tiền cả vốn lẫn lãi mà ông nhận được là bao nhiêu? Đơn
            vị: đồng, tính kết quả gần đúng đến hàng trăm.
          </p>
        ),
        answer: <M>268.627.200 đồng</M>,
      },
      {
        id: "09",
        title: "Bài 9",
        prompt: (
          <p>
            Kết quả của tổng sau theo <M>n</M>:
            <br />
            <M>S<sub>n</sub> = 7 + 77 + 777 + …</M> (số hạng cuối gồm n chữ số
            7) có dạng <M>a(10<sup>n</sup> − b)/81 − 7n/9</M>, với <M>a, b</M> là
            các số tự nhiên. Giá trị của <M>P = a − 30b</M> bằng bao nhiêu?
          </p>
        ),
        answer: <M>P = 40</M>,
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
              Tìm số hạng đầu của cấp số nhân <M>(u<sub>n</sub>)</M>, biết:
            </p>
            <div className="equation-set">
              <M>
                u<sub>5</sub> + u<sub>2</sub> = 336
              </M>
              <M>
                u<sub>6</sub> − u<sub>4</sub> = 864
              </M>
            </div>
          </>
        ),
        answer: (
          <M>
            u<sub>1</sub> = 4
          </M>
        ),
      },
      {
        id: "02",
        title: "Bài 2",
        points: "3 điểm",
        prompt: (
          <>
            <p>
              Cho cấp số nhân <M>(u<sub>n</sub>)</M> có công bội <M>q &lt; 2</M> và
              các số hạng thỏa mãn:
            </p>
            <div className="equation-set equation-set--compact">
              <M>
                u<sub>5</sub> − u<sub>2</sub> = −54
              </M>
              <M>
                u<sub>7</sub> − u<sub>4</sub> = −216
              </M>
            </div>
            <p className="subquestion">
              a) Tìm số hạng đầu và công bội của cấp số nhân.
              <br />
              b) Số −768 là số hạng thứ mấy của cấp số nhân?
            </p>
          </>
        ),
        answer: (
          <div className="answer-lines">
            <span>
              a) <M>u<sub>1</sub> = −3</M>, <M>q = −2</M>
            </span>
            <span>
              b) <M>n = 9</M>
            </span>
          </div>
        ),
      },
    ],
  },
];