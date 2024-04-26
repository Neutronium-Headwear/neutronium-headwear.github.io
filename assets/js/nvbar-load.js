
document.addEventListener("DOMContentLoaded", function() {
    fetch('../../navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-placeholder').innerHTML = html;
            // 导航HTML已经被加载和插入，现在设置active类
            var links = document.querySelectorAll('.navbar .nav-link');
            var currentUrl = window.location.pathname.split('/').pop();  // 获取当前页面的文件名

            links.forEach(link => {
                if (link.getAttribute('href').includes(currentUrl)) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error loading the dropdown menu: ', error));
});