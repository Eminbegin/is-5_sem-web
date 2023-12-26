(() => {
    const loadTimeSpan = document.querySelector('.load-time');
    window.addEventListener('load', () => {
        const pageEnd = performance.mark('pageEnd');
        const loadTime = pageEnd.startTime / 1000;
        loadTimeSpan.innerHTML += `Page loaded in ${Math.floor(100000 * loadTime) / 100} ms.`;
    });
})();
