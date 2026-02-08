cat << 'EOF' > script.js
const RESUME_URL = "https://drive.google.com/file/d/1JEAMIAtuT3z0MasIIRrSkuojgcKOOeXx/view?usp=sharing";

// Free QR generator endpoint that returns an image.
// This avoids CDN/library issues and works reliably on GitHub Pages.
const qrEndpoint = "https://api.qrserver.com/v1/create-qr-code/";
const size = "280x280";

const qrImg = document.getElementById("qrImg");
const openBtn = document.getElementById("openResumeBtn");

openBtn.href = RESUME_URL;

// Encode resume URL safely into query param
const qrSrc = `${qrEndpoint}?size=${size}&data=${encodeURIComponent(RESUME_URL)}`;
qrImg.src = qrSrc;
EOF
