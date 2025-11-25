# Tạo Test Case (TC)

## Tạo TC từ hình ảnh
Thử mang cùng 1 ảnh qua các công cụ khác nhau như [ChatGPT](https://chatgpt.com/) hay [Claude.ai](https://claude.ai/) hay [Google Gemini](https://gemini.google.com/) xem kết quả thế nào? Có thể dùng hình ảnh `Screenshot-Login-screen.png` để thử nghiệm.

## Tạo TC từ text

### Chat trực tiếp
Cũng thử qua các công cụ khác nhau như trên, cộng thêm **Github Copilot**.
Thử tối ưu hóa prompt bằng các sử dụng các prompt framework như RISE.

### Dùng custom GPT
- Tạo **custom GPT** mới trên ChatGPT, sau đó áp dụng prompt framework RISE.
- Tối ưu hóa prompt bằng cách đặt ít mục tiêu và càng cụ thể càng tốt. Tham khảo file `Agent-Instructions-1.txt `và `Agent-Instructions-2.txt`.
- Thử với các loại phong cách viết US khác nhau. Tham khảo file `US-Login.txt `và `US-Signup.txt`.
- Tối ưu hóa hơn nữa bằng cách sử dụng định dạng `Markdown`. Tham khảo file `Agent-Instructions.md`.

## Automate luồng tạo TC & TR bằng WorkFlow

### Cài đặt n8n
Yêu cầu: máy của bạn đã có Docker Desktop cài đặt sẵn.  
1. Xem [Hướng dẫn n8n Docker](https://docs.n8n.io/hosting/installation/docker/), hoặc hỏi ChatGPT `cách cài n8n qua docker desktop`, hoặc xem sample project ở thư mục `n8n`. Khởi động và mở n8n trên web.
2. Tạo flow mới, sau đó thêm Node `Manual Trigger`
3. Thêm Node `Jira Software` và các thông tin để thưc hiện query issue(s).
4. Thêm Node `OpenAI` và các thông tin nếu muốn thực hiện chat với ChatGPT.
5. Thêm Node `HTTP Request` và các thông tin nếu muốn thực hiện chat với Custom GPT.
6. Thêm Node `Gemini` và các thông tin nếu muốn thực hiện chat với Google Gemini.

#### Lấy API Token của Jira: https://id.atlassian.com/manage-profile/security/api-tokens

#### Lấy API Token của OpenAI ChatGPT: https://platform.openai.com/api-keys

#### Lấy API Token của Google Gemini: https://aistudio.google.com/app/u/2/api-keys

#### Truy cập Jira ticket: [Ở đây](https://huythieutech.atlassian.net/browse/SCRUM-1)