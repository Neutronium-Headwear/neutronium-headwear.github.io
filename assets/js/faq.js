document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.action').forEach(function(icon) {
        icon.addEventListener('click', function() {
            var answer = icon.closest('.qa').querySelector('.answer');
            var displayStyle = window.getComputedStyle(answer).display; // 获取最终计算后的display值
            if (displayStyle === 'none') {
                answer.style.display = 'block'; // 如果隐藏，则显示
            } else {
                answer.style.display = 'none'; // 如果显示，则隐藏
            }

            // 切换图标类
            if (icon.classList.contains('fa-chevron-right')) {
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right');
            }
        });
    });
});
