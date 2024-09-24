const https = require("https");

function fetchFlights(callback) {
  const options = {
    method: "GET",
    hostname: "api.schiphol.nl",
    port: null,
    path: "/public-flights/flights",
    headers: {
      resourceversion: "v4",
      app_id: "498fded1",
      app_key: "ababe1996c69b7d2e0c51ff2f733e130",
    },
  };

  const req = https.request(options, (res) => {
    let chunks = [];

    res.on("data", (chunk) => {
      chunks.push(chunk);
    });

    res.on("end", () => {
      const body = Buffer.concat(chunks).toString();
      callback(null, JSON.parse(body)); // JSON formatında veriyi geri döndür
    });
  });

  req.on("error", (e) => {
    callback(e); // Hata varsa hatayı döndür
  });

  req.end();
}

module.exports = { fetchFlights }; // Fonksiyonu dışa aktar
