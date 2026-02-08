const RESUME_URL = "https://drive.google.com/file/d/1JEAMIAtuT3z0MasIIRrSkuojgcKOOeXx/view?usp=sharing";
const QR_API_BASE = "https://api.qrserver.com/v1/create-qr-code/";

document.addEventListener('DOMContentLoaded', () => {
    const qrImage = document.getElementById('qr-image');
    const loader = document.getElementById('loader');
    const btnOpen = document.getElementById('btn-open');
    const btnDownload = document.getElementById('btn-download');

    // Set resume URL for the open button
    btnOpen.href = RESUME_URL;

    // Generate QR Code URL
    const qrSize = "300x300";
    const qrUrl = `${QR_API_BASE}?size=${qrSize}&data=${encodeURIComponent(RESUME_URL)}&format=png&margin=10`;

    // Load QR Code
    qrImage.onload = () => {
        loader.style.display = 'none';
        qrImage.style.display = 'block';
    };

    qrImage.onerror = () => {
        loader.textContent = "Failed to load QR code. Please refresh.";
        loader.style.color = "#ff4d4d";
    };

    qrImage.src = qrUrl;

    // Download functionality
    btnDownload.addEventListener('click', async () => {
        try {
            const response = await fetch(qrUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'Pooja_Resume_QR.png';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download QR code. You can try right-clicking the image and selecting "Save Image As".');
        }
    });
});
