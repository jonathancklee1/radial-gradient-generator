export default function getRandomHex(): string {
  const randomHexColor = `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`;
  return randomHexColor;
}
