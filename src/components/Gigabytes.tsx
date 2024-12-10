import { Box, Card } from "@mui/material";
import { IGigabytes } from "@/interfaces";

export default function Gigabytes({
  data,
  indexButton,
  handleChangeGigabytes,
}: IGigabytes) {
  return (
    <div className="flex gap-2 flex-wrap items-center">
      <span>gigabytes: </span>
      {data.gigabytes?.map((value, index) => {
        let styleButton = "";

        if (indexButton === index) {
          styleButton =
            "gigabyte bg-white hover:bg-black hover:text-white border border-black  duration-300 text-black py-2 px-4";
        } else {
          styleButton =
            "bg-[#353535] hover:bg-[#e7e7e7] hover:text-black  duration-300 text-white py-2 px-4";
        }

        return (
          <button
            onClick={() => handleChangeGigabytes(index)}
            key={index}
            className={styleButton}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
