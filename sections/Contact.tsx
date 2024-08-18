import React, { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");
  const [isSent, setIsSent] = useState<Boolean | null>(null);
  const [notification, setNotification] = useState({
    title: "",
    description: "",
  });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (isSent !== null) {
      const timer = setTimeout(() => {
        if (isSent) {
          setFormValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
        setIsSent(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSent]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const name = target.elements.namedItem("name") as HTMLInputElement,
      email = target.elements.namedItem("email") as HTMLInputElement,
      subject = target.elements.namedItem("subject") as HTMLInputElement,
      message = target.elements.namedItem("message") as HTMLInputElement;
    const data = {
      name: name?.value,
      email: email?.value,
      subject: subject?.value,
      message: message?.value,
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Http Error! status " + response.status);
      }

      setIsSent(true);
      setNotification({
        title: t("success"),
        description: t("sucessText"),
      });
    } catch (error: any) {
      console.log(
        "There was a problem with the fetch request: " + error.message,
      );
      setIsSent(false);
      setNotification({
        title: t("error"),
        description: t("errorText"),
      });
    }
  };

  return (
    <div
      className="section bg-purple-darker text-white justify-center flex-col w-full relative"
      id="contact"
    >
      <h3
        className="text-cabin text-4xl md:text-5xl uppercase font-extrabold "
        data-aos="fade-up"
      >
        {t("title")}
      </h3>
      <div className="md:w-[40rem] w-[18rem] text-lg justify-center">
        <>
          <form
            className="flex flex-col gap-4 mt-20 "
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
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
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
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
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
              onChange={(e) =>
                setFormValues({ ...formValues, subject: e.target.value })
              }
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
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
            ></textarea>
            <button
              type="submit"
              className="border-violet border-2 rounded-md p-3 font-medium hover:bg-purple-blue hover:scale-105 hover:text-white transition-all duration-300 ease-in-out w-60 md:self-end self-center"
            >
              {t("send")}
            </button>
          </form>
          <Transition show={isSent !== null} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-[10000]"
              onClose={() => setIsSent(null)}
            >
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
              </TransitionChild>

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <DialogPanel className="relative transform overflow-hidden rounded-lg bg-purple-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg font-opensans">
                      <div className="bg-purple-900 px-4 pb-5 pt-6 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <DialogTitle
                              as="h3"
                              className={`text-lg font-bold leading-6 text-white`}
                            >
                              {notification.title}
                            </DialogTitle>
                            <div className="mt-2">
                              <p className="text-sm text-gray-200">
                                {notification.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      </div>
    </div>
  );
};

export default Contact;
