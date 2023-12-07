import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>hello</div>;
}
export function getStaticProps() {
  return {
    props: {},
  };
}

const hello = () => {};

function hello1() {}
