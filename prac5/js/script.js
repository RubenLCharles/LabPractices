$(document).ready(function(){
    $(".trigger").on("click", function(e){
        e.preventDefault();
        
        var x = $("#input").val(); // Adquiere el texto dentro de la textbox.

        $("<li class='element'>" + x + "</li>").appendTo("ul"); // Crea el li element.
        $("<button class='check'> Check </button>").appendTo(".element"); // Se agrega el boton de check.
        $("<button class='delete'> Delete </button>").appendTo(".element"); // Se agrega el boton de delete.
        $("li").removeClass("element"); // Para evitar que se agreguen otra vez.
    })

})

$(document).mousemove(function(){
    $(".check").on("click", function(e){
        e.preventDefault();

        var y = $(this).parent(); // Adquiere el elemento padre al boton presionado.
        y.css("text-decoration", "line-through") // Cambia el estilo del texto.

    })

    $(".delete").on("click", function(e){
        e.preventDefault();

        var z = $(this).parent(); // Adquiere el elemento padre al boton presionado.
        z.remove(); // Lo elimina.
    })
})
