 setInterval(() => { const historyElement = document.querySelector('.piano-menu__history'); if (historyElement) { const spans = historyElement.querySelectorAll('span'); spans.forEach(span => span.remove()); } }, 3000);