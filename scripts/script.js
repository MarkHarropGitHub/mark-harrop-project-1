// Get the modal from the homepage

const journeyModal = document.getElementById('findOutMore');

// Get the button that opens the modal

const openModal = document.getElementById('openMore');

// Get the span that closes the modal

const closeModal = document.getElementsByClassName('closeModal')[0];

// When the user clicks the button open the modal

openModal.addEventListener('click', function() {

    journeyModal.style.display = "flex";
    document.getElementById('travelImage').src = "http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg";
    document.getElementById('travelImage').alt = "Australia's best beaches";
    document.getElementById('addedContent').innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, omnis. Dicta corrupti nobis sed pariatur labore quod, voluptate porro quam dolore repellendus facere expedita atque magnam laboriosam ad molestias reiciendis dolorem! Tenetur, asperiores illum.";
    
});


// When the user clicks the <span> it closes the modal

closeModal.addEventListener('click', function() {
    journeyModal.style.display = "none";
});
