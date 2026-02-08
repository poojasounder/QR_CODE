const resumeUrl = "https://drive.google.com/file/d/1JEAMIAtuT3z0MasIIRrSkuojgcKOOeXx/view?usp=sharing";
const canvas = document.getElementById("qrCode");
const openResumeBtn = document.getElementById("openResumeBtn");

QRCode.toCanvas(canvas, resumeUrl, {
    width: 280
},(err)=> {
    if (err) console.error(err);
});

openResumeBtn.href = resumeUrl;