# Pooja's Resume Hub 🚀

A professional, modern landing page designed to showcase role-specific resumes via dynamic QR codes. Perfect for career fairs, networking events, or physical portfolios.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=github)](https://poojasounder.github.io/QR_CODE/)

## ✨ Features

- **Multi-Role Support**: Tailored for **Data Engineer**, **Software Engineer**, and **Data Scientist** roles.
- **Dynamic QR Generation**: Automatic QR code generation using the [QRServer API](https://goqr.me/api/).
- **Premium UI/UX**:
    - Responsive grid layout for mobile and desktop.
    - Smooth micro-animations and transitions.
- **Action-Oriented**: Recruiters can scan the QR, view the resume directly, or download the QR code for later use.

## 🛠️ Built With

- **HTML5 & Vanilla CSS**: Custom-built styling with a focus on aesthetics and performance.
- **JavaScript (ES6+)**: Dynamic state management and API integration.
- **QRServer API**: Reliable, on-the-fly QR code generation.
- **Google Fonts**: "Outfit" typography for a sleek, modern feel.

## 🚀 How to Use

1. **Visit the Hub**: Open the [live site](https://poojasounder.github.io/QR_CODE/) on any device.
2. **Select a Role**: Click on the card representing the role the recruiter is interested in.
3. **Scan/Download**: The recruiter can scan the QR code instantly, or you can click "Download QR" to save it as a high-quality PNG.

## ⚙️ Customization

To update the resume links for each role, simply edit the `ROLES` configuration in `script.js`:

```javascript
const ROLES = {
    'data-engineer': {
        name: 'Data Engineer',
        url: 'YOUR_GOOGLE_DRIVE_LINK'
    },
    'software-engineer': {
        name: 'Software Engineer',
        url: 'YOUR_GOOGLE_DRIVE_LINK'
    },
    'data-scientist': {
        name: 'Data Scientist',
        url: 'YOUR_GOOGLE_DRIVE_LINK'
    }
};
```

## 📬 Contact

**Pooja Sounder Rajan**
- [GitHub](https://github.com/poojasounder)
- [Resume Hub](https://poojasounder.github.io/QR_CODE/)

---
*Created with ❤️ for professional networking.*
