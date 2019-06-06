# Photography site

[![Netlify Status](https://api.netlify.com/api/v1/badges/0ab90b8d-52c0-4f95-a458-3dc83aef45e8/deploy-status)](https://app.netlify.com/sites/flamboyant-sinoussi-4dddff/deploys)

### Hosted at a subdomain of my main personal website, this is a photography portfolio, acting as a place for me to showcase my photography.


Images are hosted on an AWS S3 instance. This site uses the same backend server in use for my personal site. It hosts the code for both the GitHub viewer as well as the image requests made by this website. In particular, it receives requests for particular images, or groups of images, and generates the public URL's for them, which can then be passed off to the frontend for display.
