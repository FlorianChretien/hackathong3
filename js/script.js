$( document ).ready(function() {

    var chemin = window.location.href;

    $( "#lieu" ).change(function() {
        $( "#lieu option:selected" ).each(function() {
            if($(this).val() == 1){
                document.location.href = "page-interne/map.php";
            }
            if($(this).val() == 2){
                $('#bloc-musee').css("display", "block");
            }
        });
    });
});

