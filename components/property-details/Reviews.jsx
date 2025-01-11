import Rating from "./Rating";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 border-t">
      <Rating />
      <div className="grid grid-cols-2 gap-8">
        <ReviewCard />
      </div>
    </div>
  );
}
