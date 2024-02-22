export default function ContactForm() {
  return (
    <div className="w-full lg:w-2/5 p-5">
      <h2 className="text-2xl mb-2 lg:text-3xl lg:mb-5">Formular de contact</h2>

      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name">Nume</label>
          <input
            type="text"
            id="name"
            name="name"
            className="p-2 rounded-lg border border-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 rounded-lg border border-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="p-2 rounded-lg border border-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Mesaj</label>
          <textarea
            id="message"
            name="message"
            className="p-2 rounded-lg border border-gray-400"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg p-2 bg-primary text-white font-bold"
        >
          Trimite
        </button>
      </form>
    </div>
  );
}
