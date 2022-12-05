import { styleSet } from "../../../commons/styles/styleSet";

const LeaveSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 43 43"
    >
      <path
        fill={styleSet.colors.white}
        d="M42 32v-4L26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v11L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3V27l16 5z"
      />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );
};

export default LeaveSvg;
