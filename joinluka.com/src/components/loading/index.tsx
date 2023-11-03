import "./loading.module.css";
import Lottie from "lottie-react";
import animation from "@/assets/loading_blue.json";

const Loading = (): JSX.Element => {
  return (
    <Lottie
      style={{
        width: "25%",
      }}
      animationData={animation}
    />
  );
};

export default Loading;
