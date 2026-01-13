interface MarqueeTextProps {
  text: string;
  separator?: string;
}

const MarqueeText = ({ text, separator = "✦" }: MarqueeTextProps) => {
  const repeatedText = Array(10).fill(`${text} ${separator} `).join("");

  return (
    <div className="marquee-container bg-background py-5 border-b border-border overflow-hidden">
      <div className="marquee-content">
        <span className="font-body text-foreground whitespace-nowrap">
          {repeatedText}
        </span>
        <span className="font-body text-sm text-foreground whitespace-nowrap">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
