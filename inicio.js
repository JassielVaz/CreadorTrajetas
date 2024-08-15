var imagenSeleccionada = '';
var mensajeUsuario = '';
var nombreUsuario = '';
var tipoLetraSeleccionado = 'Arial';
var colorLetraSeleccionado = '#000000';

document.getElementById('vista-previa').addEventListener('click', function() {
    mostrarVistaPrevia();
});

document.getElementById('imagen1').addEventListener('click', function() {
    seleccionarImagen(this.src);
});
document.getElementById('imagen2').addEventListener('click', function() {
    seleccionarImagen(this.src);
});
document.getElementById('imagen3').addEventListener('click', function() {
    seleccionarImagen(this.src);
});

function seleccionarTematica(tematica) {
    var imagenes = {
        'navidad': [
            'media/navidad4.jpg',
            'media/navidad5.jpg',
            'media/Navidad6.jpg'
        ],
        'san_valentin': [
            'media/valentin1.jpg',
            'media/valentin2.jpg',
            'media/valentin3.jpg'
        ],
        'cumpleanos': [
            'media/cumple1.jpg',
            'media/cumple2.jpg',
            'media/cumple3.jpg'
        ]
    };

    document.getElementById('opciones-imagenes').style.display = 'block';

    for (var i = 0; i < 3; i++) {
        document.getElementById('imagen' + (i + 1)).src = imagenes[tematica][i];
    }

    imagenSeleccionada = '';
    document.getElementById('tarjeta').style.backgroundImage = '';

    // Cambiar el fondo de la página usando classList
    document.body.className = tematica;
}

function seleccionarImagen(src) {
    imagenSeleccionada = src;
}

function mostrarVistaPrevia() {
    var tarjeta = document.getElementById('tarjeta');
    tarjeta.style.backgroundImage = `url('${imagenSeleccionada}')`;
    tarjeta.style.backgroundSize = "cover";
    tarjeta.style.backgroundPosition = "center";
    
    mensajeUsuario = document.getElementById('mensaje').value;
    nombreUsuario = document.getElementById('nombre').value;
    tipoLetraSeleccionado = document.getElementById('tipo-letra').value;
    colorLetraSeleccionado = document.getElementById('color-letra').value;

    document.getElementById('tarjeta-texto').innerText = mensajeUsuario;
    document.getElementById('tarjeta-texto').style.fontFamily = tipoLetraSeleccionado;
    document.getElementById('tarjeta-texto').style.color = colorLetraSeleccionado;
    document.getElementById('tarjeta-nombre').innerText = "Creado por: " + nombreUsuario;
}
