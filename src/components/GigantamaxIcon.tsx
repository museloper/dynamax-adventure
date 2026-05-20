import Image from "next/image";

// 이 아이콘은 public/gigantamax.svg 파일을 그대로 사용합니다.
// 본인 이미지로 교체하려면 public/gigantamax.svg 파일을 덮어쓰세요.
// 만약 PNG로 사용하고 싶다면 public/gigantamax.png 로 저장한 뒤
// 아래 src 경로를 "/gigantamax.png" 로만 바꾸면 됩니다.
const ICON_SRC = "/gigantamax.png";

export function GigantamaxIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={ICON_SRC}
      alt="거다이맥스"
      width={size}
      height={size}
      className={className}
      unoptimized
      priority={false}
    />
  );
}
