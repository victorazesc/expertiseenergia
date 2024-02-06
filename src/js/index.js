let slideIndexMobile = 1;

function nextSlideMobile() {
    showSlidesMobile(slideIndexMobile += 1);
}

function prevSlideMobile() {
    showSlidesMobile(slideIndexMobile -= 1);
}

function currentSlideMobile(n) {
    showSlidesMobile(slideIndexMobile = n);
}

async function showSlidesMobile(n) {
    let i;
    let slides = await document.getElementsByClassName("slides-mobile");
    let dots = await document.getElementsByClassName("dot-mobile");
    let prevArrow = document.getElementsByClassName("prev-mobile")
    let nextArrow = document.getElementsByClassName("next-mobile")
    if (n > slides.length) {
        slideIndexMobile = 1
    }
    if (slides.length === 0 || dots.length === 0) {
        return
    }
    if (n < 1) {
        slideIndexMobile = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (n > 1) {
        prevArrow[0].style.visibility = 'visible'
    }
    else {
        prevArrow[0].style.visibility = 'hidden'
    }
    if (n === slides.length) {
        nextArrow[0].style.visibility = 'hidden'
    }
    else {
        nextArrow[0].style.visibility = 'visible'
    }
    slides[slideIndexMobile - 1].className += " active";
    dots[slideIndexMobile - 1].className += " active";
}

async function changeSlideMobile(n) {
    let i;
    let slides = await document.getElementsByClassName("slide-mobile-green");
    let options = await document.getElementsByClassName("redesign__green-presentation--option");

    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    for (i = 0; i < options.length; i++) {
        options[i].className = options[i].className.replace(" active", "");
    }
    slides[n - 1].className += " active";
    options[n - 1].className += " active";
}

function playTestimonialMobile(index, shorts) {
    document.body.style.overflow = 'hidden';
    const videos = document.getElementsByClassName("redesign__testimonials-slider-image")
    const shortsPlayer = document.getElementById("testimonial-player-shorts-mobile")
    const landscapePlayer = document.getElementById("testimonial-player-landscape-mobile")
    const playerContainer = document.getElementById("testimonial-player-container-mobile")
    shortsPlayer.style.display = "none"
    landscapePlayer.style.display = "none"
    if (shorts) {
        shortsPlayer.src = videos[index].alt
        shortsPlayer.style.display = "flex"
    } else {
        landscapePlayer.src = videos[index].alt
        landscapePlayer.style.display = "flex"
    }
    playerContainer.style.display = "flex"
}

function closeTestimonialMobile(shorts) {
    document.body.style.overflowY = 'auto';
    const shortsPlayer = document.getElementById("testimonial-player-shorts-mobile")
    const landscapePlayer = document.getElementById("testimonial-player-landscape-mobile")
    shortsPlayer.src = ""
    landscapePlayer.src = ""
    shortsPlayer.style.display = "none"
    landscapePlayer.style.display = "none"
    let playerContainer = document.getElementById("testimonial-player-container-mobile")
    playerContainer.style.display = "none"
}

function openCollapsible(index) {
    const collapsibleIcons = document.getElementsByClassName("redesign__section-collapsible-icon");
    const collapsibleCols = document.getElementsByClassName("redesign__section-content");
    if (collapsibleCols.length > 0) {
        const icon = collapsibleIcons[index - 1]
        const content = collapsibleCols[index - 1]
        if (content.style.display === "block") {
            content.style.display = "none";
            icon.style.transform = ""
        } else {
            content.style.display = "block";
            icon.style.transform = "rotate(180deg)"
        }
    }

}

let slideIndex = 1;

// Next/previous controls
function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

async function showSlides(n) {
    let i;
    let slides = await document.getElementsByClassName("slides-desktop");
    let dots = await document.getElementsByClassName("dot-desktop");
    let prevArrow = document.getElementsByClassName("prev-desktop")
    let nextArrow = document.getElementsByClassName("next-desktop")
    if (n > slides.length) {
        slideIndex = 1
    }
    if (slides.length === 0 || dots.length === 0) {
        return
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (n > 1) {
        prevArrow[0].style.visibility = 'visible'
    }
    else {
        prevArrow[0].style.visibility = 'hidden'
    }
    if (n === slides.length) {
        nextArrow[0].style.visibility = 'hidden'
    }
    else {
        nextArrow[0].style.visibility = 'visible'
    }
    slides[slideIndex - 1].className += " active";
    dots[slideIndex - 1].className += " active";
}
showSlides(slideIndex);

function playTestimonial(index, shorts) {
    document.body.style.overflow = 'hidden';
    const videos = document.getElementsByClassName("redesign__testimonials-slider-image")
    const shortsPlayer = document.getElementById("testimonial-player-shorts")
    const landscapePlayer = document.getElementById("testimonial-player-landscape")
    const playerContainer = document.getElementById("testimonial-player-container")
    shortsPlayer.style.display = "none"
    landscapePlayer.style.display = "none"
    if (shorts) {
        shortsPlayer.src = videos[index].alt
        shortsPlayer.style.display = "flex"
    } else {
        landscapePlayer.src = videos[index].alt
        landscapePlayer.style.display = "flex"
    }
    playerContainer.style.display = "flex"
}

function closeTestimonial(shorts) {
    document.body.style.overflowY = 'auto';
    const shortsPlayer = document.getElementById("testimonial-player-shorts")
    const landscapePlayer = document.getElementById("testimonial-player-landscape")
    shortsPlayer.src = ""
    landscapePlayer.src = ""
    shortsPlayer.style.display = "none"
    landscapePlayer.style.display = "none"
    let playerContainer = document.getElementById("testimonial-player-container")
    playerContainer.style.display = "none"
}

function formatarTelefone(input) {
    // Remove caracteres não numéricos
    var numero = input.value.replace(/\D/g, '');

    if (numero.length > 11) {
        numero = numero.slice(0, -1)
        input.value = numero
    }

    // Aplica a máscara
    if (numero.length === 11) {
        input.value = '(' + numero.substr(0, 2) + ') ' + numero.substr(2, 5) + '-' + numero.substr(7);
    } else if (numero.length === 10) {
        input.value = '(' + numero.substr(0, 2) + ') ' + numero.substr(2, 4) + '-' + numero.substr(6);
    } else {
        input.value = numero;
    }
}
function submitAgendorForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('telefone').value.replace(/\D/g, '')

    // Validar se todos os campos estão preenchidos e o telefone tem 10 ou 11 dígitos
    if (nome && email && phone.length >= 10 && phone.length <= 11) {
        // Realizar a chamada AJAX
        jQuery.ajax({
            url: 'https://grove-fair-plastic.blogs.prod.stage.rock.works/wp-json/agendor-api/v1/submit-form/',
            type: 'POST',
            data: {
                nome: nome,
                email: email,
                phone: phone,
            },
            success: function (response) {
                if (response.success) {
                    alert(response.message);
                    // Adicione aqui qualquer lógica adicional após o sucesso
                } else {
                    console.error(response.message);
                    // Adicione aqui qualquer lógica adicional em caso de erro
                }
            },
            error: function (error) {
                console.error('Erro na chamada AJAX: ', error);
                // Adicione aqui qualquer lógica adicional em caso de erro
            }
        });
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}