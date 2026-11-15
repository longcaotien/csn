# Mạch Số · Cấp số & dãy số

Trang web (React + Vite + Tailwind CSS) trình bày phiếu ôn tập Toán 11 về cấp số cộng, cấp số nhân và dãy số: xem đề, bật/tắt đáp số và in ra A4/PDF. Công thức và con số được dựng bằng LaTeX (KaTeX); viết công thức trong `src/content.tsx` bằng `<M t="..." />` (trong dòng) và `<D t="..." />` (riêng dòng).

## Chạy cục bộ
```bash
npm install
npm run dev
```

## Build
```bash
npm run build   # kết quả trong dist/
```

## Triển khai
Push lên nhánh `main`, bật **Settings → Pages → Source: GitHub Actions**; workflow `.github/workflows/deploy.yml` sẽ tự build và deploy.
