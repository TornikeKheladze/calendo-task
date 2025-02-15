const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.30002 5.99999L6.80002 2.49999C7.20003 2.09999 7.20003 1.49999 6.80002 1.09999C6.40002 0.699988 5.80002 0.699988 5.40002 1.09999L1.20002 5.29999C0.800024 5.69999 0.800024 6.29999 1.20002 6.69999L5.40002 10.9C5.60002 11.1 5.80002 11.2 6.10003 11.2C6.40003 11.2 6.60003 11.1 6.80002 10.9C7.20003 10.5 7.20003 9.89999 6.80002 9.49999L3.30002 5.99999Z"
        fill="#09101D"
      />
    </svg>
  );
};
export default ArrowIcon;
