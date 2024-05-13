
document.addEventListener("DOMContentLoaded", function() {
    fetch('../../navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-placeholder').innerHTML = html;
            var links = document.querySelectorAll('.navbar a'); // Assuming your links are within <a> tags
            var currentUrl = decodeURIComponent(window.location.pathname.split('/').pop());; // Get the last segment of the URL path

            var setActive = false; // To check if any link has been activated
            var productLink; // To hold a reference to the product entry link

            links.forEach(link => {
                var linkUrl = link.getAttribute('href');
                if (linkUrl) {
                    var linkPage = linkUrl.split('/').pop(); // Get the last segment of the href attribute
                    if (linkPage === currentUrl) {
                        link.classList.add('active');
                        setActive = true;
                    }
                    if (linkUrl.includes("product-entry.html")) {
                        productLink = link; // Save the product link
                    }
                }
            });

            if (!setActive) {
                productLink.classList.add('active'); 
            }

        })
        .catch(error => console.error('Error loading the dropdown menu: ', error));

    fetch('../../footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer-placeholder').innerHTML = html;
    })
    .catch(error => console.error('Error loading the footer: ', error));

});

const dropdown_initialize = () => {
    const productsLink = document.querySelector('.navbar li:nth-child(2) a');
    const dropdownMenu = document.querySelector('.dropdown');

    // 鼠标悬停在 'Products' 链接上显示下拉菜单
    productsLink.addEventListener('mouseover', function () {
        dropdownMenu.style.display = 'block'; // 显示下拉菜单
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
    });

    // 鼠标离开 'Products' 链接时隐藏下拉菜单
    // 同时考虑到鼠标可能直接从下拉菜单移出的情况
    productsLink.addEventListener('mouseout', function (event) {
        // 检查鼠标移出的目标是否仍在下拉菜单或产品链接内
        if (!dropdownMenu.contains(event.relatedTarget) && event.relatedTarget !== productsLink) {
            dropdownMenu.style.display = 'none'; // 隐藏下拉菜单
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
        }
    });

    dropdownMenu.addEventListener('mouseover', function () {
        dropdownMenu.style.display = 'block'; // 保持显示状态
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
    });

    dropdownMenu.addEventListener('mouseout', function () {
        dropdownMenu.style.display = 'none'; // 隐藏下拉菜单
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
    });
}