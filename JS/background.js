const images = ["0.jpeg", "1.jpeg", "2.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage); // html을 추가
// append는 가장뒤에 prepend는 가장 앞에 생성
console.dir(document.body);
bgImage.id = "bgImage";
