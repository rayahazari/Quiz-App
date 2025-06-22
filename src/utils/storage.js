// Helper wrappers around localStorage
export function savePlayer(data) {
  localStorage.setItem('player', JSON.stringify(data));
}

export function loadPlayer() {
  return JSON.parse(localStorage.getItem('player') || '{}');
}

export function saveScoreAttempt(attempt) {
  const list = JSON.parse(localStorage.getItem('history') || '[]');
  list.push(attempt);
  localStorage.setItem('history', JSON.stringify(list));
}

export function loadHistory() {
  return JSON.parse(localStorage.getItem('history') || '[]');
}
