import Journal from "../models/Journal.js";

export const createJournal = async (req, res) => {
  try {
    const { content, mood } = req.body;

    const entry = await Journal.create({
      userId: req.user._id,
      content,
      mood: mood || "",
    });

    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJournals = async (req, res) => {
  try {
    const entries = await Journal.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateJournal = async (req, res) => {
  try {
    const updated = await Journal.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Journal not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteJournal = async (req, res) => {
  try {
    const deleted = await Journal.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!deleted) {
      return res.status(404).json({ message: "Journal not found" });
    }

    res.json({ message: "Journal deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
