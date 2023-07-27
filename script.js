document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('fuel-table');
    const rows = table.rows;

    // Loop melalui setiap baris (kecuali header) dan tambahkan event listener
    for (let i = 1; i < rows.length; i++) {
        rows[i].addEventListener('click', function() {
            editRow(this);
        });
    }

    function editRow(row) {
        // Ambil data sel pada baris yang diklik
        const cells = row.cells;

        // Ambil data dari setiap sel dan simpan dalam variabel
        const unit = cells[0].innerText;
        const pembangkit = cells[1].innerText;
        const jenisBahanBakar = cells[2].innerText;
        const stokAwal = cells[3].innerText;
        const stokAkhir = cells[4].innerText;
        const asumsiPemakaian = cells[5].innerText;
        const ketahananOperasi = cells[6].innerText;
        const status = cells[7].innerText;
        const penerimaan = cells[8].innerText;
        const realisasiPemakaian = cells[9].innerText;

        // Lakukan sesuatu dengan data yang telah diambil, seperti menampilkan dialog atau form untuk mengedit data
        // Dalam contoh ini, kami hanya akan menampilkan data tersebut di console log
        console.log(`Unit: ${unit}`);
        console.log(`Pembangkit: ${pembangkit}`);
        console.log(`Jenis Bahan Bakar: ${jenisBahanBakar}`);
        console.log(`Stok Awal: ${stokAwal}`);
        console.log(`Stok Akhir: ${stokAkhir}`);
        console.log(`Asumsi Pemakaian: ${asumsiPemakaian}`);
        console.log(`Ketahanan Operasi: ${ketahananOperasi}`);
        console.log(`Status: ${status}`);
        console.log(`Penerimaan: ${penerimaan}`);
        console.log(`Realisasi Pemakaian: ${realisasiPemakaian}`);
    }
});
