document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = document.querySelectorAll('.blog-post');
  
    blogPosts.forEach(function(post) {
      post.addEventListener('mouseenter', function() {
        post.style.transform = 'scale(1.01)';
        post.style.transition = 'transform 0.3s ease'; 
      });
  
      post.addEventListener('mouseleave', function() {
        post.style.transform = 'scale(1)'; 
      });
    });
  
    blogPosts.forEach(function(post) {
      post.addEventListener('click', function() {
        alert('Post clicked!');
      });
    });
  
    blogPosts.forEach(function(post, index) {
      post.style.transitionDelay = (index * 0.1) + 's';
      post.classList.add('animate-post');
    });
  
    window.addEventListener('scroll', function() {
      blogPosts.forEach(function(post) {
        const postPosition = post.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (postPosition < screenPosition) {
          post.classList.add('post-appear');
        }
      });
    });
  });
  