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
  
    const headerTitle = document.querySelector('header h1');
  
    headerTitle.addEventListener('mouseenter', function() {
      headerTitle.style.color = '#00008B'; 
    });
  
    headerTitle.addEventListener('mouseleave', function() {
      headerTitle.style.color = ''; 
    });
  
    const footerIcons = document.querySelectorAll('.footer-icons p');
  
    footerIcons.forEach(function(icon) {
      icon.addEventListener('click', function() {
        icon.style.color = '#00008B'; 
        setTimeout(function() {
          icon.style.color = ''; 
        }, 1000);
      });
    });
  });
  