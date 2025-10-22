const { ubahFormatTanggal } = require('./konversi-waktu/format-tanggal');
const { ambilJamSaatIni } = require('./konversi-waktu/jam-sekarang');
const { konversiZonaWaktu } = require('./konversi-waktu/zona-waktu');
const { hitungSelisih } = require('./konversi-waktu/selisih-waktu');

console.log("=== KONVERSI WAKTU ===");

const tanggalContoh = '2025-10-22';
console.log(`Format baru untuk ${tanggalContoh}: ${ubahFormatTanggal(tanggalContoh)}`);

const jam = ambilJamSaatIni();
console.log(`Jam saat ini (WIB): ${jam}`);
console.log(`Jam dalam WITA: ${konversiZonaWaktu(jam, 'WITA')}`);
console.log(`Jam dalam WIT: ${konversiZonaWaktu(jam, 'WIT')}`);

const tgl1 = '2025-10-01';
const tgl2 = '2025-10-22';
console.log(`Selisih waktu antara ${tgl1} dan ${tgl2}: ${hitungSelisih(tgl1, tgl2)}`);