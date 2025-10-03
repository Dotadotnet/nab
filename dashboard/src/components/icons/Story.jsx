const Story = ({ className, ...props }) => {
  return (
    <svg
      {...props}
      className={"w-7 h-7" + (className ? " " + className : "")}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 12a9 9 0 0 0-9-9V1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12h2a9 9 0 1 0 18 0M3.9 8.073a9 9 0 0 0-.72 2.126l-1.96-.398c.186-.913.484-1.786.88-2.602zM4.8 6.6a9 9 0 0 1 1.8-1.801l-1.2-1.6a11 11 0 0 0-2.2 2.2l1.6 1.2Zm5.399-3.42a9 9 0 0 0-2.126.72l-.874-1.8A11 11 0 0 1 9.8 1.22zm.551 4.32v3.25H7.5v2.5h3.25v3.25h2.5v-3.25h3.25v-2.5h-3.25V7.5z"
       clipRule="evenodd"
      />
    </svg>
  );
};

export default Story;
