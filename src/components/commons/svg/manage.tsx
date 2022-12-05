import { styleSet } from "../../../commons/styles/styleSet";

const ManageSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
    >
      <path
        d="M13.5 1v1.12a4.5 4.5 0 0 0-1.395.571l-.787-.787-1.414 1.414.79.79a4.5 4.5 0 0 0-.577 1.392H9v2h1.12a4.5 4.5 0 0 0 .571 1.395l-.787.787 1.414 1.414.79-.79a4.5 4.5 0 0 0 1.392.577V12h2v-1.12a4.5 4.5 0 0 0 1.395-.571l.787.787 1.414-1.414-.79-.79a4.5 4.5 0 0 0 .577-1.392H20v-2h-1.12a4.5 4.5 0 0 0-.571-1.395l.787-.787-1.414-1.414-.79.79a4.5 4.5 0 0 0-1.392-.577V1h-2zm1 2.656A2.845 2.845 0 0 1 17.346 6.5 2.845 2.845 0 0 1 14.5 9.346 2.845 2.845 0 0 1 11.654 6.5 2.845 2.845 0 0 1 14.5 3.656zM23.318 11v1.322A5.318 5.318 0 0 0 21.67 13l-.93-.932-1.672 1.672.934.932a5.318 5.318 0 0 0-.682 1.646H18v2.364h1.322a5.318 5.318 0 0 0 .676 1.648l-.93.93 1.672 1.672.932-.934a5.318 5.318 0 0 0 1.646.682V24h2.364v-1.322a5.318 5.318 0 0 0 1.648-.676l.93.93 1.672-1.672-.934-.932a5.318 5.318 0 0 0 .682-1.646H31v-2.364h-1.322a5.318 5.318 0 0 0-.676-1.648l.93-.93-1.672-1.672-.932.934a5.318 5.318 0 0 0-1.646-.682V11h-2.364zM6.955 14v1.73a6.955 6.955 0 0 0-2.156.883l-1.217-1.215-2.184 2.186 1.22 1.219a6.955 6.955 0 0 0-.891 2.152H0v3.09h1.73a6.955 6.955 0 0 0 .883 2.156l-1.215 1.217 2.184 2.186 1.22-1.221a6.955 6.955 0 0 0 2.153.89V31h3.09v-1.729a6.955 6.955 0 0 0 2.156-.884l1.217 1.217 2.184-2.186-1.22-1.22a6.955 6.955 0 0 0 .891-2.153H17v-3.09h-1.73a6.955 6.955 0 0 0-.883-2.156l1.215-1.215-2.184-2.186-1.22 1.22a6.955 6.955 0 0 0-2.153-.891V14h-3.09zm17.545.139a3.362 3.362 0 0 1 3.361 3.361 3.362 3.362 0 0 1-3.361 3.363 3.362 3.362 0 0 1-3.361-3.363 3.362 3.362 0 0 1 3.361-3.361zm-16 3.965a4.397 4.397 0 0 1 4.396 4.396A4.397 4.397 0 0 1 8.5 26.896 4.397 4.397 0 0 1 4.104 22.5 4.397 4.397 0 0 1 8.5 18.104z"
        fill={styleSet.colors.white}
      />
    </svg>
  );
};

export default ManageSvg;
