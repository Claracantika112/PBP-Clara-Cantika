function ubahFormatTanggal(tanggal) {
    const objTanggal = new Date(tanggal);
    return `${objTanggal.getDate()}/${objTanggal.getMonth() + 1}/${objTanggal.getFullYear()}`;
}

module.exports = { ubahFormatTanggal };
