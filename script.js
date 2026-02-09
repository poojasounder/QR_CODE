const ROLES = {
    'data-engineer': {
        name: 'Data Engineer',
        url: 'https://drive.google.com/file/d/1qa_HfFJ0pzDrQQcSiPo_IMm2KDdVCcxD/view?usp=sharing' // Placeholder
    },
    'software-engineer': {
        name: 'Software Engineer',
        url: 'https://drive.google.com/file/d/1JEAMIAtuT3z0MasIIRrSkuojgcKOOeXx/view?usp=sharing'
    },
    'data-scientist': {
        name: 'Data Scientist',
        url: 'https://drive.google.com/file/d/1d3i06d1xkQNC3IO1I4uXMKrg5PdhSB2Y/view?usp=sharing' // Placeholder
    }
};

const QR_API_BASE = "https://api.qrserver.com/v1/create-qr-code/";

document.addEventListener('DOMContentLoaded', () => {
    const selectionView = document.getElementById('selection-view');
    const qrView = document.getElementById('qr-view');
    const roleCards = document.querySelectorAll('.role-card');
    const btnBack = document.getElementById('btn-back');
    
    const qrImage = document.getElementById('qr-image');
    const loader = document.getElementById('loader');
    const roleNameDisplay = document.getElementById('selected-role-name');
    const btnOpen = document.getElementById('btn-open');
    const btnDownload = document.getElementById('btn-download');

    let currentRoleUrl = "";

    // Handle role selection
    roleCards.forEach(card => {
        card.addEventListener('click', () => {
            const roleKey = card.dataset.role;
            const roleData = ROLES[roleKey];
            
            showQRView(roleData);
        });
    });

    // Handle back button
    btnBack.addEventListener('click', () => {
        qrView.classList.add('hidden');
        selectionView.classList.remove('hidden');
        // Clear previous QR to prevent flicker next time
        qrImage.style.display = 'none';
        loader.style.display = 'block';
    });

    function showQRView(roleData) {
        roleNameDisplay.textContent = roleData.name;
        currentRoleUrl = roleData.url;
        btnOpen.href = currentRoleUrl;

        // Generate QR Code URL
        const qrSize = "300x300";
        const qrUrl = `${QR_API_BASE}?size=${qrSize}&data=${encodeURIComponent(currentRoleUrl)}&format=png&margin=10`;

        // Load QR Code
        qrImage.src = qrUrl;
        
        selectionView.classList.add('hidden');
        qrView.classList.remove('hidden');
    }

    qrImage.onload = () => {
        loader.style.display = 'none';
        qrImage.style.display = 'block';
    };

    qrImage.onerror = () => {
        loader.textContent = "Failed to load QR code.";
        loader.style.color = "#ff4d4d";
    };

    // Download functionality
    btnDownload.addEventListener('click', async () => {
        try {
            const response = await fetch(qrImage.src);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `Pooja_${roleNameDisplay.textContent.replace(' ', '_')}_Resume_QR.png`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download QR code.');
        }
    });
});
