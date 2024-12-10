import { Box, Card } from "@mui/material";
import { ITitleProduct } from "@/interfaces";

export default function TitleProduct({ data, currentGigabyte }: ITitleProduct) {
  return (
    <div className="border-b-2 border-[#BDBDBD] pb-4 mb-4 flex flex-col gap-4">
      <h1 className="text-[#fd9915] tracking-wider text-[26px] leading-8 font-semibold">
        {data !== undefined ? data.title : ""}
      </h1>
      <p className="text-[24px]">
        <span className="price text-[28px] font-semibold">
          {data !== undefined
            ? currentGigabyte !== 0
              ? data.price * currentGigabyte
              : data.price
            : 0}
        </span>
        ₽
      </p>

      <h1>
        Availability:{" "}
        <span className="text-[#30BD57] font-bold">✓ In stack</span>
      </h1>
      <p>Hurry up! only 34 product left in stock!</p>
    </div>
  );
}