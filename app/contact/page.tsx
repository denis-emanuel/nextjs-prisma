import ContactForm from "@/components/contact/form";
import ContactInfo from "@/components/contact/info";

export default function Contact() {
  return (
    <div className="container pt-5 px-2 lg:px-15 lg:flex lg:flex-row lg:justify-around">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
