document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project, .project-2');
  
    projects.forEach(function(project) {
      project.addEventListener('mouseenter', function() {
        project.style.transform = 'scale(1.05)'; 
        project.style.transition = 'transform 0.5s ease';
      });
      project.addEventListener('mouseleave', function() {
        project.style.transform = 'scale(1)'; 
      });
    });
  });
  