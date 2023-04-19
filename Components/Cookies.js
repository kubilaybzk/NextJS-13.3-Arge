"use client";

import React, { useState } from "react";
import { setCookie } from "cookies-next";

export default function Cookies({ hasKubilay, getAll }) {
  let [ınput, setInput] = useState();

  function ChangeEvents(e) {
    setInput(e.target.value);
  }

  function SaveCookie() {
    setCookie(ınput, Math.random(4).toFixed(4));
  }

  return (
    <div className="w-full min-h-screen bg-white text-black">
      Şimdi Cookieler bizim için aslında bir depolama birimi temelde browser
      içinde saklanan kullanıcı için özel bilgilerin tutulduğu aslında
      <br />
      Daha farklı alanlarda var <br />
      localstorage gibi gibi <br />
      Cookieler serverside olarak kullanılabiliyor. <br />
      Bir use token'ı mesela kullanıcının tokenına göre giriş yapmış mı yapmamış
      gibi durumları tutmak gibi örnekler verebiliriz. <br />
      <div className="mt-12 border-t-2 flex flex-col gap-2 mx-auto w-full text-center">
        <p>şimdi cookie için bir import işlemi yapalım</p>
        <code>{`import { cookies } from 'next/headers';`}</code>
        <p>
          ile import edelim daha sonra sistemimizde hiç cookie varmı ona bakalım
          buna bakmak için öncelikle
        </p>
        <code>const cookieStore = cookies();</code>
        <p>fonksiyonumuzun içinde üstteki gibi bir tnaımlama yapalım.</p>
        <code>const cookieStore = cookies();</code>
        <p>
          Şimdi ise bütün cookileri görmek için şöyle bir şey kullanabiliriz.
        </p>
        <code>cookieStore.getAll()</code>
        {JSON.stringify(getAll)}
        <code>cookies().get(name)</code>
        <p>
          ile name adına bağlı cookie var mı yok mu ona bakarız. MEsela kubilay
          adında bir cookie var mı bakalım
        </p>
        <code>cookieStore.get('kubilay')?"var":"yok"</code>
        {JSON.stringify(hasKubilay ? "var" : "yok")}
        <p className="text-red-400">
          Server tarafında herhangi bir cookie set yada remove edilemez. sadece
          okunabilir <b>ReadOnly</b>
        </p>
        <div className="bg-blue-300 h-52 text-white flex flex-col gap-4">
          <p>
            şimdi yeni bir cookie oluşturalım. Bunun için npm i cookies-next
            adında bir paket ekelyelim
          </p>
          <div>
            <input onChange={(e) => ChangeEvents(e)} />
            <button className="bg-red-400" onClick={() => SaveCookie()}>
              {" "}
              Save
            </button>
          </div>
          {ınput}
        </div>
      </div>
    </div>
  );
}
