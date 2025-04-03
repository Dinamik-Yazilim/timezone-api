// Tarayıcıdan çağrıldığında JSON döndüren basit bir API
document.addEventListener("DOMContentLoaded", function () {
    const currentTime = new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });

    const response = {
        timezone: "Europe/Istanbul",
        time: currentTime
    };

    // Sayfada JSON göster
    document.body.innerHTML = `<pre>${JSON.stringify(response, null, 4)}</pre>`;
});
