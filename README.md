# This repo is now archived and all of my photos have now been migrated over to my main website (https://reecemercer.dev)

### Hosted at a subdomain of my main personal website, this is a photography portfolio, acting as a place for me to showcase my photography.


Images are hosted on an AWS S3 instance. This site uses the same backend server in use for my personal site. It hosts the code for both the GitHub viewer as well as the image requests made by this website. In particular, it receives requests for particular images, or groups of images, and generates the public URL's for them, which can then be passed off to the frontend for display.
