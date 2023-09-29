function loadProfileImage(event) {
  const image = document.getElementById("profilePicture");
  image.src = URL.createObjectURL(event.target.files[0]);
}


