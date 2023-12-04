interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: any } = {
    3: { src: "mey", alt: "good" },
    4: { src: "ThumbsUp", alt: "recommended" },
    5: { src: "bullEyes", alt: "exceptional" },
  };

  return <div {...emojiMap[rating]}></div>;
};

export default Emoji;
