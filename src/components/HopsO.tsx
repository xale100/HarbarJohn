export default function HopsO({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 22"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      aria-hidden="true"
    >
      <path d="M7 0.5 L7 2.5" stroke="#2d6b1f" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <ellipse cx="7" cy="6"    rx="4.5" ry="2.8" fill="#2d6b1f" />
      <ellipse cx="7" cy="10"   rx="5.5" ry="2.8" fill="#2d6b1f" />
      <ellipse cx="7" cy="14"   rx="4.5" ry="2.8" fill="#2d6b1f" />
      <ellipse cx="7" cy="17.5" rx="3"   ry="2"   fill="#2d6b1f" />
      <ellipse cx="7" cy="20.5" rx="1.8" ry="1.3" fill="#2d6b1f" />
    </svg>
  );
}
