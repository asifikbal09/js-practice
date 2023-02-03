function countZeros ( binary_num ) {
    let zero = 0;
  while (binary_num>=1) {
      let rem = binary_num % 10;
    if (rem==0) {
      zero++;
    }
    binary_num = binary_num / 10;
    binary_num = Math.floor(binary_num);
  }
    return zero;
  }
  
  let allZeros=countZeros(10101);
  console.log(allZeros)