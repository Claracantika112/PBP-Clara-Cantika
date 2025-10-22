function hitungSelisih(tanggal1, tanggal2) {
    const tgl1 = new Date(tanggal1);
    const tgl2 = new Date(tanggal2);
    const selisihMs = Math.abs(tgl2 - tgl1);

    const hari = Math.floor(selisihMs / (1000 * 60 * 60 * 24));
    return `${hari} hari`;
}

module.exports = { hitungSelisih };
