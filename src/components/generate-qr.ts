import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

// URL to encode in the QR code
const url = 'https://glorious-ryc.netlify.app/';

// Path to save the QR code (inside public folder so it can be served)
const outputFile = path.join(process.cwd(), 'public', 'qrcode.png');

async function generateQRCode() {
  try {
    await QRCode.toFile(outputFile, url, {
      color: {
        dark: '#3B82F6', // QR code dots
        light: '#FFFFFF', // background
      },
      width: 300,  // size in pixels
      margin: 2,   // margin around QR
    });
    console.log('QR code generated at:', outputFile);
  } catch (err) {
    console.error('Failed to generate QR code:', err);
  }
}

generateQRCode();
