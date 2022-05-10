
const filter = (data) => {
    document.querySelectorAll(".container div").forEach(elem => {
        elem.classList.remove('hide');
        if(data !== 'all'){
            if(elem.classList.contains(data)){
                elem.classList.add('hide');
            }
        }
    })
    $(document).ready(function(){
        $(".js--services-section").waypoint(function(direction){
            if (direction == "down"){
                $("nav").addClass("sticky");
            }else{
                $("nav").removeClass("sticky")
            }
        });
    });
}
$(document).ready(function(){
    $(".js--services-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky")
        }
    });
});