const ROLES = {
    'data-engineer': {
        name: 'Data Engineer',
        url: 'https://drive.google.com/uc?export=download&id=1qa_HfFJ0pzDrQQcSiPo_IMm2KDdVCcxD'
    },
    'software-engineer': {
        name: 'Software Engineer',
        url: 'https://drive.google.com/uc?export=download&id=1JEAMIAtuT3z0MasIIRrSkuojgcKOOeXx'
    },
    'data-scientist': {
        name: 'Data Scientist',
        url: 'https://drive.google.com/uc?export=download&id=1d3i06d1xkQNC3IO1I4uXMKrg5PdhSB2Y'
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
    const btnDownload = document.getElementById('btn-download');

    let currentRoleUrl = "";

    // Handle role selection
    roleCards.forEach(card => {
        card.addEventListener('click', () => {
            const roleKey = card.dataset.role;
            const roleData = ROLES[roleKey];
            
            showQRView(roleKey, roleData);
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

    function showQRView(roleKey, roleData) {
        roleNameDisplay.textContent = roleData.name;
        currentRoleUrl = roleData.url;

        // Determine the base URL for the choice page (connect.html)
        const basePath = window.location.href.split('index.html')[0].split('?')[0];
        const connectUrl = `${basePath}connect.html?role=${encodeURIComponent(roleKey)}`;

        // Generate QR Code URL pointing to the connect page choice
        const qrSize = "300x300";
        const qrUrl = `${QR_API_BASE}?size=${qrSize}&data=${encodeURIComponent(connectUrl)}&format=png&margin=10`;

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
