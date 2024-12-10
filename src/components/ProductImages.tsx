import { Box, Card } from "@mui/material";
import { IProductImages } from "@/interfaces";

export default function ProductImages({ data }: IProductImages) {
  return (
    <div className="flex justify-center items-center m-auto flex-col gap-4">
      <Card>
        <img
          className="max-md:max-h-[300px] max-h-[500px]"
          src={data !== undefined ? data.url[0] : ""}
          alt="current-product"
        />
      </Card>

      <Card className="max-sm:flex-col max-sm:justify-center items-center  flex gap-5  justify-between">
        <img
          className="max-md: max-h-[300px] max-sm:max-w-[300px] sm:w-[50%]  h-[220px]"
          src={data !== undefined ? data.url[1] : ""}
          alt="next-product"
        />
        <img
          className="max-md: max-h-[300px] max-sm:max-w-[300px] sm:w-[50%]  h-[220px]"
          src={data !== undefined ? data.url[2] : ""}
          alt="next-product"
        />
      </Card>
    </div>
  );
}
