// scripts/generate-qr.ts
import path from 'path';
// @ts-ignore
import QRCode from 'qrcode';

const generateQRCode = async () => {
  try {
    const url = 'https://glorious-ryc.netlify.app/';
    const outputPath = path.resolve('./public/qr-code.png');

    await QRCode.toFile(outputPath, url, {
      width: 300,                 // QR code image width
      margin: 2,                  // small margin
      color: {
        dark: '#3B82F6',          // QR dark color
        light: '#FFFFFF',         // QR background
      },
      errorCorrectionLevel: 'H',  // high correction
    });

    console.log('QR code generated at:', outputPath);
  } catch (err) {
    console.error('Failed to generate QR code:', err);
  }
};

generateQRCode();
