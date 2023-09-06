export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Stalkyourlinkedin",
    techs: ["ReactJS (NextJS)", "TailwindCSS", "Supabase"],
    link: "https://www.stalkyourlinkedin.fun/",
  },
  {
    title: "Name Generator",
    techs: ["Python", "Machine Learning"],
    link: "https://github.com/Leykwan132/name_model",
  }
];

export default projects;
