document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".shop-now").forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });
});

