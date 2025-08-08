import "../App.css";

interface ScrollArrowProps {
  onClick: () => void;
}

const ScrollArrow = ({ onClick }: ScrollArrowProps) => {
  return (
    <div className="scroll-down-arrow" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10L12 15L17 10"
          stroke="#4c643b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ScrollArrow;
