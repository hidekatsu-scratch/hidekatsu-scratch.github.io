function loadPart(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

loadPart("header", "/parts/header.html");
loadPart("footer", "/parts/footer.html");
