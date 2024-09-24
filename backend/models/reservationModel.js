const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    flightName: { type: String, required: true }, // Uçuşun adı/kodu
    flightNumber: { type: Number, required: true }, // Uçuş numarası
    bookingDate: { type: Date, default: Date.now }, // Rezervasyon tarihi

    // Uçak tipi bilgisi
    aircraftType: {
      iataMain: { type: String, required: true },
      iataSub: { type: String, required: true },
    },

    // Bagaj bilgileri
    baggageClaim: {
      belts: [{ type: String }], // Bagaj bantları
    },

    // Codeshare uçuşları
    codeshares: {
      codeshares: [{ type: String }], // Codeshare kodları
    },

    // Uçuş zamanları
    actualLandingTime: { type: Date, required: true }, // Gerçek iniş zamanı
    estimatedLandingTime: { type: Date, required: true }, // Tahmini iniş zamanı
    expectedTimeOnBelt: { type: Date, required: true }, // Bagaj alım zamanı

    flightDirection: { type: String, required: true }, // Uçuş yönü (A: Gelen, D: Giden)
    isOperationalFlight: { type: Boolean, required: true }, // Operasyonel uçuş bilgisi
    mainFlight: { type: String }, // Ana uçuş kodu

    // Havayolu bilgisi
    prefixIATA: { type: String, required: true },
    prefixICAO: { type: String, required: true },
    airlineCode: { type: Number, required: true },

    // Uçuş durumu
    publicFlightState: {
      flightStates: [{ type: String }], // Uçuş durumu bilgileri (ör. ARR, EXP)
    },

    // Uçuş rotası
    route: {
      destinations: [{ type: String }], // Varış noktaları
      eu: { type: String }, // AB üyesi olup olmadığı
      visa: { type: Boolean }, // Vize gerekliliği
    },

    // Planlanan kalkış tarihi ve saati
    scheduleDateTime: { type: Date, required: true }, // Planlanan zaman
    scheduleDate: { type: String, required: true }, // Planlanan tarih
    scheduleTime: { type: String, required: true }, // Planlanan saat

    serviceType: { type: String, required: true }, // Hizmet tipi (J: Yolcu uçuşu)
    terminal: { type: Number, required: true }, // Terminal numarası
  },
  { timestamps: true } // Otomatik olarak createdAt ve updatedAt ekler
);

module.exports = mongoose.model("Reservation", reservationSchema);
