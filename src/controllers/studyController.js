import StudySession from "../models/StudySession.js";

export const saveStudySession = async (req, res) => {
  try {
    const { duration } = req.body;

    const session = await StudySession.create({
      userId: req.user._id,
      duration,
    });

    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodayStudy = async (req, res) => {
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    new Date();
    end.setHours(23, 59, 59, 999);

    const sessions = await StudySession.find({
      userId: req.user._id,
      sessionDate: { $gte: start, $lte: end },
    });

    const total = sessions.reduce((sum, s) => sum + s.duration, 0);

    res.json({ total, sessions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWeeklyStudy = async (req, res) => {
  try {
    const now = new Date();
    const firstDay = new Date(now.setDate(now.getDate() - now.getDay()));
    firstDay.setHours(0, 0, 0, 0);

    const lastDay = new Date(firstDay);
    lastDay.setDate(firstDay.getDate() + 6);
    lastDay.setHours(23, 59, 59, 999);

    const sessions = await StudySession.find({
      userId: req.user._id,
      sessionDate: { $gte: firstDay, $lte: lastDay },
    });

    const total = sessions.reduce((sum, s) => sum + s.duration, 0);

    res.json({ total, sessions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
