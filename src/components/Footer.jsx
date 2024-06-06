import { ButtonLink } from "./ButtonLink";

export function Footer({ data }) {
  console.log(data);
  return (
    <footer className="border-t border-softblack ">
      <div className="flex flex-col justify-between max-w-screen-lg gap-10 px-4 mx-auto my-8 sm:px-12 sm:flex-row">
        <div className=" sm:max-w-[35%] grid gap-3">
          <h3 className="text-2xl">J. Anthony Production</h3>
          <p>Skal vi lave et godt samarbejde?</p>
          <ButtonLink text={"Kontakt"} href={"/kontakt-os"} />
        </div>
        <div className="flex justify-between gap-10 px-2 sm:gap-36">
          <div className="grid gap-3">
            <p className="underline">Kontakt</p>{" "}
            <div className="flex items-center gap-2 ">
              <div>
                {" "}
                <img src="/ph_phone-light.svg" alt="phone" />
              </div>
              <a href="">+45 61 41 38 61</a>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <div>
                {" "}
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z" fill="black" />
                </svg>
              </div>
              <a href="">at@jantonycph.dk</a>
            </div>
            <div className="flex items-start gap-2">
              <div className="">
                <img className="" src="/location.svg" alt="Location" />
              </div>
              <a href="">
                Kjeld Langes Gade 14 <br />
                1367 København
              </a>
            </div>
          </div>
          <div className="order-first sm:order-2">
            <div>
              <p className="underline ">Sitemap</p>
              <div className="grid gap-2">
                {data.footerLink.map((link) => {
                  return (
                    <a className="hover:underline" href={link.url}>
                      {link.text}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
