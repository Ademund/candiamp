# candiamp.tv

The landing page for **candiamp**, an unofficial Android TV client for Bandcamp's Subsonic
endpoint. Static HTML and CSS, served by GitHub Pages at <https://candiamp.tv>.

## Layout

```
index.html              the page
assets/style.css        all styling
assets/app.js           screenshot lightbox (progressive enhancement)
images/logo.png|webp    wordmark
images/icons/           favicons, touch icon and the web manifest
images/screens/         screenshots of the app, WebP, 1600x900
images/og.png           social preview card
CNAME                   candiamp.tv
```

No build step. Open `index.html` directly or serve the folder:

```sh
python -m http.server 8000
```

## Screenshots

The screenshots show the app running against an invented demonstration collection — no real
Bandcamp library, artist or artwork appears in them. They were captured at 1920×1080 from the app
on a TV and resized to 1600×900.

## Not affiliated with Bandcamp

Bandcamp is a trademark of Bandcamp, Inc. The name is used here only to say what the app connects
to.
