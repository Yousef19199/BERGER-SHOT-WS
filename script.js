function makeOrder() {
    let number = Math.floor(Math.random() * 900) + 100;
    document.getElementById("orderNumber").innerText = "🔔 رقم طلبك: " + number;
}
