import * as React from "react";

export interface IHomeDividerTwoProps {}

export default function HomeDividerTwo(props: IHomeDividerTwoProps) {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8 py-12 lg:py-20 bg-[url('https://images.unsplash.com/photo-1651240801220-685baaef7a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-fixed grid">
      <div className="max-w-screen-xl justify-self-center h-96"></div>
    </div>
  );
}
