export const formatDurationTimeMs = (duration: number) => {
  const milliseconds = duration % 1000;
  const totalSeconds = Math.floor(duration / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":") +
    "." +
    milliseconds.toString().padStart(3, "0")
  );
};
