import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type ToastState = {
  visible: boolean;
  success: boolean;
  title: string;
  description: string;
};

const Toast = ({ toast, onClose }: { toast: ToastState; onClose: () => void }) => (
  <div
    className={`fixed bottom-6 right-6 z-[10000] flex items-start gap-3 rounded-xl px-5 py-4 shadow-xl font-opensans
      transition-all duration-500 ease-in-out
      ${toast.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      ${toast.success ? "bg-purple-dark border border-violet/50" : "bg-purple-dark border border-red-500/50"}
    `}
  >
    <span className={`text-xl mt-0.5 shrink-0 ${toast.success ? "text-violet" : "text-red-400"}`}>
      {toast.success ? "✓" : "✕"}
    </span>

    <div className="flex flex-col gap-0.5 max-w-xs">
      <span className="text-white font-semibold text-sm">{toast.title}</span>
      <span className="text-white/60 text-xs">{toast.description}</span>
    </div>

    <button
      onClick={onClose}
      className="ml-2 text-white/30 hover:text-white/80 transition-colors text-lg leading-none mt-0.5"
    >
      ×
    </button>
  </div>
);

const Contact = () => {
  const t = useTranslations("Contact");
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    success: false,
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const showToast = (success: boolean) => {
    setToast({
      visible: true,
      success,
      title: success ? t("success") : t("error"),
      description: success ? t("sucessText") : t("errorText"),
    });
  };

  const hideToast = () => setToast((prev) => ({ ...prev, visible: false }));

  useEffect(() => {
    if (!toast.visible) return;
    const timer = setTimeout(hideToast, 3500);
    return () => clearTimeout(timer);
  }, [toast.visible]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const data = {
      name: (target.elements.namedItem("name") as HTMLInputElement).value,
      email: (target.elements.namedItem("email") as HTMLInputElement).value,
      subject: (target.elements.namedItem("subject") as HTMLInputElement).value,
      message: (target.elements.namedItem("message") as HTMLInputElement).value,
    };

    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Http Error! status " + response.status);

      setFormValues({ name: "", email: "", subject: "", message: "" });
      showToast(true);
    } catch (error: any) {
      console.log("There was a problem with the fetch request: " + error.message);
      showToast(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="section bg-purple-darkest text-white justify-center flex-col w-full relative"
      id="contact"
    >
      <h3
        className="text-cabin text-4xl md:text-5xl uppercase font-extrabold"
        data-aos="fade-up"
      >
        {t("title")}
      </h3>

      <div className="md:w-[40rem] w-[18rem] text-lg justify-center">
        <form
          className="flex flex-col gap-4 mt-20"
          data-aos="fade-in"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            required
            minLength={3}
            maxLength={200}
            name="name"
            id="name"
            placeholder={t("nameForm")}
            className="py-3 px-4 bg-midnight-indigo rounded-md text-purple-200"
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            id="email"
            required
            minLength={3}
            maxLength={200}
            placeholder="Email"
            className="py-3 px-4 bg-midnight-indigo rounded-md text-purple-200"
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
          />
          <input
            type="text"
            name="subject"
            id="subject"
            required
            minLength={5}
            maxLength={100}
            placeholder={t("subjectForm")}
            className="py-3 px-4 bg-midnight-indigo rounded-md text-purple-200"
            value={formValues.subject}
            onChange={(e) => setFormValues({ ...formValues, subject: e.target.value })}
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            required
            minLength={10}
            maxLength={200}
            placeholder={t("messageForm")}
            className="py-3 h-40 md:h-full px-4 bg-midnight-indigo rounded-md text-purple-200"
            value={formValues.message}
            onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="border-violet border-2 rounded-md p-3 font-medium hover:bg-purple-blue hover:scale-105 hover:text-white transition-all duration-300 ease-in-out w-60 md:self-end self-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-transparent flex items-center justify-center gap-2"
          >
            {isLoading ? t("sending") : t("send")}
            {isLoading && (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            )}
          </button>
        </form>
      </div>

      <Toast toast={toast} onClose={hideToast} />
    </div>
  );
};

export default Contact;