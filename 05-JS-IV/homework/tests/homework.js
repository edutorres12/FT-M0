function invocarMetodo(objeto, metodo) {
    objeto[metodo];
}             
const object = {
        x: 0,
        incrementX: function() {
        this.x++;
        },
}

object.incrementX();
