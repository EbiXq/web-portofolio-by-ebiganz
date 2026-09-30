const email = document.getElementById("email");

const code = document.getElementById("code");

const newPassword =
    document.getElementById("newPassword");

const confirmPassword =
    document.getElementById("confirmPassword");


const step1 =
    document.getElementById("step1");

const step2 =
    document.getElementById("step2");

const step3 =
    document.getElementById("step3");


const sendCode =
    document.getElementById("sendCode");

const verifyCode =
    document.getElementById("verifyCode");

const resetPassword =
    document.getElementById("resetPassword");


const title =
    document.getElementById("title");

const subtitle =
    document.getElementById("subtitle");


let resetCode = "";


/* =========================
   KIRIM KODE
   ========================= */

sendCode.addEventListener("click", function () {

    if (email.value.trim() === "") {

        alert("Masukkan email terlebih dahulu!");

        return;
    }


    resetCode =
        Math.floor(
            100000 +
            Math.random() * 900000
        ).toString();


    console.log(
        "Kode reset demo:",
        resetCode
    );


    step1.classList.add("hidden");

    step2.classList.remove("hidden");


    title.textContent =
        "Verifikasi Kode";

    subtitle.textContent =
        "Masukkan kode yang kamu terima";


    alert(
        "Kode reset demo: " +
        resetCode
    );

});


/* =========================
   VERIFIKASI
   ========================= */

verifyCode.addEventListener("click", function () {

    if (code.value !== resetCode) {

        alert("Kode reset salah!");

        return;
    }


    step2.classList.add("hidden");

    step3.classList.remove("hidden");


    title.textContent =
        "Password Baru";

    subtitle.textContent =
        "Buat password baru untuk akun kamu";

});


/* =========================
   PASSWORD BARU
   ========================= */

resetPassword.addEventListener("click", function () {

    if (
        newPassword.value === "" ||
        confirmPassword.value === ""
    ) {

        alert("Lengkapi semua password!");

        return;
    }


    if (
        newPassword.value !==
        confirmPassword.value
    ) {

        alert("Password tidak sama!");

        return;
    }


    alert(
        "Password berhasil diubah!"
    );


    window.location.href =
        "index.html";

});