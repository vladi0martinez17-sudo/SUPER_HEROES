console.log("Marvel cargado correctamente 🕷️");

// --- BOTÓN ENVIAR ---
const btnEnviar = document.getElementById('btnEnviar');
const aviso = document.getElementById('aviso');

btnEnviar.addEventListener('click', function() {
    aviso.style.display = 'block';
    
    // Desaparece después de 3 segundos
    setTimeout(() => {
        aviso.style.display = 'none';
    }, 3000);
});

// --- MENÚ ACTIVO AL HACER SCROLL ---
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('activo');
                if(link.getAttribute('href') === '#' + id) {
                    link.classList.add('activo');
                }
            });
        }
    });
});
