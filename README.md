# Prepare

- IDE: Visual Studio Code
- Language: Typescript
- Framework: Playwright

---

# Cách cài đặt

## **CÀI ĐẶT**

- **Link source code**: [Download Repository](https://github.com/minhducc2003/final_selenium/archive/refs/heads/master.zip)
- **Chrome** version 114.0.5735.110.
- **⚠️ Cảnh báo:** *Cần phải gỡ bản hiện tại đang sử dụng*
  
  - Ubuntu: [Tải xuống](https://bestim.org/download.html?dlm-dp-dl=13218)
  - Windows: [Tải xuống](https://bestim.org/download.html?dlm-dp-dl=13216)
- **Java 21** (java 17 mình chưa thử)
  - Ubuntu: [Tải xuống](https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.tar.gz)
  - Windows: [Tải xuống](https://download.oracle.com/java/21/latest/jdk-21_windows-x64_bin.exe)
  - Hướng dẫn cài đặt java 21: [Hướng dẫn](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-install-Java-21)

> Nếu máy bạn đã có java hãy kiểm tra bằng lệnh `java -version`.

- **Intellij** có nhiều phiên bản, hiện tại mình đang dùng bản 2023.2: [Tải xuống](https://www.jetbrains.com/idea/download/other.html)

---

## **How to run**

1. Mở source code bằng Intellij.
2. Mở `pom.xml` và thực hiện Load Maven changes bằng `Ctrl + Shift + O` hoặc click vào icon nhỏ ở góc màn hình trên bên phải.(warning các bạn bỏ qua nhé, còn đỏ mới là vấn đề :) ).
> Nếu không có thì bỏ qua

<div align="center">
  <img src="https://github.com/user-attachments/assets/01142e97-0e9a-461d-bbb2-de1fec6e6ace" alt="image">
</div>

3. Tìm file `RunTestSuite.xml` trong source và tiến hành chạy bằng `Run` (hoặc `Ctrl + Shift + F10`).
> Nếu không hiện Run, hãy thay đổi pom.xml như trong hướng dẫn video
        
---

## **Config**

<div align="center">
  <img src="https://github.com/user-attachments/assets/f3265fb9-6cef-4fe4-b964-85cfccad7116" alt="image">
</div>

---

# **KẾT QUẢ CHẠY**

- Mình thử chạy `testcases.DangNhap.DangNhapWebBanHang`, sẽ có 7 testcase (có thể check trong file `/test/java/testcases/DangNhapWebBanHang`).
- Chương trình sẽ tự động mở Chrome và truy cập vào trang web Maybi.com, thực hiện đăng nhập, tự động điền tài khoản mật khẩu và đăng xuất.

<div align="center">
  <img src="https://github.com/user-attachments/assets/f4f804b0-9127-4f0c-95f7-5a81b60d18ca" alt="Screenshot 1">
  <img src="https://github.com/user-attachments/assets/dc8da366-40db-4ab6-81d7-f8d02b0f27eb" alt="Screenshot 2">
</div>

- Chạy thành công sẽ pass 7/7 testcases đăng nhập
<div align="center">
  <img src="https://github.com/user-attachments/assets/d999bf59-fc8f-4b7e-9f25-c889fd863870" alt="Screenshot 3">
</div>

- Trong quá trình chạy, có thể gặp lỗi do trang web chặn spam:
<div align="center">
  <img src="https://github.com/user-attachments/assets/421ede12-3362-46b3-a967-c94dea2a8f5d" alt="Error Screenshot">
</div>

### **Cách xử lý**

- Có thể run lại các testcases fail để thử lại hoặc
- Tăng `Thread.sleep` trong `/test/java/pages/DangNhapPage/`.

<div align="center">
  <img src="https://github.com/user-attachments/assets/443384ad-6b0c-49b7-89ce-cfce49f976e8" alt="Solution Screenshot">
</div>
