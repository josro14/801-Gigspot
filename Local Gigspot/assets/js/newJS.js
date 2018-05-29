// Profile Changes

// profile buttons
$("#addMusicsample").on('click', addnewMusic);
    function addnewMusic(){
        let newBandmusic = $('<audio controls class="description"><source src="horse.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>')
    $('#musicSample').append(newBandmusic);
};
$('#changebandName').on('click', function(){
    $("#bandName").attr("contenteditable","true");
})
$('#changebandBio').on('click', function(){
    $("#bandBio").attr("contenteditable","true");
})
$('#changebandAbout').on('click', function(){
    $('#bandAbout').attr('contenteditable', 'true');
})



// Modal control
// Get the modal
var modal = document.getElementById('myModal');
var bandmodal = document.getElementById('bandModal');
var venuemodal = document.getElementById('venueModal');

// Get the button that opens the modal


// Get the <span> element that closes the modal
var bclose = document.getElementsByClassName('bclose')[0];
var vclose = document.getElementsByClassName('vclose')[0];

// When the user clicks on the button, open the modal 
$('#editBandProfile').on('click', function(){
    modal.style.display = 'block'
})
$('#bandlogin').on('click', function(){
    bandmodal.style.display = 'block';
})
$('#venuelogin').on('click', function(){
    venuemodal.style.display = 'block';
})
// When the user clicks on <span> (x), close the modal
bclose.onclick = function(){
    bandmodal.style.display = 'none';
}
vclose.onclick = function(){
    venuemodal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// changes to photos
$(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#profile-picture').attr('src', e.target.result);
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



// For test purposes, saving locally
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

// google sign in
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  };

// google sign out
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

