const email = document.getElementById("email");

const code = document.getElementById("code");

const codeGroup = document.getElementById("codeGroup");

const sendCode = document.getElementById("sendCode");

const step1 = document.getElementById("step1");

const step2 = document.getElementById("step2");

const subtitle = document.getElementById("subtitle");


// KODE DEMO

let verificationCode = "";


/* =========================
   KIRIM KODE
   ========================= */

sendCode.addEventListener("click", function () {

    if (email.value.trim() === "") {

        alert("Masukkan email terlebih dahulu!");

        return;

    }


    if (codeGroup.classList.contains("hidden")) {

        // Buat kode demo 6 digit

        verificationCode =
            Math.floor(
                100000 +
                Math.random() * 900000
            ).toString();


        console.log(
            "Kode verifikasi demo:",
            verificationCode
        );


        codeGroup.classList.remove("hidden");


        sendCode.textContent =
            "Verifikasi Kode";


        subtitle.textContent =
            "Masukkan kode verifikasi kamu";


        alert(
            "Kode demo: " +
            verificationCode
        );

    }

    else {

        // CEK KODE

        if (code.value === verificationCode) {

            step1.classList.add("hidden");

            step2.classList.remove("hidden");


            subtitle.textContent =
                "Lengkapi data akun kamu";


        }

        else {

            alert(
                "Kode verifikasi salah!"
            );

        }

    }

});