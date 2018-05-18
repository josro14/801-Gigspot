var img = ($('img').attr('src'));
console.log(img);
$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('img').attr('src', e.target.result);
                console.log(e);
            }
    
            reader.readAsDataURL(input.files[0]);
            console.log(input.files);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
  
    $("#profile-picture").on('click', function() {
       $(".file-upload").click();
    });
});

