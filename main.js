class kendaraan {
    constructor(model,merk,harga){
        this.model= model;
        this.merk = merk;
        this.harga = harga;
    }

}

//membuat method baru
maju() {
    return 'mesin ${this.merk} ${this.model} berjalan maju';
}
// membuat method berhenti
berhenti() {
    return 'mesin ${this.merk} ${this.model} berhenti';
}

class siswa {
    constructor(nama,kelas, absen){
        this.nama = nama;
        this.kelas = kelas;
        this.absen = absen;
    }

}

let mobil = new kendaraan("supra","toyota","20000000");
let motor = new kendaraan("cbr","honda","3000000");
let vespa = new kendaraan("vesmet","piaggio","1000000");
let to1 = new siswa("andrea","11 pplg 2","1");
let to2 = new siswa("hawa","11pplg2","11");
console.log (mobil);
console.log (motor);
console.log (vespa);
console.log (to1);
console.log(to2);
console.log(maju);
console.log(berhenti);

