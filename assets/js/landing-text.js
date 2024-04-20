function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.overlay-text');
    const initialFontSizes = Array.from(texts, text => parseFloat(window.getComputedStyle(text).fontSize));

    const handleScroll = throttle(function() {
        const scrollY = window.scrollY;
        texts.forEach((text, index) => {
            const newFontSize = initialFontSizes[index] + scrollY / 80;
            const newOpacity = Math.max(0, 1 - scrollY / 500);
            text.style.fontSize = `${newFontSize}px`;
            text.style.opacity = newOpacity;
        });
    }, 5);  // Update every 50 milliseconds

    window.addEventListener('scroll', handleScroll);
});