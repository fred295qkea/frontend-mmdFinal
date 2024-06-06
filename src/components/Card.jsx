import { ButtonLink } from "./ButtonLink";
import { StrapiImage } from "./StrapiImage";

export function Card({ data }) {
  console.log(data);
  return (
    <div className="grid h-full ">
      <StrapiImage height={200} src={data.image.url} />
      <p className="fair text-2xl my-1.5">{data.title}</p>
      <p>{data.description}</p>
      <div className="mt-2 align-bottom">
        <ButtonLink text={"Læs mere"} href={data.link} />
      </div>
    </div>
  );
}
