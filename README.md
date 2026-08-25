# ADPRO GH LTD Website

Static website for ADPRO GH LTD printing and branding services.

## Publish

Upload the whole `ADPRO WEBSITE` folder to any static hosting provider. The required entry file is `index.html`.

### Netlify

1. Open Netlify and choose **Add new site**.
2. Choose **Deploy manually**.
3. Drag this project folder into the upload area.

### GitHub Pages

1. Create a GitHub repository.
2. Upload all files and the `assets` folder.
3. Open **Settings > Pages**.
4. Select the main branch and root folder, then save.

### Vercel

1. Import the repository in Vercel, or install the Vercel CLI.
2. Use the project root as the site root.
3. No build command or output directory is needed.

## Local preview

From this folder, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser. If port 8000 is busy, use another port, for example `python -m http.server 8080`.

## Editing guide

### Company name and contact details

Edit the header, contact section, and footer in `index.html`. Search for `ADPRO GH LTD`, the phone number, or the email address to find the relevant text.

### WhatsApp quote requests

The quote form is in `index.html`. Its WhatsApp behavior is in `script.js`. The number is stored in the `whatsappUrl` line as digits only, using the international format without `+` or spaces:

```js
https://wa.me/233598556314
```

Update that number if the business WhatsApp number changes.

### Colors and layout

The main colors are CSS variables at the top of `styles.css`. Update `--teal`, `--teal-deep`, `--coral`, and `--coral-dark` to change the blue and red brand palette. The variable names are kept for compatibility with the existing styles.

### Images and logo

- Replace `assets/adpro-logo.png` to change the logo while keeping the same filename.
- Portfolio, team, and section images are linked from Unsplash in `index.html`.
- To use local images, place them in `assets/` and replace an image `src` with a path such as `assets/portfolio-printing.jpg`.

### Portfolio items

Portfolio filters and cards are in the `portfolio-filters` and `portfolio-grid` sections of `index.html`. Each card needs a matching `data-category` value and each filter button needs the same value in `data-filter`.

## Project files

- `index.html` - page content and structure
- `styles.css` - responsive styling, colors, and layout
- `script.js` - WhatsApp form, portfolio filters, expandable cards, and team slider
- `assets/` - logo and favicon files
- `robots.txt` - allows search engines to crawl the site
- `.nojekyll` - keeps GitHub Pages from applying Jekyll processing

## Before launch

- Replace placeholder social links in the footer with the company's real profile URLs.
- Replace the displayed placeholder phone and email in the contact section if needed.
- Confirm all image licenses and replace remote images with owned assets where required.
- Test the WhatsApp form on both desktop and smartphone.
