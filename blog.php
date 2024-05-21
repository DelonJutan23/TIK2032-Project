<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php require_once 'connection.php'; ?>
    <title>Gallery</title>
    <link rel="stylesheet" type="text/css" href="stylesblog.css">
</head>
<body>
    <header>
        <h1>BLOG</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <div class="allblog">
            <?php 
            while ($articlePrev = $resultBlogPreview->fetch_assoc()) {
            ?>
            <div class="blog-post">
                <h2 class="blog-title"><a href="<?php echo $articlePrev['link']; ?>"><?php echo $articlePrev['title']; ?></a></h2>
                <p class="blog-content"><?php echo $articlePrev['content']; ?></p>
            </div>
            <?php
            }
            ?>       
        </div>
    </main>
    <footer>
        <p>&copy; 2024 Delon Jutan's Personal Website</p>
    </footer>
</body>
</html>
