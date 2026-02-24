const Jimp = require('jimp');
const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'public', 'logo.png');
const out = path.join(__dirname, '..', 'public', 'favicon.ico');
const sizes = [16, 32, 64, 128, 256];

(async () => {
  try {
    const tmpFiles = [];
    for (const s of sizes) {
      const img = await Jimp.read(src);
      img.resize(s, s);
      const tmp = path.join(__dirname, `tmp-${s}.png`);
      await img.writeAsync(tmp);
      tmpFiles.push(tmp);
    }

    const icoBuffer = await pngToIco(tmpFiles);
    fs.writeFileSync(out, icoBuffer);

    // cleanup temporary pngs
    for (const f of tmpFiles) {
      try { fs.unlinkSync(f); } catch (e) {}
    }

    console.log('Generated', out);
  } catch (err) {
    console.error('Failed to generate favicon:', err);
    process.exit(1);
  }
})();
