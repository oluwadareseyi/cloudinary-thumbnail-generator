const videoExtensions = [
  ".mp4",
  ".mov",
  ".avi",
  ".wmv",
  ".flv",
  ".mpeg",
  ".mpg",
  ".m4v",
  ".webm",
  ".mkv",
];

export const getVideoPoster = (videoUrl, time = 0) => {
  // Create regex pattern from video extensions array
  const videoExtPattern = new RegExp(videoExtensions.join("|"), "i");
  // Replace any matching video extension with .jpg
  const videoToImg = videoUrl.replace(videoExtPattern, ".jpg");

  const posterImage = videoToImg.replace(
    "upload",
    `upload/q_auto,f_auto,so_${time}`
  );
  return posterImage;
};
