document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.overlay-text');

    // 存储每个文本的初始字体大小
    const initialFontSizes = Array.from(texts, text => parseFloat(window.getComputedStyle(text).fontSize));
    console.log(`The original font size is: ${initialFontSizes}`)

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        texts.forEach((text, index) => {
            // 基于初始字体大小计算新的字体大小
            const newFontSize = initialFontSizes[index] + scrollY / 2;  // 根据滚动距离递增字体大小
            const newOpacity = Math.max(0, 1 - scrollY / 500);  // 透明度逐渐减少

            text.style.fontSize = `${newFontSize}px`;
            text.style.opacity = newOpacity;
        });
    });
});
