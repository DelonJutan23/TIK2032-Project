<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php require_once 'connection.php'; ?>
    <title>Delon's Zone</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="dark-theme">
    <div class="portfolio-simple">

      <header class="header">
        <h1>HOME</h1>
        <nav>
          <ul>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="blog.php">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div class="overlap-group" style="display: flex; gap: 50px; align-items: flex-start;">
        <div class="intro" style="flex: 1;">
          <div class="content">
            <p class="title">Hello, my name is Delon Jutan! </p>
            <div class="subheadline">
              <p class="text">
                I'm a dedicated individual with a passion for 3D Art and Front-End Development. Currently
                pursuing my degree in Computer Science.
              </p>
            </div>
            <div class="buttons">
              <a href="project.html" class="button-primary" style="text-decoration: none;">
                <div class="text-2">Projects</div>
              </a>
              <a href="https://www.linkedin.com/in/delon-jutan/" class="button-secondary"
                style="text-decoration: none;">
                <div class="text-3">LinkedIn</div>
              </a>
            </div>
          </div>
        </div>
        <div class="image" style="flex: 1; margin-left: auto;">
          <img class="image-2" src="images/landingpage.png" />
        </div>
      </div>

      <footer class="footer-icons">
        <p> © 2024 Delon Jutan's Personal Website.</p>
      </footer>
    </div>
    <script src="main.js"></script>
  </body>
</html>