const express = require("express");
const {
  addReservation,
  getAllReservations,
  deleteAllReservations,
} = require("../controllers/reservationController");

const router = express.Router();

// Kullanıcının rezervasyonlarını ekle
router.post("/", addReservation);

// Tüm rezervasyonları listele
router.get("/", getAllReservations);

router.delete("/alldelete", deleteAllReservations); // Tüm rezervasyonları silme

module.exports = router;
