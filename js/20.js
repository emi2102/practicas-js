// Metodos de propiedad
const reproductor={
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id: ${id}`);
    },
    pausar:function(){
        console.log("pausando...");
    },
    crearPlaylist:function(nombre){
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist:function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.borrarCancion=function(id){
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("emiii");
reproductor.reproducirPlaylist("emiii");
