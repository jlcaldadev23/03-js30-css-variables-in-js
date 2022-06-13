// const sansSerifFonts = document.querySelectorAll(`input[name="font"]`);
// const fontSize = document.querySelector(`input[name="font-size"]`);

// function handleUpdate(sansSerifFont) {
//   console.log(sansSerifFont);
//   if (sansSerifFont.path[0].checked) {
//     let fontFamily = sansSerifFont.path[0].value;
//     document
//       .querySelector(".tg-output-box")
//       .style.setProperty(`--font_family`, fontFamily);

//     // document.documentElement.style.setProperty(`--font_family`, fontFamily);
//     // );
//     console.log(fontFamily);
//   }
// }

// // sansSerifFonts.console.log(sansSerifFonts);

// sansSerifFonts.forEach((sansSerifFont) => {
//   addEventListener("change", handleUpdate);
// });

const inputs = document.querySelectorAll(`input`);
console.log(inputs);

function handleUpdate() {
  const unit = this.dataset.unit || "";
  const type = this.dataset.type;
  const value = this.value;
  console.log(type);
  document
    .querySelector(".tg-output-box")
    .style.setProperty(`--${type}`, `${value}${unit}`);
  console.log(this);
}

inputs.forEach((input) => {
  input.addEventListener("change", handleUpdate);
});
// inputs.forEach((input) => {
//   input.addEventListener("mousemove", handleUpdate);
// });

// inputs.forEach((input) => {
//   addEventListener("mousemove", handleUpdate);
// });

function updateBackground(e) {
  console.log(e.type);
  if ((e.type = "color")) {
    console.log(e.value);
  }

  const unit = e.dataset.unit || "";
  const type = e.dataset.type;
  const value = e.value;
  document
    .querySelector(".tg-output-box")
    .style.setProperty(`--${type}`, `${value}${unit}`);
}
