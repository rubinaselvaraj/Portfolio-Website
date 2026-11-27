# Rubina Selvaraj — Portfolio Website

A hand-built portfolio for a UI/UX and Graphic Designer. Plain HTML, CSS and JavaScript. No frameworks, no build step.

## Folder structure

```
rubina-portfolio/
├── index.html        Page structure and written content
├── style.css         All styling (colors and fonts are variables at the top)
├── script.js         Settings, project data and interactions
├── README.md
└── assets/
    ├── Rubina-Selvaraj-Resume.pdf   PLACEHOLDER: replace with your resume
    ├── images/       Social sharing image (og-cover.png)
    ├── profile/      Your portraits
    ├── projects/     Project covers and gallery images
    └── icons/        Favicon
```

## Run it locally

Open `index.html` in a browser. That works for most things.

For the most accurate preview, run a tiny local server from inside the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## What to replace first

Everything marked "placeholder" is meant to be swapped for your real content.

| What | Where |
| --- | --- |
| Your photo (hero) | `assets/profile/rubina-portrait.svg`, 4:5 portrait works best |
| Your photo (About) | `assets/profile/rubina-about.svg` |
| Resume | Replace `assets/Rubina-Selvaraj-Resume.pdf`, keeping the same file name |
| Email, LinkedIn, Behance | Contact section of `index.html` (search for `your-email@example.com` and `your-profile`) |
| Email for the form | `SETTINGS.contactEmail` at the top of `script.js` |
| Social sharing image | Replace `assets/images/og-cover.png` (1200 × 630) and set the real site address in the `og:url` tag in `index.html` |
| Favicon | `assets/icons/favicon.svg` |
| Internship / experience | The dashed block in the "Training & certifications" section of `index.html` |

### Replacing a photo

Save your image in the same folder and either keep the file name, or change the `src` in `index.html`. For example, to use a JPG:

```html
<img src="assets/profile/rubina-portrait.jpg" width="800" height="1000" alt="Portrait of Rubina Selvaraj">
```

Always set `width` and `height` to the image's real pixel size and write a short, honest `alt` description.

## Adding your own portfolio work

All projects live in one list called `PROJECTS` in `script.js`. The gallery, the filters and the case-study modal are all generated from it.

1. Export your designs as JPG, PNG or WebP. Aim for about 1600 px on the long side and keep each file under roughly 400 KB (tools like Squoosh help).
2. Put them in `assets/projects/`.
3. In `script.js`, find your project and update:
   - `cover.src`, `cover.w`, `cover.h`, `cover.alt`: the card image and its real size
   - `gallery`: the images in "Final design gallery"
   - the written fields: `overview`, `problem`, `objectives`, `research`, `process`, `decisions`, `takeaways`
4. Delete the line `placeholder: true` from the project so the "Sample layout" note disappears.

### Adding a new graphic design project

Copy one of the `graphic(...)` lines:

```js
graphic('poster-series', 'Festival Posters', 'Diwali poster series', 1200, 1600, 'One sentence about the project.'),
```

The arguments are: file prefix, filter category, title, cover width, cover height, overview. Then add `poster-series-cover.jpg` and gallery images, and change the `src` values (the `graphic()` helper assumes `.svg` files, so for JPGs write the project out in full like the Wedding Planner entry).

### Adding a new category

Use any new text as the `category` of a project. The filter chip appears automatically.

## Connect the contact form

A website made only of HTML, CSS and JavaScript **cannot send email by itself**. The form validates what a visitor types, but sending needs a service that runs on a server. Until you connect one, the form falls back to opening the visitor's email app (a `mailto:` link) with their message filled in. It does not claim that a message was sent.

To make it send for real, with a free form service:

### Option A: Formspree

1. Create a free account at formspree.io and click "New form".
2. Copy the form endpoint, which looks like `https://formspree.io/f/xxxxxxxx`.
3. In `script.js`, paste it into settings:
   ```js
   formEndpoint: 'https://formspree.io/f/xxxxxxxx'
   ```
4. Deploy, send a test message, and confirm the first email in your inbox (Formspree asks you to verify once).

### Option B: Web3Forms, Getform, Netlify Forms and others

Any service that accepts a JSON `POST` and returns a success status works the same way. Paste its endpoint into `formEndpoint`. Some services need an access key as an extra field. If yours does, add it to the `data` object in the submit handler in `script.js`. Netlify Forms uses a different method (a `netlify` attribute on the form), so follow Netlify's documentation if you host there and prefer it.

The hidden `_gotcha` field is a simple spam trap. Keep it in place.

## Deploy for free

Any static host works. Upload the whole `rubina-portfolio` folder to one of these:

- **Netlify**: drag and drop the folder at app.netlify.com/drop
- **GitHub Pages**: push the folder to a repository, then Settings → Pages
- **Vercel**: import the repository or drag the folder in

After deploying, update the `og:url` meta tag in `index.html` to your real address.

## Customizing the design

Open `style.css`. The color palette and fonts are variables at the very top:

```css
--bg: #FAF9F6;        /* page background */
--ink: #20201F;       /* main text */
--accent: #F26B5B;    /* coral highlights */
--surface: #EDE8E0;   /* secondary background */
--muted: #77736E;     /* muted text */
```

Fonts are Bricolage Grotesque (headings) and Instrument Sans (text), loaded from Google Fonts in `index.html`. If you prefer not to depend on Google, download them, place them in an `assets/fonts` folder, and load them with `@font-face`. The site falls back to system fonts if they do not load.

## Accessibility and performance notes

- Semantic landmarks, a skip link, visible keyboard focus and labelled form fields.
- The project modal uses the native `<dialog>` element: Esc closes it, focus stays inside, and the left and right arrow keys move between projects.
- Animations are short and switch off for visitors who have "reduce motion" turned on.
- Color contrast: the coral accent is always paired with dark text. It is not used for small text on the light background, because it would not meet the 4.5:1 contrast guideline there. The grey `--muted` color is used only for large or decorative text. Small secondary text uses `--muted-text`.
- Images below the first screen load lazily, and every image has width and height set to avoid layout shift.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari.
