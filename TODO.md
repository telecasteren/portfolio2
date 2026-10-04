### General

PROJECT DETAIL

- FIX: share button should give options - popover?

## Setup

#### Architecture

- Vite, React, React Router, Typescript, Tailwind

#### Styling

`index.css`

- Tailwind CSS variables mapped to style-guide

#### HIERARCHY

```bash
# "/"
HEADER
    HOME
    - Hero
    - Projects
        - ProjectDetails
    - About
    - Contact
FOOTER

# "/projects/:slug"
HEADER
    PROJECT
    - ProjectDetails
FOOTER
```
