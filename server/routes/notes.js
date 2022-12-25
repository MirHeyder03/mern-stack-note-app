import express from "express";
const router = express.Router();
import {
  createNote,
  getAllNotes,
  getNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";
import auth from "../middlewares/auth.js";

router.use(auth);
router.get("/", getAllNotes);
router.get("/:id", getNote);
router.post("/", createNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);
export default router;
