# Format Questions Using Typst

Ứng dụng web (React + Vite + Tailwind CSS) giúp định dạng đề thi/câu hỏi bằng Typst: xem trước, xem mã, in và tải file `.typ`.

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
