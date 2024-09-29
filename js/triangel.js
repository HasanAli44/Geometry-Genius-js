function triangelCalculateArea() {
  const tringleBaseInput = document.getElementById("triangel-base");
  const triangelBaseText = tringleBaseInput.value;
  const base = parseFloat(triangelBaseText);
  console.log(base);

  // height
  const triangelHeightInput = document.getElementById("triangle-height");
  const triangelHeightText = triangelHeightInput.value;
  const height = parseFloat(triangelHeightText);
  console.log(height);
  //   area
  const area = 0.5 * base * height;
  console.log("area of the triangle is:", area);
  //   display area
  const triangelAreaSpan = document.getElementById("triangle-area");
  triangelAreaSpan.innerText = area;
}

// Ractangle calculate Area
function ractangleCalculateArea() {
  const WidthInput = document.getElementById("ractangel-width");
  WidthText = WidthInput.value;
  const width = parseFloat(WidthText);
  console.log(width);

  // lenght
  const lenghtInput = document.getElementById("ractangel-length");
  lenghtText = lenghtInput.value;
  const lenght = parseFloat(lenghtText);
  console.log(lenght);
  // area
  const area = width * lenght;
  console.log("area of the ractangle is:", area);
  // display area
  const ractangleArea = document.getElementById("ractangle-area");
  ractangleArea.innerText = area;
}
