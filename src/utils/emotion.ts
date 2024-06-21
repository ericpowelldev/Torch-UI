import createEmotion from "@emotion/css/create-instance";

export const emotion = createEmotion({
  key: "tui",
  nonce: "TUI",
  prepend: true,
  // speedy: true,
});
export const { css, cx, keyframes } = emotion;
