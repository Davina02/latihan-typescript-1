"use strict";
function part() {
    let sesi = 1;
    let bel_pulang = 1;
    let jumlah_sesi = 4;
    return (jumlah_sesi * sesi) + bel_pulang;
}
function normal() {
    return 3 * part();
}
function jumat() {
    return 2 * part();
}
let count = 0;
let weeks = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
// count = 4*normal() + friday();
for (var i = 0; i < weeks.length; i++) {
    if (weeks[i] != 'Jumat') {
        count = count + normal();
    }
    else {
        count = count + jumat();
    }
}
console.log('Jumlah bunyi bel yang terjadi selama seminggu di sekolah tersebut adalah ' + count + ' kali');
