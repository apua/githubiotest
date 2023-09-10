document.querySelectorAll('main>article').forEach(async elm => {
  const resp = await fetch(`./${elm.id}.html`);
  console.assert(resp.ok, "%o", resp);
  const contentHtml = await resp.text();
  elm.innerHTML = contentHtml;
});
