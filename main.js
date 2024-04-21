document.addEventListener("DOMContentLoaded", function() {
    const titleElement = document.querySelector('.title');
    const colors = ['#000000', '#00008B', '#4B0082']; 
    let currentIndex = 0;
  
    function changeColor() {
      titleElement.style.color = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }
  
    setInterval(changeColor, 1000);
  
    const buttons = document.querySelectorAll('.buttons a');

    buttons.forEach(function(button) {
      button.addEventListener('mousedown', function() {
        button.style.backgroundColor = '#555';
      });
  
      button.addEventListener('mouseup', function() {
        button.style.backgroundColor = ''; 
      });
    });
  });
  