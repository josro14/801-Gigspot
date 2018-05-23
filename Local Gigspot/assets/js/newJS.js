var img = ($('img').attr('src'));
console.log(img);
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("editProfile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#profileImage').attr('src', e.target.result);
                console.log(e);
            }
    
            reader.readAsDataURL(input.files[0]);
            console.log(input.files);
        }
    }
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".photo").on('click', function() {
       $(".file-upload").click();
    });
});



function saveEdits() {

    //get the editable element
    var editName = document.getElementById("bandName");
    var editBio = document.getElementById('bandBio');
   
    //get the edited element content
    var bandName = editName.innerHTML;
    var bandBio = editBio.innerHTML;
    var editPic = ($('img').attr('src'));
    
    
    //save the content to local storage
    localStorage.editbandName = bandName;
    localStorage.editbandBio = bandBio; 
    localStorage.setItem('bandPic', editPic);
    console.log(editPic);
    

    
    //write a confirmation to the user
    alert('Your changes were saved!');
    
    }
    

