# Kanta Sato — GitHub Pages site

A bilingual personal profile site for GitHub Pages. The site contains only `Home` and `Resume`; it intentionally omits Publications, Blog, and Visualizations.

## Replace the placeholders

The GitHub username and site URL are already configured for `kanta-s`. Edit `_config.yml` and replace:

1. `#add-orcid-url` with the full ORCID URL
2. `#add-booklog-url` with the full Booklog URL

Replace `assets/img/profile-placeholder.svg` with a public profile image. Either keep the same filename or update the image path in `index.html`.

## Publish at `https://kanta-s.github.io`

1. Use the public repository named exactly `kanta-s.github.io`.
2. Copy the contents of this folder to the repository root.
3. Commit and push the files to the default branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, select **Deploy from a branch**, then choose the default branch and `/ (root)`.

GitHub Pages will build the Jekyll site and publish it at `https://kanta-s.github.io`.

## Optional local preview

With Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```
