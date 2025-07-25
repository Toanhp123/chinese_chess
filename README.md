♟️ Chinese Chess AI - React Frontend
Một ứng dụng web chơi Cờ Tướng viết bằng ReactJS, có tích hợp AI đối thủ sử dụng thuật toán Minimax kết hợp cắt tỉa Alpha-Beta để tăng hiệu quả tìm kiếm nước đi.

🚀 Tính năng
🎮 Giao diện cờ tướng tương tác bằng React.

    🧠 AI tự động đánh bằng thuật toán Minimax + Alpha-Beta Pruning.

    🔄 Undo / Redo các bước đi.

    ♻️ Reset bàn cờ, chơi lại từ đầu.

    🌗 Phân biệt quân đen – đỏ rõ ràng.

    ✅ Hỗ trợ cho PC.

🧠 Thuật toán
AI sử dụng thuật toán Minimax với giới hạn độ sâu.
Để tăng hiệu quả, tích hợp thêm Alpha-Beta Pruning giúp loại bỏ nhánh không cần thiết.

function minimax(position, depth, alpha, beta, isMaximizingPlayer)
depth: số tầng tìm kiếm.

alpha, beta: giới hạn cắt tỉa.

Đánh giá nước đi bằng hàm lượng giá dựa trên giá trị quân cờ

⚙️ Cài đặt và chạy
bash
Copy
Edit

# 1. Clone repo

git clone https://github.com/Toanhp123/chinese_chess.git

# 2. Cài đặt dependencies

npm install

# 3. Khởi động ứng dụng

npm run dev
Sau đó mở trình duyệt tại: http://localhost:5173/

📌 Công nghệ sử dụng
⚛️ ReactJS (with Hooks + Context API)

    🎨 CSS Modules

    ♟️ Dùng xiangqi.js

💡 TODO / Gợi ý nâng cấp
🎭 Thêm chế độ 2 người chơi

    🌐 Triển khai backend lưu ván cờ

    ☁️ Đưa lên Vercel/Netlify

    🔧 Tối ưu hiệu năng thuật toán AI

    📱 Giao diện mobile friendly
