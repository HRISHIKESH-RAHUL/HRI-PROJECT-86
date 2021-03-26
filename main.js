var canvas = new fabric.Canvas('myCanvas');
hero_image_height = 30;
hero_image_width = 30;
optimis_x = 10;
optimis_y = 10;

var optimis_objects = "";
var hero_image_object = "";
function optimis_update(){
    fabric.Image.fromURL("optimis.jpg", function(Img){
        optimis_objects = Img;

        optimis_objects.scaleToWidth(150);
        optimis_objects.scaleToHeight(150);
        optimis_objects.set({
            top:optimis_y,
            left:optimis_x
        });
        canvas.add(optimis_objects);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
       hero_image_objects = Img;

        hero_image_objects.scaleToWidth(hero_image_width);
       hero_image_objects.scaleToHeight(hero_image_height);
        hero_image_objects.set({
            top:optimis_y,
            left:optimis_x
        });
        canvas.add(hero_image_objects);
    })
}
