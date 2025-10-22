function konversiZonaWaktu(jam, zona) {
    const [jamStr, menitStr, detikStr] = jam.split(':');
    let jamAngka = parseInt(jamStr);

    switch (zona) {
        case 'WITA':
            jamAngka += 1;
            break;
        case 'WIT':
            jamAngka += 2;
            break;
        case 'WIB':
        default:
            break;
    }

    if (jamAngka >= 24) jamAngka -= 24;

    return `${jamAngka.toString().padStart(2, '0')}:${menitStr}:${detikStr}`;
}

module.exports = { konversiZonaWaktu };
