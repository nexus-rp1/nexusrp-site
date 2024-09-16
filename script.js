document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    const bodyBefore = document.querySelector('body::before');
    const gradient = `radial-gradient(circle at ${x}px ${y}px, rgba(196, 163, 248, 0.6), transparent 70%)`;

    // Met à jour le gradient en fonction de la position de la souris
    document.body.style.background = gradient;
});


