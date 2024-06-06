import { StrapiImage } from "@/components/StrapiImage";
import { ButtonLink } from "./ButtonLink";

export function Intro({ data }) {
  const headline = data.headline.split(" ");
  return (
    <div className="max-w-screen-lg px-4 mx-auto mt-12 md:flex sm:px-12 mb-28">
      <div className="flex flex-col justify-between md:w-3/6">
        <div>
          <h1 className="text-4xl">
            <span className="border-b border-softblack">{headline[0]}</span>
            <span className="relative top-5">{" " + headline[1]}</span>
          </h1>
          <p className="mt-8 mb-6 text-sm">{data.description}</p>
          <div className="mb-10">
            <ButtonLink text={data.link.text} href={data.link.url}></ButtonLink>
          </div>
        </div>
        <div className="mb-8 md:my-2">
          <div className="flex mb-2">
            <div className=" mr-1.5">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5.5" r="5.5" fill="#303026" />
              </svg>
            </div>
            <p className="text-xs "> Kontor København K, Danmark (Kjeld Langes Gade 14)</p>
          </div>
          <div className="flex">
            <div className=" mr-1.5">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5.5" r="5.5" fill="#303026" />
              </svg>
            </div>
            <p className="text-xs "> Kontor Dhaka Bangladesh (kanaiya Rd 2)</p>
          </div>
        </div>
      </div>
      <div className="md:w-3/6">
        <div className="w-5/6 ml-auto rounded-tr-3xl">
          <StrapiImage priority={true} height={250} src={data.images.data[0].url} />
        </div>
        <div className="relative w-5/6 -mt-20">
          <StrapiImage height={250} src={data.images.data[1].url} />
        </div>
      </div>
    </div>
  );
}
