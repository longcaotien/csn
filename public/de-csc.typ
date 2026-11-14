#set page(paper: "a4", margin: (x: 1.55cm, y: 1.45cm))
#set text(font: "Libertinus Serif", size: 10pt, lang: "vi", fill: rgb("#263139"))
#set par(justify: true, leading: 0.68em)
#set heading(numbering: none)

#let ink = rgb("#263139")
#let muted = rgb("#777E80")
#let accent = rgb("#A4583C")
#let pale = rgb("#F5F1EA")
#let divider = rgb("#E4E0D8")

#let question-row(label, prompt, answer) = {
  grid(
    columns: (1fr, 4.1cm),
    gutter: 0.55cm,
    [
      #text(font: "Libertinus Sans", size: 8pt, weight: "bold", fill: accent)[#label]
      #v(0.1cm)
      #prompt
    ],
    [
      #block(fill: pale, inset: (x: 0.25cm, y: 0.18cm), radius: 2pt)[
        #text(font: "Libertinus Sans", size: 6.5pt, weight: "bold", fill: accent)[ĐỐI CHIẾU]
        #v(0.08cm)
        #answer
      ]
    ],
  )
  #v(0.16cm)
  #line(length: 100%, stroke: 0.5pt + divider)
  #v(0.16cm)
}

#let exam-heading(title, subtitle) = {
  #text(font: "Libertinus Sans", size: 7pt, weight: "bold", fill: accent)[PHIẾU ÔN TẬP · CẤP SỐ]
  #v(0.1cm)
  #text(font: "Libertinus Sans", size: 21pt, weight: "bold", fill: ink)[#title]
  #v(0.08cm)
  #text(size: 9pt, fill: muted)[#subtitle]
  #v(0.32cm)
  #grid(
    columns: (1fr, 4.1cm),
    gutter: 0.55cm,
    [#text(font: "Libertinus Sans", size: 7pt, weight: "bold", fill: muted)[NỘI DUNG CÂU HỎI]],
    [#text(font: "Libertinus Sans", size: 7pt, weight: "bold", fill: muted)[ĐÁP SỐ ĐỂ ĐỐI CHIẾU]],
  )
  #v(0.12cm)
  #line(length: 100%, stroke: 0.6pt + divider)
  #v(0.12cm)
}

#align(center)[
  #text(font: "Libertinus Sans", size: 7.5pt, weight: "bold", fill: accent)[TÀI LIỆU ÔN TẬP · BẢN GÕ LẠI]
  #v(0.12cm)
  #text(font: "Libertinus Sans", size: 25pt, weight: "bold", fill: ink)[Dãy số và cấp số nhân]
  #v(0.1cm)
  #text(size: 9pt, fill: muted)[Giữ nguyên câu hỏi, lược lời giải viết tay, đặt đáp số ở cột bên cạnh.]
]
#v(0.48cm)

#exam-heading("ĐỀ SỐ 1", "Chín bài về cấp số cộng, cấp số nhân và ứng dụng.")

#question-row("Bài 1", [
  Tìm số hạng đầu của cấp số nhân $(u_n)$, biết:
  #v(0.08cm)
  #h(0.3cm) $u_5 + u_2 = 54$
  #linebreak()
  #h(0.3cm) $u_6 - u_4 = 72$
], [$u_1 = 3$])

#question-row("Bài 2", [
  Cho cấp số nhân $(u_n)$ có công bội $q < 2$ và các số hạng thỏa mãn:
  #v(0.08cm)
  #h(0.3cm) $u_5 - u_2 = 168$
  #linebreak()
  #h(0.3cm) $u_7 - u_4 = 1512$
  #v(0.08cm)
  a) Tìm số hạng đầu và công bội của cấp số nhân.
  #linebreak()
  b) Số 1458 là số hạng thứ mấy của cấp số nhân?
], [a) $u_1 = 2$, $q = -3$; b) $n = 7$.])

#question-row("Bài 3", [
  Tổng ba số hạng liên tiếp của một cấp số cộng là 42. Nếu lấy số thứ hai trừ đi 2 và số thứ ba trừ đi 2 thì ba số đó lập thành một cấp số nhân. Tính tích ba số đó, biết số hạng đầu có giá trị nhỏ hơn 10.
], [$2240$])

#question-row("Bài 4", [
  Cho cấp số nhân có các số hạng lần lượt là $frac(1, 4); frac(1, 2); 1; dots; 256$. Tính tổng $S$ của tất cả các số hạng của cấp số nhân đã cho.
], [$2047/4 = 511.75$])

#question-row("Bài 5", [
  Biết một cấp số nhân có số hạng đầu bằng 4, số hạng thứ hai bằng 12 và số hạng cuối bằng 972. Tính tổng tất cả các số hạng của cấp số nhân đó.
], [$1456$])

#question-row("Bài 6", [
  Cho cấp số nhân $(u_n)$ biết $u_1 = 3$, $u_5 = 48$ và tổng $S_n = u_1 + u_2 + dots + u_n = 381$. Tìm $n$, biết cấp số nhân có công bội dương.
], [$n = 7$])

#question-row("Bài 7", [
  Dân số của nước ta tính đến tháng 12 năm 2021 là 98,5 triệu người. Nếu tỉ lệ tăng trưởng dân số trung bình hằng năm là 1,2% thì dân số nước ta vào tháng 12 năm 2032 là bao nhiêu người? Tính theo đơn vị triệu người, làm tròn đến hàng đơn vị.
], [112,31 triệu người, làm tròn thành 112 triệu người.])

#question-row("Bài 8", [
  Ông Minh gửi số tiền 150 triệu đồng vào một ngân hàng với hình thức lãi kép, kì hạn 12 tháng, lãi suất 6%/năm. Giả sử trong khoảng thời gian gửi tiền ông Minh không rút tiền ra và lãi suất không thay đổi, hỏi sau 10 năm thì tổng số tiền cả vốn lẫn lãi mà ông nhận được là bao nhiêu? Đơn vị: đồng, tính kết quả gần đúng đến hàng trăm.
], [268 627 200 đồng.])

#question-row("Bài 9", [
  Kết quả của tổng theo $n$, $S_n = 7 + 77 + 777 + dots$ (số hạng cuối gồm $n$ chữ số 7), có dạng $a(10^n - b)/81 - 7n/9$, với $a, b$ là các số tự nhiên. Giá trị của $P = a - 30b$ bằng bao nhiêu?
], [$P = 40$])

#pagebreak()

#exam-heading("ĐỀ SỐ 2", "Hai câu được nhìn thấy trong ảnh; giữ nguyên số điểm của đề.")

#question-row("Bài 1 (2 điểm)", [
  Tìm số hạng đầu của cấp số nhân $(u_n)$, biết:
  #v(0.08cm)
  #h(0.3cm) $u_5 + u_2 = 336$
  #linebreak()
  #h(0.3cm) $u_6 - u_4 = 864$
], [$u_1 = 4$])

#question-row("Bài 2 (3 điểm)", [
  Cho cấp số nhân $(u_n)$ có công bội $q < 2$ và các số hạng thỏa mãn:
  #v(0.08cm)
  #h(0.3cm) $u_5 - u_2 = -54$
  #linebreak()
  #h(0.3cm) $u_7 - u_4 = -216$
  #v(0.08cm)
  a) Tìm số hạng đầu và công bội của cấp số nhân.
  #linebreak()
  b) Số -768 là số hạng thứ mấy của cấp số nhân?
], [a) $u_1 = -3$, $q = -2$; b) $n = 9$.])

#v(0.25cm)
#line(length: 100%, stroke: 0.6pt + divider)
#v(0.18cm)
#align(center)[
  #text(size: 8pt, fill: muted)[Bản gõ lại từ ảnh cung cấp · Chỉ hiển thị đề bài và đáp số, không kèm lời giải.]
]