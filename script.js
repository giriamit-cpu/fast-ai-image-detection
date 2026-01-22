const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const result = document.getElementById("result");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  preview.src = URL.createObjectURL(file);
});

function detect() {
  // Demo logic (replace with real model later)
  const random = Math.random();

  if (random > 0.5) {
    result.innerText = "🤖 AI Generated Image";
    result.style.color = "red";
  } else {
    result.innerText = "📷 Real Image";
    result.style.color = "green";
  }
      }
