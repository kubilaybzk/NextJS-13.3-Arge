import Link from "next/link";
import React from "react";

function FetchTopics() {
  return (
    <div className="flex flex-row justify-center align-middle w-full">
      <ul className="bg-slate-500 p-12 list-decimal">
        <li className="group hover:text-black">
          <Link href={"/Fetch/Force-Cache"}>
            <span className="text-white group-hover:text-black">
              {" "}
              Force-Cache
            </span>
          </Link>
        </li>
        <p>
          {` Bu değer default olan değer. Eğer uygulamalarda bunu kullanırsak bu şu
          anlama gelir. Benim sayfamı sadece build anında oluştur. Daha sonra bu
          endpoint'e hiç istek atma.`}
        </p>
        <li className="group hover:text-black">
          <span> </span>
          <Link href={"/Fetch/NoStore"}>
            <span className="text-white group-hover:text-black"> NoStore</span>
          </Link>
        </li>
        <p>
          {`Bu şu anlama gelir. Benim sayfamın içeriğini her istekte fetch et .
          Her istek geldiğinden sunucuya istek atma yükü oluşturur. Genelde
          önerilmez. Dynamic olarak her istekte yeniden üretim sağlıyor. Maliyet
          artıyor.`}
        </p>
        <li className="group hover:text-black">
          <span> </span>
          <Link href={"/Fetch/Revalidate"}>
            <span className="text-white group-hover:text-black">
              {" "}
              Revalidate
            </span>
          </Link>
        </li>
        <p>
          {`Bir içerik yönetim sistemimiz var ve biz burada söyle bir şey istiyoruz.
           Önbelleğe alınan verileri belirli bir zaman aralığında yeniden
          doğrulamak için, bir kaynağın önbellek ömrünü (saniye olarak)
          ayarlamak için`}
        </p>
        <li className="group hover:text-black">
          <span> </span>
          <Link href={"/Fetch/MoreThanOneFetch"}>
            <span className="text-white group-hover:text-black">
              {" "}
              MoreThanOneFetch
            </span>
          </Link>
        </li>
        <p>
          {`Bir sayfada birden fazla endpoint üzerinden data çekmemiz gerekebilir.
          Burada her bir istek için tek tek await demek yerine pararlel fetch etme işlemi tecih ederbiliriz.`}
        </p>
      </ul>
    </div>
  );
}

export default FetchTopics;
