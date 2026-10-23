// Everything you are likely to change about the site lives here.

export const SITE = {
  title: "Brain Bucket",
  description:
    "Ingeniería de software con agentes de IA, contada desde la experiencia: qué funciona, qué no y cómo cambia el trabajo de los equipos.",
  author: "Ivan Company",
  lang: "es",
  locale: "es-ES",
};

// Newsletter signup. Leave `action` empty to hide the form.
// Buttondown: "https://buttondown.com/api/emails/embed-subscribe/<tu-usuario>"
// Kit: copy the form action URL from your Kit form's "HTML" embed option.
export const NEWSLETTER = {
  action: "",
  emailField: "email",
  title: "Recibe los nuevos artículos por correo",
  text: "Un artículo de vez en cuando sobre agentes, calidad y equipos de ingeniería. Sin spam.",
};

export const LINKS = [
  { label: "GitHub", href: "https://github.com/ivancompanyavi" },
  { label: "RSS", href: "/rss.xml" },
];
