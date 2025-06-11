import { LetsTask } from "@/components/LetsTask";
import { RiveComponent } from "../RiveComponent";

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  function Shape() {
    return (
      <svg
        className="w-full h-full"
        viewBox="0 0 940 693"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M940 693H0V446.685C0 257.59 121.551 89.9206 301.269 31.1113L311.013 27.9227C425.788 -9.6353 549.761 -8.18566 663.626 32.0459C829.256 90.5673 940 247.15 940 422.814V693Z"
          fill="#FECA90"
        />
      </svg>
    );
  }

  function Arrow() {
    return (
      <svg
        className="w-full h-full"
        viewBox="0 0 461 536"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M112.586 533.979C68.8367 485.677 34.8283 433.839 14.3586 375.987C-2.04242 329.634 -1.13289 279.059 11.289 232.09C21.1685 194.734 37.1751 157.321 59.1891 123.636C71.6522 104.565 88.2261 88.0146 107.303 73.2127C122.204 61.651 137.959 51.9584 158.559 49.0922C209.188 42.0477 250.681 80.3582 240.082 121.984C236.322 136.751 229.297 146.749 219.237 159.256C207.043 174.416 190.431 192.629 170.123 201.128C137.252 214.886 116.431 187.1 113.371 163.679C109.406 133.333 121.704 101.004 139.927 74.9819C165.061 39.0901 208.708 14.5031 257.5 5.33322C332.117 -8.69043 420.509 22.4797 449.612 81.0848"
          stroke="#FECA90"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M395.051 89.2308C398.995 75.111 420.909 78.2491 435.808 84.3431C442.356 87.0218 454.012 94.0011 457.026 98.1937"
          stroke="#FECA90"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M430.546 40.6208C452.561 55.8571 462.647 75.1172 457.185 97.9754"
          stroke="#FECA90"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    );
  }

  return (
    <>
      <div className="lg:hidden mb-[15rem]">
        <div className="-space-y-1">
          <h1 className="font-yeseva text-3xl">{title}</h1>
          <h2 className="font-yeseva text-6xl">{description}</h2>
        </div>

        <div className="w-full h-[30rem] -translate-y-15 -mb-32">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RiveComponent />
          </div>
        </div>

        <div className="scale-90">
          <LetsTask />
        </div>
      </div>

      <div className="hidden lg:block py-[8.5rem]">
        <div className="w-full max-w-[48rem] mx-auto relative">
          <Shape />

          <div className="w-full h-[40rem] -translate-y-13 -mb-32 absolute top-0 bottom-0 left-0 right-0 m-auto">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RiveComponent />
            </div>
          </div>

          <div className="w-full max-w-[20rem] absolute -top-[20%] -left-[20%]">
            <Arrow />
          </div>

          <div className="relative scale-75 top-[-18rem] left-[50%]">
            <LetsTask />
          </div>

          <div className="absolute top-[15%] bottom-0 -left-[30.5%] rotate-270 m-auto flex flex-col justify-center">
            <h1 className="font-yeseva text-3xl">{title}</h1>
            <h2 className="font-yeseva text-7xl uppercase">{description}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
