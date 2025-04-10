
const textInput = document.getElementById("textInput");
const result = document.getElementById("result");
function checkCharacterCount() {
  const text = textInput.value; // Lấy nội dung từ textarea
  const charCount = text.length; // Đếm số ký tự
  result.textContent = `${charCount} ký tự`; // Hiển thị kết quả
}
checkCharacterCount();