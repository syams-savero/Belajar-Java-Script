// Menulis Teks Multibaris di Dalam String dengan Escape Sequence
// Menjelaskan penggunaan \n, \t, dan \\ untuk membuat output teks seperti yang diminta.

/* Daftar Escape Sequence :

1. \'  Tanda petik satu (single quote)
Terjemahan: Untuk menampilkan ' di dalam string.
contoh : 
var petik = "It\'s My Book";
hasilnya adalah It's My Book

2. \"  Tanda petik dua (double quote)
Terjemahan: Untuk menampilkan " di dalam string yang juga dibungkus oleh tanda petik dua.
contoh :
var teks = "Dia bilang \"Cihuy\"";
hasilnya adalah Dia bilang "Cihuy"

Alternatif : 
var teks = 'Dia bilang "Cihuy"';

3. \\  Backslash (\)
Terjemahan: Menampilkan tanda backslash, karena \ sendiri adalah karakter spesial.
contoh : 
var teks = "Home\\Dokumen\\Nuklir";
hasilnya adalah Home\Dokumen\Nuklir

4. \n → Baris baru (newline)
Terjemahan: Untuk pindah ke baris baru.
contoh :
var teks = "Halo\nDunia";
Hasilnya adalah Halo
				Dunia

5. \t → Tabulasi (tab)
Terjemahan: Memberi jarak tab (sekitar 4 spasi).
contoh :
var teks = "Nama :\tBilek";
hasilnya adalah Nama :    Bilek

6. \r → Carriage return (mengembalikan kursor ke awal baris)
Terjemahan: Menggeser kursor ke awal baris, lalu menimpa isi sebelumnya.
contoh : 
var teks = "Halo Dunia\rHi";
hasilnya adalah Hilo Dunia
jadi 2 huruf pertama yaitu HA ditimpa dengan HI

7. \b → Backspace (hapus karakter sebelumnya)
Terjemahan: Menghapus satu karakter sebelum \b.
contoh :
var teks = "Cihuyy\b";
hasilnya adalah Cihuy

Contoh kasus :
Buatlah string pada baris pertama berisi "Umur" lalu baris kedua "18" dengan backslash, lalu baris ketiga "Saya "Siap""
*/

var data = "Umur\n\\18\nSaya 'Siap'";
/* Hasilnya adalah 

Umur
\18
Saya 'Siap'

