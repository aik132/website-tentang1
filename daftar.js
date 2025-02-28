document.addEventListener("DOMContentLoaded", function () {
    const daftarBTN = document.getElementById("daftarBTN");
    event.preventDefault();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    setTimeout(() => {
        

        if (daftarBTN) {
            daftarBTN.addEventListener("click", function () {
                let username = document.getElementById("username").value;
                let password = document.getElementById("password").value;
                let email = document.getElementById("email").value;
                let kpassword = document.getElementById("kpassword").value;

                if (username === "" || password === "" || email === "" || kpassword === "") {
                    alert("Harap Isi Username dan Password!");
                } else {
                    alert("Daftar berhasil!");
                    window.location.href = "baru.html";
                }
            });
        }
    }, 100);
})