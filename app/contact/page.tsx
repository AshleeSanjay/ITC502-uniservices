import ContactForm from "@/components/Forms/ContactForm";


export default function About() {
  function handleFormSubmit(data: { email: string; subject: string; message: string; }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>

      <ContactForm onSubmit={handleFormSubmit} />
    </>
  );
}
