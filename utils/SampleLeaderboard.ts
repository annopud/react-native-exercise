import { formatDurationTimeMs } from "./TimeFormat";

export interface UserScore {
  id: number;
  name: string;
  score: number;
  durationMilliSecond: number;
  duration: string;
}

export interface Answer {
  id: number;
  text: string;
  selected?: boolean;
}

export function generateLeaderboard() {
  let leaderboard: UserScore[] = [];

  for (let i = 0; i < 20; i++) {
    const duration = Math.floor(Math.random() * 100000);
    leaderboard.push({
      id: i + 1,
      name: `name ${i + 1}`,
      score: Math.floor(Math.random() * 20),
      durationMilliSecond: duration,
      duration: formatDurationTimeMs(duration),
    });
  }

  return leaderboard.sort((a, b) => {
    return a.score === b.score
      ? a.durationMilliSecond - b.durationMilliSecond
      : b.score - a.score;
  });
}
