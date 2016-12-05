 var current_category= animals_data.category[0];
 var current_animal=current_category.animals[0];






$(document).ready(function (){	
    
function FillDropdown (template, data){
 	var html    = template(data);
	$('#dd-content').html(html);
    $(".cat-btn").click(function () {
        var index = $(this).data("id");
        showTemplate(index);
    });     
}    
    

/**compile all templates**/    
var source   = $("#animal-template").html();
var animal_template = Handlebars.compile(source);

source= $("#category-template").html();
var category_template = Handlebars.compile(source);

source= $("#all-template").html();
var all_template = Handlebars.compile(source);

source= $("#dropdown-template").html();
var dropdown_template = Handlebars.compile(source);

source= $("#single-template").html();
var single_template = Handlebars.compile(source);
    

 function showTemplate(index){
    current_category= animals_data.category[index];
    var html= category_template(current_category);
    $('#content').html(html); 
    $(".navbar .active").removeClass("active");
    $(".cat-btn").addClass("active"); 
    $("#category-btn").addClass("active");
    $("#home-breadcrumb").click(function(){
        $("#home-page").click();                
    }); 
     
     $(".single-animal").click(function(){
                var index = $(this).data("id");     
                showAnimal(index);        
                }); 
 }    

function showAnimal(index){
    current_animal=current_category.animals[index];
    var html= single_template(current_animal);
    $('#content').html(html);
    $(".navbar .active").removeClass("active");
    $("#home-breadcrumb").click(function(){
        $("#home-page").click();                
    });
    
    
    
}    
    
    $("#home-page").click(function () {
        var html= animal_template(animals_data);
        $('#content').html(html); 
        $(".navbar .active").removeClass("active");
        $("#home-page").addClass("active"); 
        $(".animal-type").click(function (){
            var index = $(this).data("id");
            showTemplate(index);
                $("#home-breadcrumb").click(function(){
                    $("#home-page").click();  
                });
                         
                $(".single-animal").click(function(){
                var index = $(this).data("id");     
                showAnimal(index);        
                }); 

            });
    });
    
    
         $("#all-animals").click(function () {
    
            var html= all_template(animals_data);
            $('#content').html(html); 
             
            $(".navbar .active").removeClass("active");
            $("#all-animals").addClass("active"); 
             
            
             
                $("#home-breadcrumb").click(function(){
                    $("#home-page").click();
                });
             
              $(".single-animal").click(function(){
                var index = $(this).data("id");     
                showAnimal(index);        
                }); 
             
    }); 

$("#home-page").click();
FillDropdown(dropdown_template,animals_data);    
    
});