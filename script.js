document.addEventListener("DOMContentLoaded", function () {
    const homeBTN = document.getElementById("homeBTN");
    const aboutBTN = document.getElementById("aboutBTN");
    const webBTN = document.getElementById("webBTN");
    const loginBTN = document.getElementById("loginBTN");
    const bookBTN = document.getElementById("bookBTN");
    
    const mainContent = document.getElementById("main-content");
    const links = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop(); 

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
 
    // Carousel
 const images = ["gambar3.jpg", "gambar4.jpg", "gambar5.jpg"];
 let currentIndex = 0;
 const imgElement = document.querySelector(".carousel img");

 function updateImage(index) {
     imgElement.src = images[index];
 }

     // Auto Slide
     setInterval(() => {
         currentIndex = (currentIndex + 1) % images.length;
         updateImage(currentIndex);
     }, 3000);


        let alatBTN = document.getElementById("alatBTN");
        let dropdownMenu = document.querySelector(".dropdown-menu");
    
        alatBTN.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah default link behavior
            dropdownMenu.classList.toggle("show"); // Toggle class untuk menampilkan/menyembunyikan menu
        });
    
        // Klik di luar menu untuk menutup dropdown
        document.addEventListener("click", function (event) {
            if (!alatBTN.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });

    // Fungsi untuk menampilkan halaman perpustakaan
    function showBookPage() {
        mainContent.innerHTML = `
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-image: url(laa1.5.jpg);
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    color:rgb(0, 0, 0);
                }
                
                .book-section {
                    text-align: center;
                    color: rgb(255, 255, 255);
                }
            </style>
    <div class="pos">
    <section class="book-section">
        <h2>Our Books</h2>
         <div class="book-container">
             <div class="card">
                 <div class="card-image">
                     <img src="maling.jpg" alt="judul buku">
                 </div>
                 <div class="card-details">
                     <h3 class="book-title">Malioboro At Night</h3>
                     <p class="book-details">Penulis : Skysphire</p>
                     <p class="book-details">Tahun Terbit : 2023</p>
                 </div>
                 
             </div>
             <div class="card">
                <div class="card-image">
                    <img src="sahabat.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Sahabat Baru Naira</h3>
                    <p class="book-details">Penulis : RisTee</p>
                    <p class="book-details">Tahun Terbit : 2017</p>
                </div>
                
            </div>
            
            <div class="card">
                <div class="card-image">
                    <img src="yeah.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Dilan 2 </h3>
                    <p class="book-details">Penulis : Pidi Baiq</p>
                    <p class="book-details">Tahun Terbit : 1991</p>
                </div>
                
            </div>
            <div class="card">
                <div class="card-image">
                    <img src="jomblo.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Jomblo Ngenest</h3>
                    <p class="book-details">Penulis : Pandu Pandaa</p>
                    <p class="book-details">Tahun Terbit : 2021</p>
                </div>
                
            </div>
            <div class="card">
                <div class="card-image">
                    <img src="lupa.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Forget Me Not, Can i Forget You</h3>
                    <p class="book-details">Penulis : Indriani Taslim</p>
                    <p class="book-details">Tahun Terbit : 2021</p>
                </div>
                
            </div>
            <div class="card">
                <div class="card-image">
                    <img src="yeah.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Yeah</h3>
                    <p class="book-details">Penulis : yeah</p>
                    <p class="book-details">Tahun Terbit : XXXX</p>
                </div>
                
            </div>
            <div class="card">
                <div class="card-image">
                    <img src="kiss.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Kiss The Sun</h3>
                    <p class="book-details">Penulis : Awie Awan</p>
                    <p class="book-details">Tahun Terbit : 2021</p>
                </div>
                
            </div>
            <div class="card">
                <div class="card-image">
                    <img src="ipas.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Proyek Ilmu Pengetahuan Alam dan Sosial</h3>
                    <p class="book-details">Penulis : Indayatmi, S.Pd.M.Sc</p>
                    <p class="book-details">Tahun Terbit : 2022</p>
                </div>
                
            </div>
            <div class="card">
                <div class="card-image">
                    <img src="dasar.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Dasar dasar pengembangan perangkat lunak dan gim -  kelas 10</h3>
                    <p class="book-details">Penulis : Okta Purnawirawan | Nuning Minarsih | Ign. F. Bayu Andoro dan Hari Wibawanto
                    </p>
                    <p class="book-details">Tahun Terbit : 2023</p>
                </div>
                
            </div>
            <div class="card">
                <div class="card-image">
                    <img src="lunak.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Pemodelan Perangkat Lunak - Kelas 11</h3>
                    <p class="book-details">Penulis : Henry Pandia</p>
                    <p class="book-details">Tahun Terbit : 2018</p>
                </div>
                
            </div>
            <div class="card">
                <div class="card-image">
                    <img src="desain.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Desain Media Interaktif</h3>
                    <p class="book-details">Penulis : Noviana</p>
                    <p class="book-details">Tahun Terbit : 2013</p>
                </div>
                
            </div>
            <div class="card">
                <div class="card-image">
                    <img src="sejarah.jpg" alt="judul buku">
                </div>
                <div class="card-details">
                    <h3 class="book-title">Sejarah</h3>
                    <p class="book-details">Penulis : -</p>
                    <p class="book-details">Tahun Terbit : 2021</p>
                </div>
                
            </div>
        </div>
    </div>
             
        
        
        `;
    }

    function showAboutPage() {
        mainContent.innerHTML = `
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background: url(laa.jpg) no-repeat center center fixed;
                    background-size: cover;
                }
    
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #141414;
                    padding: 0px;
                    color: rgb(249, 249, 249);
                }
    
                .logo {
                    display:flex;
                    align-items: center;
                }
    
                .logo img {
                    width: 30px;
                    height: auto;
                    margin-right: 0px;
                }
    
                .logo h1 {
                    margin: 0;
                    font-size: 18px;
                    color:white;
                }

                .credit h2 {
                    margin: 0;
                    font-size: 10px;
                    font-weight: 100;
                    color:white;
                    text-align: center;
                }

                nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                
                }
    
                nav ul li {
                    margin-right: 20px;
                }
    
                nav ul li a {
                    text-decoration: none;
                    color: rgb(255, 255, 255);
                }
    
                .latar-container {    
                    text-align: center;
                    padding: 50px 20px;
                    position: relative;
                }

                .latar-container::before {
                     content: "";
                     position: absolute;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                     background: rgba(0, 0, 0, 0);
                     z-index: -1;
                 }
    
                .container {
                    position: relative;
                    background: rgba(255, 255, 255, 0.36);
                    padding: 20px;
                    border-radius: 10px;
                    max-width: 1150px;
                    margin: auto;
                    height: 800px;
                    top: 50px;
                    font-size: 17px;
                }
    
                .title {
                    text-align: center;
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 25px;
                    color: #000000;
                }
    
                .content {
                    text-align: justify;
                    font-size: 20px;
                    color: #000000;
                }
    
                .nav-link {
                    text-decoration: none;
                    padding-bottom: 5px;
                    border-bottom: 3px solid transparent; 
                }
    
                .nav-link.active {
                    border-bottom: 3px solid rgb(2, 2, 2); 
                }
            </style>
            
            <div class="container">
                <div class="title"><h2>Latar Belakang</h2></div>
                <div class="content">
                    <p>Perpustakaan Wiyata Utama adalah pusat sumber belajar yang mendukung kegiatan pendidikan di SMKN 1 Banyuwangi. Selain menyediakan koleksi buku, perpustakaan ini aktif mengadakan program literasi dan pelatihan, seperti pemanfaatan teknologi untuk kewirausahaan. Dengan fasilitasnya, perpustakaan ini berperan penting dalam meningkatkan minat baca dan keterampilan siswa. Total buku keseluruhan perpustakaan pada tahun 2014 yang berisi kurikulum lama dan baru adalah 70.900 buku.</p>
                    <p><strong>Pengurus perpustakaan ini adalah:</strong></p>
                    <ul>
                        <li>Bu Lilik Erna sebagai Ketua Perpustakaan</li>
                        <li>Bu Putri</li>
                        <li>Pak Namkus sebagai pembantu di perpustakaan</li>
                    </ul>
                    <p>Perpustakaan ini dibuat untuk memenuhi kebutuhan anak-anak, kebutuhan literasi, kebutuhan buku, buku paket, dan karena sekarang ada monitor, sekarang zaman sudah canggih kami menyediakan komputer untuk menunjang pendidikan.
                        Di perpustakaan ini tidak menjual produk, di perpustakaan semua gratis membaca tidak ada denda. Semisal jika telat mengembalikan, kita tidak menuntut denda jadi gratis disediakan fasilitas sekolah.
                    </p>
                </div>
                <div class="title"><h2>Visi & Misi</h2></div>
                <div class="content">
                    <P><strong>VISI :</strong></P>
                    <ul>
                        <LI>Mempromosikan budaya literasi untuk mencapai pembaca yang mandiri dan masyarakat digital yang bertanggung jawab</LI>
                    </ul>
                    <p><strong>MISI :</strong></p>
                    <ul>
                        <li>Mengembangkan kebiasaan membaca dan kecakapan informasi literasi yang merdeka</li>
                        <li>Menjadikan peserta didik sebagai pembaca yang kritis menggunakan informasi untuk memecahkan masalah dan mencari ide kreatif secara beresiko dan berbudaya</li>
                        <li>Tempat untuk mendapatkan informasi secara digital maupun cetak dari berbagai sudut pandang</li>
                        <li>Bekerjasama dengan guru dan TU untuk meningkatkan pengalaman belajar menunjang pencapaian tujuan kurikulum</li>
                    </ul>
                </div>
            </div>
        `;
        
    }

    function showWebPage() {
        mainContent.innerHTML = `
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background: url(laa.jpg) no-repeat center center fixed;
                    background-size: cover;
                }
    
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #141414;
                    padding: 0px;
                    color: rgb(249, 249, 249);
                }
    
                .logo {
                    display:flex;
                    align-items: center;
                }
    
                .logo img {
                    width: 30px;
                    height: auto;
                    margin-right: 0px;
                }
    
                .logo h1 {
                    margin: 0;
                    font-size: 18px;
                    color:white;
                }

                .credit h2 {
                    margin: 0;
                    font-size: 10px;
                    font-weight: 100;
                    color:white;
                    text-align: center;
                }

                nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                
                }
    
                nav ul li {
                    margin-right: 20px;
                }
    
                nav ul li a {
                    text-decoration: none;
                    color: rgb(255, 255, 255);
                }
    
                .latar-container {    
                    text-align: center;
                    padding: 50px 20px;
                    position: relative;
                }

                .latar-container::before {
                     content: "";
                     position: absolute;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                     background: rgba(0, 0, 0, 0);
                     z-index: -1;
                 }
    
                .container {
                    position: relative;
                    background: rgba(255, 255, 255, 0.36);
                    padding: 20px;
                    border-radius: 10px;
                    max-width: 1150px;
                    margin: auto;
                    height: 400px;
                    top: 50px;
                    font-size: 17px;
                }
    
                .title {
                    text-align: center;
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 25px;
                    color: #000000;
                }
    
                .content {
                    text-align: justify;
                    font-size: 20px;
                    color: #000000;
                }
    
                .nav-link {
                    text-decoration: none;
                    padding-bottom: 5px;
                    border-bottom: 3px solid transparent; 
                }
    
                .nav-link.active {
                    border-bottom: 3px solid rgb(2, 2, 2); 
                }
            </style>
            
            <div class="container">
            <div class="title">Tentang Website</div>
            <div class="content">
                <p>Website ini dibuat sebagai tugas. Alasan Website dibuat adalah untuk menjelaskan Fasilitas yang ada disekolah SMK Negeri 1 Banyuwangi, dan yang kami pilih adalah Perpustakaan dari SMKN 1 Banyuwangi.</p>
                <p>Web ini dibuat selama entah berapa hari, tetapi bisa dihitung tidak memakan setahun :)))</p>
                <p><strong>Dikelompok ini berAnggotakan 5 orang, yaitu :</strong></p>
                <ul>
                    <li>(05)Kuni Qonita Zahro sebagai bagian yang Presentasi</li>
                    <li>(22)Natasha Eriva Kurniawan sebagai bagian Coding </li>
                    <li>(30)Siti Wautfiah bagian Desain</li>
                    <li>(33)Zahratul Nissa bagian bantu-bantu</li>
                    <li>(34)Zaskia Ramadhani bagian Coding</li>
                </ul>
                <p>Dalam codingan ini kami hanya menggunakan Visual Studio Code</p>
            </div>
        `;
        
    }

    // Fungsi untuk menampilkan halaman login
    function showLoginPage() {
        mainContent.innerHTML = `
            <div class="login-container">
                <div class="login-box">
                    <h1>Login</h1>
                    <p>Welcome back! Please login to your account</p>
                    <form>
                        <div class="textbox">
                            <input type="text" placeholder="Username" required>
                        </div>
                        <div class="textbox">
                            <input type="password" placeholder="Password" required>
                        </div>
                        <div class="remember">
                            <label>
                                <input type="checkbox">Ingat Saya
                            </label>
                        </div>
                        <button type="submit" class="btn">Login</button>
                        <p>Belum Ada Akun? <a href="daftar.html">Daftar</a></p>
                    </form>
                </div>
            </div>
        `;

        // Tambahkan event listener untuk login setelah halaman dimuat
        setTimeout(() => {
            const loginBTN = document.getElementById("loginBTN");

            if (loginBTN) {
                loginBTN.addEventListener("click", function () {
                    let username = document.getElementById("username").value;
                    let password = document.getElementById("password").value;
                    let email = document.getElementById("email").value;
                    let kpassword = document.getElementById("kpassword").value;
   
                    if (username === "" || password === "" || email === "" || kpassword === "") {
                        alert("Harap Isi Username dan Password!");
                    } else {
                        alert("Login berhasil!");
                        window.location.href ="baru.html";
                    }
                });
            }
        }, 100);
    }

    // Event listener untuk tombol navigasi
    if (homeBTN) {
        homeBTN.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href ="baru.html";
        });
    }

    if (bookBTN) {
        bookBTN.addEventListener("click", function (event) {
            event.preventDefault();
            showBookPage();
        });
    };



    // Event listener untuk tombol About
    if (aboutBTN) {
        aboutBTN.addEventListener("click", function (event) {
            event.preventDefault();
            showAboutPage();
        });
    };

if (webBTN) {
    webBTN.addEventListener("click", function (event) {
        event.preventDefault();
        showWebPage();
    });
    };



    if (loginBTN) {
        loginBTN.addEventListener("click", function (event) {
            event.preventDefault();
            showLoginPage();
        });
    };
});
    // Event listener tambahan untuk mengganti seluruh halaman dengan form login
    document.getElementById("loginBTN").addEventListener("click", function () {
        document.body.innerHTML = `
            <div class="login-container">
                <div class="login-box">
                    <h1>Login</h1>
                    <p>Welcome back! Please login to your account</p>
                    <form>
                        <div class="textbox">
                            <input type="text" placeholder="Username" required>
                        </div>
                        <div class="textbox">
                            <input type="password" placeholder="Password" required>
                        </div>
                        <div class="remember">
                            <label>
                                <input type="checkbox">Ingat Saya
                            </label>
                        </div>
                        <button type="submit" class="btn">Login</button>
                        <p>Belum Ada Akun? <a href="daftar.html">Daftar</a></p>
                        <br>
                        <button onclick="window.location.href ="baru.html" class="btn">Kembali</button>
                    </form>
                </div>
            </div>
        `;
    });
