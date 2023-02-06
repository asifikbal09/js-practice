function temperatureConverter(valNum) {
    let cel = (valNum-32)/1.8;
    cel = cel.toFixed(2);
    cel = parseFloat(cel);
    return cel;
  }
  let tem = temperatureConverter(463);
  console.log(tem);