// index.js

// Hàm tính bình phương của hai số
function calculateSquare(number1, number2) {
    const square1 = Math.pow(number1, 2);
    const square2 = Math.pow(number2, 2);
  
    return {
      square1,
      square2
    };
  }
  
  // Nhận giá trị từ dòng lệnh
  const args = process.argv.slice(2);
  const number1 = parseFloat(args[0]);
  const number2 = parseFloat(args[1]);
  
  // Kiểm tra xem đầu vào có hợp lệ không
  if (isNaN(number1) || isNaN(number2)) {
    console.log('Vui lòng nhập hai số hợp lệ.');
  } else {
    // Tính bình phương và hiển thị kết quả
    const { square1, square2 } = calculateSquare(number1, number2);
    console.log(`Bình phương của ${number1} là: ${square1}`);
    console.log(`Bình phương của ${number2} là: ${square2}`);
  }
  