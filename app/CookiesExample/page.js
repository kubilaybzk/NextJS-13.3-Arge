import React from "react";

import { cookies } from "next/headers";

import Cookies from "@/Components/Cookies";

export default function page() {
  const cookieStore = cookies();
  return (
    <Cookies
      cookieStore={cookieStore}
      getAll={cookieStore.getAll()}
      hasKubilay={cookieStore.has("Kubilay")}

    />
  );
}
