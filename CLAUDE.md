# Seongmin Lee's homepage

Jekyll site built on the [al-folio](https://github.com/alshedivat/al-folio) theme
(forked at upstream commit `ac99061b`, 2025-05-12), published at
<https://nimgnoeseel.github.io>.

- **Deploy**: pushing to `main` runs the "Deploy site" GitHub Action, which builds
  the site and publishes it to the `gh-pages` branch. There is no staging step.
- **Local preview**: `docker compose up` serves <http://localhost:8080> with live
  reload. Jekyll restarts by itself when `_config.yml` changes.
- `_site/` is build output; never edit it.

## Where things live

| Content | File |
| --- | --- |
| Bio, profile box, announcement boxes | `_pages/about.md` |
| News | `_news/announcement_N.md` (next N = highest + 1) |
| Publications | `_bibliography/papers.bib` |
| Paper PDFs, slides, posters | `assets/pdf/` |
| Paper thumbnails (16:9 PNG) | `assets/img/publication_preview/` |
| Talks (talks tab; the web CV only links to it) | `_data/talks.yml` |
| Web CV | `assets/json/resume.json`, `_includes/resume/*.liquid` |
| PDF CV | `assets/pdf/cv.pdf` (generated outside this repo) |
| Recruiting slides (`/join/`, noindex) | `_pages/join.html`, `assets/pdf/lab-intro.pdf` |
| Styles | `_sass/_custom.scss` |
| Venue filter buttons | `assets/js/bibsearch.js` (`VENUE_GROUPS`) |
| Thumbnail click-to-zoom | `assets/js/preview-zoom.js` |

- Put style changes in `_sass/_custom.scss` only. `_sass/_base.scss` and
  `_sass/_themes.scss` are kept identical to upstream so the theme can be updated
  without merge conflicts.
- The blog is private. Drafts are in `_post_drafts/`. To publish, move a post to
  `_posts/` and remove `_pages/blog.md` from `exclude` in `_config.yml`.

## Update checklists

The same facts appear in several places. When something changes, update all of
the places listed, including `cv.pdf`, which is edited outside this repo.

### New paper

1. Add the entry to `papers.bib`: `abbr` (venue badge), `selected = {true}` to show
   it on the homepage, `pdf`, `preview`, and optionally `slides`, `poster`,
   `artifact`, `award_name`.
2. Put files in `assets/pdf/` and `assets/img/publication_preview/`. File names
   must match the bib fields exactly; a past `-slide.pdf` vs `-slides.pdf`
   mismatch left two Slides buttons broken.
3. If `abbr` is a venue not yet listed in `VENUE_GROUPS` in
   `assets/js/bibsearch.js`, add it there. Otherwise the paper gets no filter
   button.
4. Add a news item.
5. Update `cv.pdf`.

### New talk

1. Add it to the top of `_data/talks.yml` (newest first).
2. Optionally add a news item.
3. Update `cv.pdf`.

### New service (PC member, reviewer, organizer)

1. `resume.json` → `services.academic`.
2. Add a news item.
3. Update `cv.pdf`.

### Award, grant, or fellowship

1. `resume.json` → `Awards and Honors` or `Grants and Fellowships`.
2. For a paper award, also set `award_name` in `papers.bib`.
3. Add a news item.
4. Update `cv.pdf`.

### Affiliation change (e.g., joining POSTECH in February 2027)

1. `_pages/about.md`: bio paragraph, `profile.more_info` (phone and address),
   and the announcement boxes at the top.
2. `resume.json`: `basics.summary`, `basics.location`, and `Academic Positions`
   (add the new position, set the end date of the old one).
3. Add a news item.
4. Check the text in `_pages/join.html`.
5. `_data/socials.yml` if the email changes.
6. Update `cv.pdf`.

## Large files

GitHub rejects files over 100 MB, and `.git` is already about 470 MB, mostly
slide PDFs. Compress large slide decks before adding them, or host them on
Drive/Dropbox and link to them as the talks page does.
