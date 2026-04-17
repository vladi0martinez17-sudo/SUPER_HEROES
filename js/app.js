// ===== ARCHIVO JS DE MARVEL =====

console.log("%c¡BIENVENIDO AL UNIVERSO MARVEL! 🕷️🦸‍♂️", "color: red; font-size: 20px; font-weight: bold;");

// 1. FUNCIÓN PARA EL BOTÓN DE ENVÍO
const btnEnviar = document.getElementById('btnEnviar');
const aviso = document.getElementById('aviso');

if(btnEnviar) {
    btnEnviar.addEventListener('click', function() {
        // Cambiamos el display de none a block para que aparezca
        aviso.style.display = 'block';
        aviso.style.color = '#E62424';
        aviso.style.fontWeight = 'bold';
        aviso.style.fontSize = '1.2rem';

        // Opcional: Hacer que desaparezca después de 3 segundos
        setTimeout(() => {
            aviso.style.display = 'none';
        }, 3000);
    });
}

// 2. EFECTO SCROLL PARA RESALTAR MENÚ ACTIVO
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Cuando la sección está en la pantalla
        if (rect.top <= 150 && rect.bottom >= 150) {
            const id = section.getAttribute('id');
            
            // Quitamos estilo a todos
            navLinks.forEach(link => {
                link.style.background = '';
                link.style.color = '';

                // Ponemos estilo al que coincide
                if(link.getAttribute('href') === '#' + id) {
                    link.style.background = 'white';
                    link.style.color = '#E62424'; // Rojo Marvel
                    link.style.fontWeight = 'bold';
                }
            });
        }
    });
});

// 3. EFECTO OPCIONAL: Título que parpadea suavemente
const titulos = document.querySelectorAll('.titulo-seccion');
setInterval(() => {
    titulos.forEach(tit => {
        tit.style.textShadow = tit.style.textShadow ? '' : '0 0 15px #E62424';
    });
}, 1500);
