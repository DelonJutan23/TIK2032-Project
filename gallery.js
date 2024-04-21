document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    galleryItems.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
      });
  
      item.addEventListener('mouseleave', function() {
        item.style.transform = 'scale(1)';
      });
    });
  });
  