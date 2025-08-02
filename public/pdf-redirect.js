// PDF redirect script for GitHub Pages 404 fallback
(function() {
  const path = window.location.pathname;
  const lowerPath = path.toLowerCase();

  // First check if path contains uppercase letters and redirect to lowercase
  if (path !== lowerPath) {
    window.location.replace(lowerPath);
    return;
  }

  if (path.endsWith('.pdf')) {
    let redirectPath = '';

    if (path.startsWith('/atiyah-macdonald/')) {
      // /atiyah-macdonald/{filename}.pdf → /pdfs/atiyah-macdonald/{filename}.pdf
      redirectPath = path.replace('/atiyah-macdonald/', '/pdfs/atiyah-macdonald/');
    } else if (path.match(/^\/[^\/]+\.pdf$/)) {
      // /{filename}.pdf → /pdfs/{filename}.pdf
      redirectPath = '/pdfs' + path;
    } else {
      redirectPath = '/pdfs' + path;
    }

    if (redirectPath) {
      window.location.replace(redirectPath);
    }
  }
})();
