import { useRive } from "@rive-app/react-canvas";

const STATE_MACHINE_NAME = "State Machine 1";

export function RiveComponent() {
  const { RiveComponent } = useRive({
    src: "images/character-we.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  return <RiveComponent />;
}
