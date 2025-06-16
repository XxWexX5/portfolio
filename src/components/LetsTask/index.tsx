import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Shape() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 235 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 106H235C219.537 -34.7748 14.5134 -34.8759 0 106Z"
        fill="#532FB8"
      />
    </svg>
  );
}

export function LetsTask() {
  return (
    <div className="relative w-full">
      <Link
        href="#find-me"
        className="block absolute w-full group cursor-pointer"
        onClick={() => scrollToSection("find-me")}
      >
        <div className="absolute top-0 left-0 right-0 mx-auto w-65">
          <Shape />
        </div>

        <div className="absolute top-17 left-0 right-0 mx-auto size-30 bg-secondary-500 rounded-full flex justify-center items-center text-neutral-900">
          <svg
            className="absolute -top-4 -left-8 -right-6 mx-auto rotate-29 -translate-x-[0.55rem] -translate-y-5"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="circlePath"
              d="
      M 15, 55
      a 40,40 0 1,1 90,0
      40,40 0 1,1 -90,0
    "
              fill="none"
            />
            <text>
              <textPath href="#circlePath" className="fill-neutral-900">
                L e t &apos; s T a l k
              </textPath>
            </text>
          </svg>

          <div className="group-hover:translate-x-[.8rem] transition-all ease-in duration-200">
            <BsArrowRight size={48} />
          </div>
        </div>
      </Link>
    </div>
  );
}
