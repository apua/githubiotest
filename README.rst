Considerations:

- Dark and Light mode.

- Special banner for whole site, including customized font.

- Default English and secondary Mandarin.

- Float sticky things (`<aside>`)at top-right corner, including
  toolbar (`<menu>`), breadcrumb, and table of content (`<details>`).

- Author at footer.

- Set max width of main content (`<main>`).

- Under HTTP/2, separate contents into files.

- Split theme settings out.

  .. note:: `theme.js` has to load immediately, not after DOM rendering.

- Split articles into files.

TODO:

- Refer to MDN's style, configure <aside> for 3 layout.
  Theoretically footer should display fine even the content is short.
