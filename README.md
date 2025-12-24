# Em Học Tự Lập 🌟

Ứng dụng web giáo dục giúp học sinh lớp 3 phát triển **năng lực tự lập** và **phòng tránh bạo lực học đường**.

![Phiên bản](https://img.shields.io/badge/version-1.0.0-blue)
![Ngôn ngữ](https://img.shields.io/badge/language-Vietnamese-green)
![License](https://img.shields.io/badge/license-MIT-orange)

## 🎯 Tính Năng

### 3 Vai Trò Người Dùng
- **👦 Học sinh**: Học bài, làm tình huống, nhận huy hiệu
- **👨‍👩‍👧 Phụ huynh**: Xem tiến độ con, gợi ý đồng hành
- **👩‍🏫 Giáo viên**: Tài liệu giảng dạy, theo dõi lớp học

### 4 Module Học Tập
1. **📖 Bài Học** - 8 bài học ngắn về tự lập và an toàn
2. **❓ Tình Huống** - 10 tình huống thực tế để luyện tập
3. **😌 Góc Bình Tĩnh** - 3 bước giữ bình tĩnh với bài tập thở
4. **🆘 Báo Người Lớn** - Hướng dẫn khi em cần trợ giúp

### Tính Năng Khác
- ✅ Theo dõi tiến độ với thanh progress bar
- 🏆 Hệ thống 10 huy hiệu thành tích
- 📱 Thiết kế responsive, thân thiện di động
- 🔒 An toàn - Không thu thập dữ liệu cá nhân

## 🚀 Cài Đặt & Sử Dụng

### Chạy Local
1. Clone repository:
```bash
git clone https://github.com/username/em-hoc-tu-lap.git
```

2. Mở file `index.html` trong trình duyệt, hoặc dùng live server:
```bash
npx -y live-server
```

### Deploy lên GitHub Pages

1. **Tạo repository** mới trên GitHub

2. **Push code** lên repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/em-hoc-tu-lap.git
git push -u origin main
```

3. **Bật GitHub Pages**:
   - Vào **Settings** > **Pages**
   - Chọn **Source**: Deploy from a branch
   - Chọn **Branch**: `main` và folder `/ (root)`
   - Click **Save**

4. **Truy cập** tại: `https://username.github.io/em-hoc-tu-lap/`

## 📁 Cấu Trúc Thư Mục

```
em-hoc-tu-lap/
├── index.html          # Trang chính
├── css/
│   └── style.css       # Stylesheet
├── js/
│   ├── app.js          # Logic ứng dụng
│   ├── data.js         # Nội dung bài học & tình huống
│   └── storage.js      # Quản lý localStorage
├── docs/
│   └── scenarios.md    # 10 tình huống với đáp án
└── README.md           # Hướng dẫn (file này)
```

## 📚 Nội Dung Giáo Dục

### Năng Lực Tự Lập
| Bài | Chủ Đề |
|-----|--------|
| 1 | Chuẩn bị đồ dùng đi học |
| 2 | Quản lý thời gian ở nhà |
| 3 | Giải quyết khi quên đồ |
| 4 | Hòa giải với bạn |

### Phòng Bạo Lực Học Đường
| Bài | Chủ Đề |
|-----|--------|
| 5 | Nhận biết bạo lực học đường |
| 6 | Nói "Không" với bắt nạt |
| 7 | Báo người lớn đúng cách |
| 8 | Giúp bạn bị bắt nạt |

## 🎨 Thiết Kế

- **Font chữ**: Nunito (dễ đọc, thân thiện)
- **Màu sắc**: Xanh lá, cam, tím - tone sáng và ấm
- **Kích thước chữ**: 18px (lớn hơn tiêu chuẩn)
- **Icon**: Emoji đơn giản, dễ hiểu

## 🔐 Bảo Mật & Riêng Tư

- ✅ **Không thu thập** dữ liệu cá nhân
- ✅ **Không gửi** thông tin ra bên ngoài
- ✅ Dữ liệu tiến độ lưu **cục bộ** trên thiết bị (localStorage)
- ✅ Có thể xóa dữ liệu bất cứ lúc nào

## 📄 License

MIT License - Tự do sử dụng, chỉnh sửa và phân phối.

## 👥 Đóng Góp

Mọi đóng góp đều được hoan nghênh! Hãy tạo Pull Request hoặc Issue nếu bạn có ý tưởng cải tiến.

---

Made with ❤️ for Vietnamese 3rd graders
