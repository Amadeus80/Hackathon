addEventListener("load", () => {
    /* Animación de la imagen del hero */
    const el = document.getElementById("imagenHero");
    const height = el.clientHeight;
    const width = el.clientWidth;
    
    el.addEventListener("mousemove", (evt) => {
        const {layerX, layerY} = evt;
    
        const yRotation = (
            (layerX - width / 2) / width
        )  * 20
    
        const xRotation = (
            (layerY - height / 2) / height
        )  * 20
    
        const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`
    
        el.style.transform = string
    })
    
    el.addEventListener("mouseout", () => {
        el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
        `
    })


    /* Funcionalidad subir arriba de la página */
    const botonInicio = document.getElementById("botonInicio");
    botonInicio.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo(0,0);
    })

    const logo = document.getElementById("logo");
    logo.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo(0,0);
    })
    
})

/* Inicializo libreria de animaciones de scroll */
AOS.init();
