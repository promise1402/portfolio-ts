import { useState, useCallback, type FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shuffle } from "@/components/animations";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

const Contact = () => {
  const [toast, setToast] = useState<ToastState>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (submitting) return;
      const form = e.currentTarget;
      if (!form.checkValidity()) {
        setToast({
          type: "error",
          message: "Please fill all required fields correctly.",
        });
        setTimeout(() => setToast(null), 4000);
        return;
      }

      setSubmitting(true);

      try {
        const formData = new FormData(form);

        const res = await fetch("https://formspree.io/f/mkgrkwpn", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (res.ok) {
          form.reset();
          setToast({
            type: "success",
            message: "Thanks for reaching out! I will get back to you soon.",
          });
        } else {
          setToast({
            type: "error",
            message: "Something went wrong. Please try again in a moment.",
          });
        }
      } catch {
        setToast({
          type: "error",
          message: "Unable to send your message. Please check your connection.",
        });
      } finally {
        setSubmitting(false);
        setTimeout(() => setToast(null), 4000);
      }
    },
    [submitting],
  );

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-14 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Say hello</span>
          </span>
          <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-none tracking-tight">
            <Shuffle
              text="Contact Me"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr,1.1fr] gap-6 md:gap-8 items-start">
          <Card className="shadow-none border border-gray-200 rounded-2xl bg-white/95 backdrop-blur">
            <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-5 sm:px-8 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Get in touch</h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  I am interested in freelance opportunities, full-time roles, and collaborative projects. If you
                  would like to discuss an idea or a potential role, feel free to reach out.
                </p>
              </div>

              <div className="flex flex-col gap-3 text-sm text-gray-700">
                <a
                  href="mailto:promisepal1509@gmail.com"
                  className="inline-flex items-center gap-3 hover:text-indigo-600 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="hidden sm:inline font-medium">Email</span>
                  <span className="truncate">promisepal1509@gmail.com</span>
                </a>
                <a
                  href="tel:+917080720508"
                  className="inline-flex items-center gap-3 hover:text-indigo-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="hidden sm:inline font-medium">Phone</span>
                  <span>+91-7080720508</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/promise-pal-499b83216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-indigo-600 transition-colors break-all"
                >
                  <Linkedin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="hidden sm:inline font-medium">LinkedIn</span>
                  <span>/in/promise-pal-499b83216</span>
                </a>
                <a
                  href="https://github.com/promise1402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-indigo-600 transition-colors"
                >
                  <Github className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="hidden sm:inline font-medium">GitHub</span>
                  <span>@promise1402</span>
                </a>
              </div>

              <div className="pt-2">
                <Badge className="w-fit bg-gray-900 text-white hover:bg-gray-800 rounded-full px-4 py-1.5 text-xs font-medium">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1FZClD74Hfmvp4oZj0GidBHsmnJGpZXa1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-none border border-gray-200 rounded-2xl bg-white/95 backdrop-blur">
            <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-5 sm:px-8">
              <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-sm font-medium text-gray-800">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-800">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-sm font-medium text-gray-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-2.5 text-sm font-medium mt-2 hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </CardContent>
          </Card>
        </div>

        {toast && (
          <div className="fixed bottom-4 left-4 right-4 z-50 md:top-6 md:bottom-auto md:left-auto md:right-6 md:w-full md:max-w-md">
            <div
              className={`rounded-full px-4 py-2 text-sm shadow-lg border ${
                toast.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                  : "bg-rose-50 text-rose-800 border-rose-200"
              }`}
            >
              {toast.message}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;













