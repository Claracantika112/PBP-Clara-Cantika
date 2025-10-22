function ambilJamSaatIni() {
    const sekarang = new Date();
    return sekarang.toTimeString().split(' ')[0]; // HH:MM:SS
}

module.exports = { ambilJamSaatIni };
