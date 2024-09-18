export default function ContactInfo() {
  return (
    <div className="w-full mb-5 p-5 text-md divide-y-8 divide-opacity-0 divide-white">
      <h2 className="text-2xl mb-2 lg:text-3xl lg:mb-5">
        Informatii de contact
      </h2>
      <p>👤 Persoana de contact: Dunca Liviu</p>

      <p>
        📞 Telefon:{" "}
        <a
          href="tel:0758843994"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          0758843994
        </a>
      </p>
      <p>
        📧 E-Mail:{" "}
        <a
          href="mailto:pop.denis1902@gmail.com"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          pop.denis1902@gmail.com
        </a>
      </p>
      <p>
        📍 Locatie:{" "}
        <a
          href="https://www.google.com/maps/place/All+Inclusive+Special/@47.1347657,24.4757935,16.82z/data=!4m6!3m5!1s0x4749f7e76c0499b7:0xb13708bdb04d5104!8m2!3d47.1356283!4d24.4758462!16s%2Fg%2F11llbgpgw5?entry=ttu"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          Drumul Cetății 6A, Bistrița 420063
        </a>
      </p>
    </div>
  );
}
