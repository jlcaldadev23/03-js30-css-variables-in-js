const sansSerifFonts = document.querySelectorAll(
  `input[name="sans-serif-font"]`
);

function handleUpdate(sansSerifFont) {
  console.log(sansSerifFont);
  if (sansSerifFont.path[0].checked) {
    let fontFamily = sansSerifFont.path[0].value;
    document
      .querySelector(".tg-output-box")
      .style.setProperty(`--font_family`, fontFamily);

    // document.documentElement.style.setProperty(`--font_family`, fontFamily);
    // );
    console.log(fontFamily);
  }
}

// sansSerifFonts.console.log(sansSerifFonts);

sansSerifFonts.forEach((sansSerifFont) => {
  addEventListener("change", handleUpdate);
});
