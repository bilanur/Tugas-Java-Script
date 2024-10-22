// NO 1
// class Person {
//     #firstName;
//     #lastName;
//     #age;
//     constructor(firstName, lastName, age) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#age = age;
//     }

//     get firstName() {
//         return this.#firstName;
//     }

//     set firstName(value) {
//         if (value.length == 0) {
//             console.log('Nama depan tidak boleh kosong');
//         } else {
//             this.#firstName = value;
//         }
//     }

//     get lastName() {
//         return this.#lastName;
//     }

//     set lastName(value) {
//         if (value.length == 0) {
//             console.log('Nama belakang tidak boleh kosong');
//         } else {
//             this.#lastName = value;
//         }
//     }

//     set age(value) {
//         if (value < 0) {
//             console.log("Umur tidak boleh kurang dari nol");
//         } else {
//             this.#age = value;
//         }
//     }

//     get age() {
//         return this.#age;
//     }
// }

// const objek1 = new Person();

// objek1.firstName = '';  // Output: Nama depan tidak boleh kosong
// console.log(objek1.firstName);

// objek1.lastName = 'Narendra';  // Input valid
// console.log(objek1.lastName);  // Output: Narendra

// objek1.age = -12;  // Output: Umur tidak boleh kurang dari nol
// console.log(objek1.age);  

// objek1.age = 19;  // Input valid
// console.log(objek1.age);  // Output: 19





// NO 2
// class PersegiPanjang {
//     #panjang; 

//     constructor(panjang, lebar) {
//         this.#panjang = panjang; 
//         this.lebar = lebar;    
//     }

//     get getpanjang() {
//         return this.#panjang;
//     }

//     set setpanjang(value) {
//         if (value > 0) {
//             this.#panjang = value;
//         } else {
//             console.log('Panjang harus lebih dari nol!');
//         }
//     }

//     get lebar() {
//         return this._lebar;
//     }

//     set lebar(value) {
//         if (value > 0) {
//             this._lebar = value;
//         } else {
//             console.log('Lebar harus lebih dari nol!');
//         }
//     }

//     kelilingPersegiPanjang() {
//         const keliling = 2 * (this.panjang + this.lebar);
//         console.log(`Keliling: ${keliling}`);
//     }

//     luasPersegiPanjang() {
//         const luas = this.panjang * this.lebar;
//         console.log(`Luas: ${luas}`);
//     }
// }

// const PersegiPanjang1 = new PersegiPanjang(5, 10);
// console.log (PersegiPanjang1.getpanjang);

// // diubah dengan set
// PersegiPanjang1.panjang = 8;
// PersegiPanjang1.setpanjang = 8;
// console.log (PersegiPanjang1.getpanjang);

// // Menghitung keliling dan luas
// PersegiPanjang1.kelilingPersegiPanjang();
// PersegiPanjang1.luasPersegiPanjang();

// console.log('');

// // inputan yg tidak valid karena panjang dan lebar kurang dari nol
// const PersegiPanjang2 = new PersegiPanjang(-5, -10);
// PersegiPanjang2.kelilingPersegiPanjang();
// PersegiPanjang2.luasPersegiPanjang();





// NO 3
// const nomorRekeningSet = new Set();

// class RekeningBank {
//     #nomorRekening; 
//     constructor(nomorRekening, saldo) {
//         this.setnomorRekening = nomorRekening; 
//         this._saldo = saldo;  
//     }

//     // Getter untuk nomorRekening
//     get getnomorRekening() {
//         return this.#nomorRekening;
//     }

//     // Setter untuk nomorRekening
//     set setnomorRekening(value) {
//         if (nomorRekeningSet.has(value)) {
//             console.log(`Nomor rekening ${value} sudah digunakan. Silakan gunakan nomor rekening lain.`);
//         } else {
//             if (this.#nomorRekening !== null) {
//                 nomorRekeningSet.delete(this.#nomorRekening);  
//             }
//             nomorRekeningSet.add(value);
//             this.#nomorRekening = value;  
//         }
//     }

//     get saldo() {
//         return this._saldo;
//     }

//     set saldo(value) {
//         this._saldo = value;  
//     }

//     setorUang(jumlah) {
//         console.log(`Saldo awal: ${this.saldo}`);  
//         this.saldo += jumlah; 
//         console.log(`Setor ${jumlah} ke rekening ${this.getnomorRekening}. Jumlah saldo saat ini: ${this.saldo}`);
//     }

//     tarikUang(jumlah) {
//         if (jumlah > this.saldo) {
//             console.log(`Saldo tidak cukup untuk menarik ${jumlah} dari rekening ${this.getnomorRekening}. Saldo saat ini: ${this.saldo}`);
//         } else {
//             this.saldo -= jumlah; 
//             console.log(`Tarik uang ${jumlah} dari rekening ${this.getnomorRekening}. Jumlah saldo saat ini: ${this.saldo}`);
//         }
//     }

//     tampilkanSaldo() {
//         console.log(`Saldo rekening ${this.getnomorRekening}: ${this.saldo}`);
//     }
// }

// // Contoh penggunaan
// const rekening1 = new RekeningBank('001', 3000000);
// console.log(rekening1.getnomorRekening); 

// // Menggunakan setter untuk mengubah nomor rekening
// rekening1.nomorRekening = '123'; 
// rekening1.setnomorRekening = '123'; 
// console.log(rekening1.getnomorRekening); 

// rekening1.setorUang(1500000);
// rekening1.tarikUang(3500000);
// rekening1.tampilkanSaldo();

// console.log('');
// // inputan yang tidak valid
// const rekening2 = new RekeningBank('123', 300000); 
// console.log(rekening2.getnomorRekening); 





// NO 4
// class Bank {
//     #kantorCabang;
//     constructor(namaBank, kantorCabang = []) {
//         this.namaBank = namaBank;
//         this.#kantorCabang = kantorCabang; 
//     }

//     // Getter untuk properti privat
//     get kantorCabang() {
//         return this.#kantorCabang;
//     }

//     // Setter untuk properti privat
//     set kantorCabang(namaCabang) {
//         if (this.#kantorCabang.includes(namaCabang)) {
//             console.log(`Kantor "${namaCabang}" sudah ada!`);
//         } else {
//             this.#kantorCabang.push(namaCabang);
//             console.log(`Kantor "${namaCabang}" berhasil ditambahkan.`);
//         }
//     }

//     menambahkankantorCabang(namaCabang) {
//         this.kantorCabang = namaCabang; 
//     }

//     menghapusakantorCabang(namaCabang) {
//         const index = this.#kantorCabang.indexOf(namaCabang);
//         if (index > -1) {
//             this.#kantorCabang.splice(index, 1);
//             console.log(`Kantor "${namaCabang}" berhasil dihapus.`);
//         } else {
//             console.log(`Kantor "${namaCabang}" tidak ditemukan.`);
//         }
//     }

//     menampilkansemuakantorCabang() {
//         if (this.#kantorCabang.length > 0) {
//             console.log(`Daftar kantor cabang dari ${this.namaBank}:`);
//             this.#kantorCabang.forEach((cabang, index) => {
//                 console.log(`${index + 1}. ${cabang}`);
//             });
//         } else {
//             console.log("Belum ada kantor cabang yang terdaftar.");
//         }
//     }
// }

// // Contoh penggunaan
// const namaBank = new Bank("Bank Indonesia");
// namaBank.menambahkankantorCabang("Cabang Bekasi");
// console.log(namaBank.kantorCabang); 

// // Menggunakan setter untuk mengubah kantor cabang
// namaBank.kantorCabang = 'Cianjur'; 
// console.log(namaBank.kantorCabang); 

// namaBank.menambahkankantorCabang("Cabang Bandung");
// namaBank.menambahkankantorCabang("Cabang Bandung");
// namaBank.menambahkankantorCabang("Cabang Cirebon");
// console.log(namaBank.kantorCabang); 

// namaBank.menampilkansemuakantorCabang();
// console.log(namaBank.kantorCabang); 

// namaBank.menghapusakantorCabang("Cabang Cirebon");
// console.log(namaBank.kantorCabang); 

// namaBank.menampilkansemuakantorCabang();
// console.log(namaBank.kantorCabang);





// NO 5
// class Book {
//     #author; 
//     constructor(title, author, year) {
//         this.title = title;
//         this.#author = author;
//         this.year = year;
//     }

//     get title() {
//         return this._title;
//     }

//     set title(value) {
//         if (!value) {
//             console.log("Judul tidak boleh kosong");
//         } else {
//             this._title = value;
//         }
//     }

//     get getauthor() {
//         return this.#author;
//     }

//     set setauthor(value) {
//             this.#author = value;
//     }

//     bookDetails() {
//         console.log(`Judul Buku: ${this.title}, Penulis: ${this.getauthor}, Tahun: ${this.year}`);
//     }
// }

// class Ebook extends Book {
//     constructor(title, author, year, price) {
//         super(title, author, year);
//         this.price = price;
//     }

//     get price() {
//         return this._price;
//     }

//     set price(value) {
//         if (typeof value !== "number" || value <= 0) {
//             console.log("Harga harus berupa angka positif");
//         } else {
//             this._price = value;
//         }
//     }

//     bookDetails() {
//         super.bookDetails();
//         console.log(`Harga: Rp. ${this.price !== undefined ? this.price : "undefined"}`);
//     }
// }

// const ebook1 = new Ebook("HUJAN", "Tere", 2016, 95000);
// console.log(ebook1.getauthor);

// // Mengubah author menggunakan setter setauthor
// ebook1.setauthor = "Tere Liye";
// console.log(ebook1.getauthor);

// // Memanggil method bookDetails
// ebook1.bookDetails();

// console.log('');
// // tidak valid karena gaada title dan harganya kurang dari nol
// const ebook2 = new Ebook("", "Tere", 2016, -95000);
// ebook2.bookDetails();





// NO 6
// class Employee {
//     #gaji;
//     constructor(name, gaji) {
//         this.name = name; 
//         this.#gaji = gaji; 
//     }
    
//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (typeof value !== 'string' || value.trim() == '') {
//             console.log('Nama harus berupa string yang valid.');
//         } else {
//             this._name = value;
//         }
//     }

//     get gaji() {
//         return this.#gaji;
//     }

//     set gaji(value) {
//         if (typeof value !== 'number' || value <= 0) {
//             console.log('Gaji harus berupa angka yang lebih besar dari nol.');
//         } else {
//             this.#gaji = value;
//         }
//     }
    
//     hitungGajiTahunan() {
//         console.log(`Gaji Tahunan ${this.name}: Rp${this.gaji * 12}`);
//     }
// }

// class Manager extends Employee {
//     constructor(name, gaji, department) {
//         super(name, gaji);
//         this.department = department; 
//     }

//     hitungGajiTahunan() {
//         const bonus = this.gaji * 0.1;
//         console.log(`Nama Pegawai: ${this.name}`);
//         console.log(`Gaji Bulanan: Rp. ${this.gaji}`);
//         console.log(`Departemen: ${this.department}`);
//         console.log(`Bonus (10% dari gaji pokok): Rp. ${bonus}`);
//         console.log(`Gaji Tahunan: Rp. ${(this.gaji + bonus) * 12}`);
//     }
// }

// const manager1 = new Manager("Canva Narendra", 20000000, "Keuangan");
// console.log(manager1.gaji);  

// // Mengubah gaji menggunakan setter
// manager1.gaji = 25000000;    
// console.log(manager1.gaji);  // properti gaji yang udah diubah

// manager1.hitungGajiTahunan();

// console.log('');
// // error karena nama nya bukan string dan harganya kurang dari nol
// const manager2 = new Manager(Bila, -20000000, "Marketing");
// manager2.hitungGajiTahunan();





// NO 7
// class Product {
//     #idProduk;
//     constructor(idProduk, name, price) {
//         this.#idProduk = idProduk;
//         this.name = name; 
//         this.price = price;
//     }

//     // Getter untuk idProduk
//     get idProduk() {
//         return this.#idProduk;
//     }

//     // Setter untuk idProduk
//     set idProduk(value) {
//         if (typeof value !== 'number') {
//             console.log('Id produk harus berupa angka');
//             this.#idProduk = undefined;
//         } else {
//             this.#idProduk = value;
//         }
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (typeof value !== 'string') {
//             console.log('Nama produk harus berupa string');
//             this._name = undefined;
//         } else {
//             this._name = value;
//         }
//     }

//     get price() {
//         return this._price;
//     }

//     set price(value) {
//         if (typeof value !== 'number' || value < 0) {
//             console.log('Harga produk harus berupa angka positif');
//             this._price = undefined;
//         } else {
//             this._price = value;
//         }
//     }

//     hitungTotalHarga(quantity) {
//         if (this.price == undefined || this.name == undefined) {
//             console.log('Data produk tidak valid, tidak bisa menghitung total harga.');
//             return;
//         }

//         const totalHarga = this.price * quantity;
//         console.log(`Id produk : ${this.idProduk}`);
//         console.log(`Nama produk : ${this.name}`);
//         console.log(`Harga satuan : ${this.price}`);
//         console.log(`Kuantitas : ${quantity}`);
//         console.log(`Total harga : ${totalHarga}`);
//     }
// }

// class ElectronicProduct extends Product {
//     constructor(idProduk, name, price, masaGaransi) {
//         super(idProduk, name, price);
//         this.masaGaransi = masaGaransi;
//     }

//     hitungTotalHarga(quantity) {
//         if (this.price == undefined || this.name == undefined) {
//             console.log('Data produk tidak valid, tidak bisa menghitung total harga.');
//             return;
//         }

//         const totalHarga = this.price * quantity;
//         console.log(`Id produk : ${this.idProduk}`);
//         console.log(`Nama produk : ${this.name}`);
//         console.log(`Harga satuan : ${this.price}`);
//         console.log(`Kuantitas : ${quantity}`);
//         console.log(`Total harga : ${totalHarga}`);
//         console.log(`Masa Garansi: ${this.masaGaransi} tahun`);
//     }
// }

// const Laptop = new ElectronicProduct(321, "Lenovo", 7500000, 2);
// console.log(Laptop.idProduk); // Mengambil idProduk dengan get

// // Mengubah idProduk menggunakan setter
// Laptop.idProduk = 456;
// console.log(Laptop.idProduk); 

// // Menghitung total harga
// Laptop.hitungTotalHarga(3);

// console.log('');

// const Televisi = new ElectronicProduct(123, 12345, -45000, 5); // Nama bukan string dan harga bukan number
// Televisi.hitungTotalHarga(2); //tidak bisa





// NO 8
// const nomorRekeningSet = new Set();
// const namaNasabahSet = new Set();

// class BankAccount {
//     #namaNasabah
//     constructor(nomorRekening, namaNasabah, saldo) {
//         // Validasi untuk nomor rekening
//         if (nomorRekeningSet.has(nomorRekening)) {
//             console.log(`Nomor rekening ${nomorRekening} sudah digunakan. Silakan gunakan nomor rekening lain.`);
//             return; 
//         }
        
//         // Validasi untuk nama nasabah
//         if (namaNasabahSet.has(namaNasabah)) {
//             console.log(`Nama nasabah ${namaNasabah} sudah digunakan. Silakan gunakan nama lain.`);
//             return; 
//         }

//         this._nomorRekening = nomorRekening;
//         this.#namaNasabah = namaNasabah;     
//         this.saldo = saldo;

//         // Tambahkan nomor rekening dan nama nasabah ke dalam set
//         nomorRekeningSet.add(nomorRekening);
//         namaNasabahSet.add(namaNasabah);
//     }

//     get nomorRekening() {
//         return this._nomorRekening;
//     }

//     set nomorRekening(value) {
//         if (nomorRekeningSet.has(value)) {
//             console.log(`Nomor rekening ${value} sudah digunakan. Silakan gunakan nomor rekening lain.`);
//         } else {
//             if (this._nomorRekening !== null) {
//                 nomorRekeningSet.delete(this._nomorRekening); 
//             }
//             nomorRekeningSet.add(value); 
//             this._nomorRekening = value;  
//         }
//     }

//     // get privat
//     get namaNasabah() {
//         return this.#namaNasabah; 
//     }

//     // set privat
//     set namaNasabah(value) {
//         if (namaNasabahSet.has(value)) {
//             console.log(`Nama nasabah ${value} sudah digunakan. Silakan gunakan nama lain.`);
//         } else {
//             if (this.#namaNasabah !== null) {
//                 namaNasabahSet.delete(this.#namaNasabah);
//             }
//             namaNasabahSet.add(value);
//             this.#namaNasabah = value;  
//         }
//     }

//     setorUang(jumlah) {
//         if (jumlah > 0) {
//             this.saldo += jumlah;
//             console.log(`${this.namaNasabah} berhasil menyetor Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`);
//         } else {
//             console.log("Jumlah setor harus lebih besar dari nol.");
//         }
//     }

//     tarikUang(jumlah) {
//         if (jumlah > 0 && jumlah <= this.saldo) {
//             this.saldo -= jumlah;
//             console.log(`${this.namaNasabah} berhasil menarik Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`);
//         } else {
//             console.log("Penarikan gagal. Pastikan jumlah yang ditarik tidak melebihi saldo.");
//         }
//     }

//     transferUang(rekeningTujuan, jumlah) {
//         if (jumlah > 0 && jumlah <= this.saldo) {
//             this.saldo -= jumlah;
//             rekeningTujuan.saldo += jumlah;
//             console.log(`${this.namaNasabah} berhasil mentransfer Rp${jumlah} ke ${rekeningTujuan.namaNasabah}. Saldo sekarang: Rp${this.saldo}`);
//         } else {
//             console.log("Transfer gagal. Pastikan saldo mencukupi.");
//         }
//     }

//     cekSaldo() {
//         console.log(`Saldo ${this.namaNasabah}: Rp${this.saldo}`);
//     }
// }

// // Contoh penggunaan
// const akun1 = new BankAccount('001', 'Canva', 500000);
// console.log(akun1.namaNasabah); // Mengambil nama nasabah dengan get

// // Mengubah nama nasabah menggunakan set
// akun1.namaNasabah = 'Narendra'; 
// console.log(akun1.namaNasabah); 

// const akun2 = new BankAccount('002', 'Bila', 20000000);

// // Setor, tarik, dan transfer uang
// akun1.setorUang(200000);  
// akun1.tarikUang(150000); 
// akun1.transferUang(akun2, 100000); 

// // cek saldo
// akun1.cekSaldo();
// akun2.cekSaldo(); 

// const akun3 = new BankAccount('001', 'Canva', 300000); // tidak valid karena no rek sama
// akun3.cekSaldo();

// const akun4 = new BankAccount('006', 'Bila', 300000); // tidak valid karena nama nasabah sama
// akun4.cekSaldo();

