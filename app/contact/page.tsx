import { Metadata } from "next";

import ContactForm from "@/components/contact/form";
import ContactInfo from "@/components/contact/info";
import { MapProvider } from "@/lib/maps-provider";

export const metadata: Metadata = {
  title: "Utilaje | Contact",
  description: "Contact",
  keywords: ["Utilaje", "Contact utilaje"],
};

export default function Contact() {
  return (
    <div className="container pt-5 px-2 lg:px-15 lg:flex lg:flex-row lg:justify-around">
      <div>
        <ContactInfo />
        <div className="h-screen md:h-2/3 w-full">
          <MapProvider />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
