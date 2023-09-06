type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "lchoo2@wisc.edu",
  title: "Hi, I’m Kwan 👋",
  // profile: "/profile.webp",
  description:
    "A *malaysian*, software engineer and aspiring machine learning enthusiast graduating from the University of Wisconsin-Madison in Fall 2023.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/ley-kwan-choo-129678228/",
    },
    {
      label: "Github",
      link: "https://github.com/Leykwan132",
    },
  ],
};

export default presentation;
