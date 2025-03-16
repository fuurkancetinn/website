document.addEventListener("DOMContentLoaded", function () {
    // CSS dosyasını bağla
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "web.css";
    link.href = "services.css";
    document.head.appendChild(link);

    // HTML dosyasını bağla (genellikle otomatik olarak bağlanır, ancak dinamik yükleme için aşağıdaki kod eklenebilir)
    fetch("web.html")
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML += html;
        })
        .catch(error => console.error("HTML yüklenirken hata oluştu:", error));

    // Navbar link animation
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffcc00";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    // Smooth scroll effect
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Add animation to service items
    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        setTimeout(() => {
            item.style.transition = "all 0.5s ease-in-out";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Button hover effect
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
            button.style.boxShadow = "0 4px 10px rgba(255, 204, 0, 0.5)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });
});
