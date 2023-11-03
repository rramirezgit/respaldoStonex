import "@/styles/globals.css";
import ThemeLuka from "@/theme";
import type { AppProps } from "next/app";
import "@fontsource/open-sans/variable.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "@/components/demo/demoContentLayout/index.css";
import "@/components/demo/demoCustomHeader/index.css";
import "@/components/demo/demoHeader/index.css";
import "@/components/demo/mobileContent/index.css";
import "@/components/demo/mobileContent/PaymentSlider/payCard/index.css";
import "@/components/templates/demoGateway/demoContent/index.css";
import "@/components/templates/demoGateway/demoContent/desktopContent/index.css";
import "@/components/templates/demoLink/demoContent/index.css";
import "@/components/templates/demoLink/demoContent/desktopContent/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeLuka>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeLuka>
  );
}
