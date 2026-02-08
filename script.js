cat << 'EOF' > script.js
const RESUME_URL = "https://drive.google.com/uc?export=download&id=1JEAMIAtuT3z0MasIIRrSkuojgcKOOeXx";

const statusEl = document.getElementById("status");
const canvas = document.getElementById("qr");
const openBtn = document.getElementById("openResumeBtn");

function setStatus(msg) {
  statusEl.textContent = msg;
}

function isValidHttpUrl(s) {
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  if (!isValidHttpUrl(RESUME_URL)) {
    setStatus("⚠️ Invalid resume URL in script.js");
    return;
  }

  openBtn.href = RESUME_URL;

  if (typeof QRCode === "undefined") {
    setStatus("⚠️ QRCode library not loaded (qrcode.min.js missing or not served).");
    return;
  }

  try {
    setStatus("Generating QR...");
    await QRCode.toCanvas(canvas, RESUME_URL, { width: 280, margin: 1 });
    setStatus("");
  } catch (e) {
    console.error(e);
    setStatus("⚠️ Failed to generate QR (see console).");
  }
});
EOF
