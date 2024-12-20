function primerClick() {
    document.getElementById('boton-inicio').classList += 'invisible';
    document.getElementById('hola-homero').classList += 'activo';

    setTimeout( () => {
        document.getElementById('segundo-boton').classList += 'activo';
    }, 10000);
}

function segundoClick(){
    alert("¿Cómo que ola? Se dice con H tarado jajaja");
    document.getElementById('segundo-boton').classList -= 'activo';
    document.getElementById('tercer-boton').classList += 'activo'; 
}

function tercerClick(){
    alert("Ahora si bro, bien hecho");
    alert("Bueno mentira, una vez mas amigo");
    document.getElementById('tercer-boton').classList -= 'activo';
    document.getElementById('cuarto-boton').classList += 'activo';  
}

function cuartoClick(){
    alert("solo una más dale jijijeje.");
    document.getElementById('cuarto-boton').classList -= 'activo';
    document.getElementById('quinto-boton').classList += 'activo';  
}

function quintoClick(){
    alert("Bueno ya. Para obtener tu regalo tendrás que hacer lo siguiente, nada dificil para ti:");
    alert("¿Preparado?");
    document.getElementById('quinto-boton').classList -= 'activo';
    document.getElementById('hola-homero').remove();
    document.getElementById('un-sudoku').classList += 'activo';

    setTimeout( () => {
        alert('¿Cómo lo beisbal? bueno dale que no es pa mañana');
        document.getElementById('un-sudoku').remove();
        document.getElementById('el-sudoku').classList +='activo';

    }, 3000);
}

function sextoClick(){
    alert('ni en pedo me espero 20 minutos a que acabes, ahora si el regalo:');
    document.getElementById('el-sudoku').classList -='activo';
    document.getElementById('regalo').classList +='activo';
    setTimeout( () => {
        document.getElementById('regalo').remove();
        document.getElementById('dibujo').classList +='activo';

        setTimeout( () => {
            
            document.getElementById('dibujo-dos').classList += 'activo';
            
            setTimeout( () => {
            
                document.getElementById('dibujo-dos').classList -= 'activo';
                
            }, 1000);

        }, 5000);

    }, 20000);
}