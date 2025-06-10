import { useRive } from "@rive-app/react-canvas";
import { LetsTask } from "@/components/LetsTask";

const STATE_MACHINE_NAME = "State Machine 1";

export function Hero() {
  const { RiveComponent } = useRive({
    src: "images/character-we.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  return (
    <>
      <div>
        <div className="-space-y-1">
          <h1 className="font-yeseva text-3xl">Front End</h1>
          <h2 className="font-yeseva text-6xl">Developer</h2>
        </div>

        <div className="w-full h-[30rem] -translate-y-15 -mb-32">
          <div style={{ width: "100%", height: "100%" }}>
            <RiveComponent />
          </div>
        </div>

        <div className="scale-95">
          <LetsTask />
        </div>
      </div>
    </>
  );
}
