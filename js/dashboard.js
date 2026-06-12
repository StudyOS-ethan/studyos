import { initNavbar } from "./navbar.js";
import {
  calculateStats,
  loadData,
  saveData,
  updateStreak
} from "./utils.js";

const elements = {
  todayText: document.getElementById("todayText"),
  heroStreak: document.getElementById("heroStreak"),
  totalTasksStat: document.getElementById("totalTasksStat"),
  completedTasksStat: document.getElementById("completedTasksStat"),
  upcomingExamsStat: document.getElementById("upcomingExamsStat"),
  studyHoursStat: document.getElementById("studyHoursStat"),
  completionPercent: document.getElementById("completionPercent"),
  completionBar: document.getElementById("completionBar"),
  remainingTasks: document.getElementById("remainingTasks"),
  longestStreak: document.getElementById("longestStreak")
};

let appData = loadData();

function renderToday() {
  const today = new Date();
  elements.todayText.textContent = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function renderStats() {
  updateStreak(appData);
  saveData(appData);

  const stats = calculateStats(appData);

  elements.totalTasksStat.textContent = stats.totalTasks;
  elements.completedTasksStat.textContent = stats.completedTasks;
  elements.upcomingExamsStat.textContent = stats.upcomingExams;
  elements.studyHoursStat.textContent = stats.studyHours.toFixed(1);
  elements.heroStreak.textContent = `${appData.streak.current} ${appData.streak.current === 1 ? "day" : "days"}`;
  elements.completionPercent.textContent = `${stats.completion}%`;
  elements.completionBar.style.width = `${stats.completion}%`;
  elements.remainingTasks.textContent = stats.remainingTasks;
  elements.longestStreak.textContent = appData.streak.longest;
}

function initDashboard() {
  initNavbar();
  renderToday();
  renderStats();
}

initDashboard();
