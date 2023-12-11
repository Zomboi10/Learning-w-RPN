// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("Looping Pertama");
let num = 0;
while (num <= 5) {
    console.log(num);
    num++;
}
console.log("Looping Maju");

console.log("________________");

console.log("Looping Kedua");
let no = 5;
while (no >= 0) {
    console.log(no);
    no--;
}
console.log("Looping Mundur");
console.log("________________");
// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("Looping Pertama, Looping Maju");
for (let i = 0; i <= 5; i++) {
    console.log(i);
    
}

console.log("Looping Kedua, Looping Mundur");
for (let j = 5; j >= 0; j--) {
    console.log(j);
    
}
// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let p = 1; p <= 100; p++) {
if (p % 2 != 0) {
    console.log(`${p} , Ganjil`);
} else {
    console.log(`${p} ,Genap`);
}
}
//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (let counter2 = 1; counter2 <= 100; counter2 +=2){
    if (counter2 % 3 === 0) {
        console.log(`${counter2} Kelipatan 3`);
    }
}

for (let counter5 = 1; counter5 <= 100; counter5 +=5) {
    if (counter5 % 6 === 0) {
        console.log(`${counter5} Kelipatan 6`);
    }
}

for (let counter9 = 1; counter9 <= 100; counter9 +=9) {
    if (counter9 % 10 === 0) {
        console.log(`${counter9} Kelipatan 10`);
    }
}
// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
let input = 5;
let bintang = "";

for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++){
        bintang += "*";
    }
    bintang += "\n";
}
console.log(bintang);
//hasilnya
//*
//**
//***
//****
//*****