const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('mouseover', function(event) {
    const largerImage = document.createElement('img');
    largerImage.src = this.src; 
    largerImage.classList.add('larger-thumbnail'); 

    largerImage.style.position = 'absolute';
    largerImage.style.maxWidth = '200px'; 

    document.body.appendChild(largerImage); 

    document.addEventListener('mousemove', function(event) {
      largerImage.style.top = (event.clientY + 10) + 'px'; 
      largerImage.style.left = (event.clientX + 10) + 'px'; 
    });
  });

  thumbnail.addEventListener('mouseout', function() {
    const largerImage = document.querySelector('.larger-thumbnail');
    if (largerImage) {
      largerImage.remove();
    }
  });
});
//--------------------------------
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('input[value="Filtrar"]').addEventListener("click", function(event) {
      event.preventDefault();
      
      var select = document.querySelector('select[name="filter"]');
      var selectedGenre = select.options[select.selectedIndex].text; 
      
      var table = document.querySelector('table');
      var rows = table.getElementsByTagName('tr');
      
      for (var i = 1; i < rows.length; i++) {
        var genreCell = rows[i].getElementsByTagName('td')[5]; 
        
        if (genreCell) {
          var genre = genreCell.textContent || genreCell.innerText; 
          
          if (genre === selectedGenre) {
            rows[i].style.display = ''; 
          } else {
            rows[i].style.display = 'none'; 
          }
        }
      }
    });
  });
//----------------------
var modal = document.getElementById('modal');
var closeButton = document.getElementsByClassName('close')[0];

var modalImage = document.getElementById('modal-image');
var modalTitle = document.getElementById('modal-title');
var modalArtist = document.getElementById('modal-artist');
var modalYear = document.getElementById('modal-year');
var modalGenre = document.getElementById('modal-genre');

var editButtons = document.querySelectorAll('button');

function showModal(event) {
    event.preventDefault();
  
    var row = this.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');
  
    var imageSrc = cells[1].querySelector('img').src;
    var title = cells[2].innerText;
    var artist = cells[3].innerText;
    var year = cells[4].innerText;
    var genre = cells[5].innerText;
  
    modalImage.src = imageSrc;
    document.getElementById('modal-title').value = title;
    document.getElementById('modal-artist').value = artist;
    document.getElementById('modal-year').value = year;
    document.getElementById('modal-genre').value = genre;
  
    modal.style.display = 'block';
  }
  editButtons.forEach(function(button) {
    button.addEventListener('click', showModal);
  });
closeButton.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};