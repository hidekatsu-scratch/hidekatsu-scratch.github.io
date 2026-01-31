function loadPartInto(tag, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.querySelector(tag).insertAdjacentHTML("beforeend", html);
    });
}

// head
loadPartInto("head", "/parts/head.html");

// header / footer
loadPartInto("#header", "/parts/header.html");
loadPartInto("#footer", "/parts/footer.html");
