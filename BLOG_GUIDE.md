# Blog publishing guide

The blog is published from Markdown files in `_posts` through GitHub Pages. GitHub authentication and repository permissions protect publishing. A visitor can read the blog, but cannot change the live site without write access to this repository.

## Create a post from a smartphone

1. Sign in to GitHub as `kanta-s` in a mobile browser.
2. Open <https://github.com/kanta-s/kanta-s.github.io/new/main/_posts>.
3. Name the file `YYYY-MM-DD-short-title.md`, using the publication date and a short lowercase English slug. Example: `2026-09-04-first-post.md`.
4. Copy the template below and replace its title, date, description, and body.
5. Select **Commit changes** and commit directly to the `main` branch.
6. Wait about one or two minutes, then open <https://kanta-s.github.io/blog/?refresh=1>.

```markdown
---
layout: post
title: "Post title"
date: 2026-09-04 12:00:00 +0900
description: "One-sentence summary shown on the Blog page."
---

Write the post here in Markdown.
```

## Edit or remove a post

1. Open <https://github.com/kanta-s/kanta-s.github.io/tree/main/_posts> in a mobile browser.
2. Select the post file.
3. Use the pencil icon to edit it, or the file menu to delete it.
4. Commit the change to `main`. GitHub Pages republishes the site automatically.

## Access and safety

- Do not add another person as a repository collaborator unless that person should be able to publish.
- Keep two-factor authentication enabled on the GitHub account.
- Never put passwords, access tokens, internal information, unpublished company data, or personal information in a post or repository file.
- Keep posts personal and product-neutral. Do not include medicine promotion, treatment recommendations, or medical advice.
- Other GitHub users may be able to suggest changes through a fork or pull request, but suggestions do not appear on the site unless `kanta-s` accepts and merges them.
