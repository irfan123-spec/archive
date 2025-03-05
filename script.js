function showModal(judul, tanggal, deskripsi) {
    document.getElementById('modalJudul').textContent = judul;
    document.getElementById('modalTanggal').textContent = tanggal;
    document.getElementById('modalDeskripsi').textContent = deskripsi;
    
    let modal = new bootstrap.Modal(document.getElementById('arsipModal'));
    modal.show();
}
