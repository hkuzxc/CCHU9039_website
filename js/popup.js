document.addEventListener("DOMContentLoaded", () => {
    const overlay1 = document.getElementById("overlay1");
    console.log("DOM 已加载");
    console.log("找到的 overlay 元素：", overlay1);

    // 直接显示弹窗
    overlay1.classList.add("show");

    // 确认按钮逻辑
    document.getElementById("confirm-btn").addEventListener("click", () => {
        overlay1.classList.remove("show");
    });

    // 取消按钮逻辑
    document.getElementById("cancel-btn").addEventListener("click", () => {
        window.close();
    });
});
