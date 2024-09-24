const Reservation = require("../models/reservationModel");

// Rezervasyon ekleme
const addReservation = async (req, res) => {
  try {
    const reservationData = new Reservation(req.body);
    const savedReservation = await reservationData.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Tüm rezervasyonları listeleme
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tüm rezervasyonları silme
const deleteAllReservations = async (req, res) => {
  try {
    const result = await Reservation.deleteMany({});
    res.status(200).json({
      message: "All reservations have been deleted",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addReservation,
  getAllReservations,
  deleteAllReservations, // Yeni fonksiyon eklendi
};
