const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./config/db");
const reservationRoutes = require("./routes/reservationRoutes");
const flightData = require("./config/flightData"); // Flight verilerini çekmek için gerekli modül

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/flights", (req, res) => {
  flightData.fetchFlights((error, data) => {
    if (error) {
      return res.status(500).send("Uçuş bilgileri alınamadı.");
    }
    res.status(200).json(data); // Uçuş verisini JSON olarak geri döndür
  });
});

// Veritabanı bağlantısını kur
dbConnect();

// Rezervasyon rotalarını kullan
app.use("/api/reservations", reservationRoutes);

// Sunucuyu dinle
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
