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
                <img src="/Vector.svg" alt="mail" />
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
              <div className="grid">
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
