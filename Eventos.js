document.querySelectorAll('.social-icon').forEach(function (icon) {
    icon.addEventListener('click', function (e) {
        console.log('Icon clicked'); // Verifica que el evento de clic está funcionando
        e.preventDefault(); // Prevenir la acción predeterminada de ir al enlace

        // Crear o actualizar el mensaje de agradecimiento
        let message = document.getElementById('thank-you-message');
        if (!message) {
            console.log('Creating message element');
            message = document.createElement('div');
            message.id = 'thank-you-message';
            message.style.marginTop = '20px';
            message.style.color = '#333';
            message.style.fontSize = '16px';
            document.querySelector('.social-section').appendChild(message);
        }
        message.textContent = '¡Gracias por seguirnos en nuestras redes sociales!';
        console.log('Message updated');

        // Esperar unos segundos antes de redirigir
        setTimeout(() => {
            console.log('Redirecting to', icon.href);
            window.open(icon.href, '_blank');
        }, 1500);
    });
});
///////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    var socialLinks = document.querySelectorAll('.social-icon');
    
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var url = this.getAttribute('href');
            window.open(url, '_blank');
        });
    });
});
//header escritorio
let lastScrollTop = 0;
const header = document.querySelector('header');

function hideHeader() {
    header.classList.add('hidden');
}

function showHeader() {
    header.classList.remove('hidden');
}




//lateral 
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.navbar');
    const menuCheckbox = document.getElementById('menu');
    const body = document.body;

    // Función para ocultar la barra lateral
    function hideSidebar() {
        sidebar.style.transform = 'translateX(100%)';
        sidebar.style.opacity = '0';
        menuCheckbox.checked = false; // Desmarca el checkbox del menú
    }

    // Mostrar la barra lateral cuando se hace clic en el icono del menú
    menuCheckbox.addEventListener('change', function () {
        if (menuCheckbox.checked) {
            sidebar.style.transform = 'translateX(0)';
            sidebar.style.opacity = '1';
        } else {
            hideSidebar();
        }
    });

    // Ocultar la barra lateral al hacer clic fuera de ella
    body.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuCheckbox.contains(event.target) && window.innerWidth <= 767) {
            hideSidebar();
        }
    });

    // Ocultar la barra lateral al hacer scroll
    window.addEventListener('scroll', function () {
        if (window.innerWidth <= 767) {
            hideSidebar();
        }
    });
});


///////////////////////////////////////////





