import "@/styles/globals.css";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Provider, useDispatch } from "react-redux";
import store from "../Redux/store";
import { fetchCategories, fetchProducts } from "../Redux/actions";

export default function App({ Component, pageProps, session }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    console.log("Route is changing..");
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    console.log("Route is changing is complete..");
    setLoading(false);
  });

  return (
    <>
      {loading && <Loading />}
      <Provider store={store}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Provider>
    </>
  );
}
