interface IComponent {
  title: string;
  value: ILinks[];
}

interface ILinks {
  link: string;
  name: string;
}

export const FooterLinks: IComponent[] = [
  {
    title: "Useful Navigations",
    value: [
      {
        link: "/about-us",
        name: "About Us",
      },
      {
        link: "/services",
        name: "Services",
      },
      {
        link: "/contact",
        name: "Contact",
      },
    ],
  },
  {
    title: "Social Navs",
    value: [
      {
        link: "www.facebook.com",
        name: "catalystinfosys.org",
      },
      {
        link: "www.instagram.com/catalystinfosys",
        name: "@catalyst_infosys",
      },
      {
        link: "www.linkedin.com/catalystinfosys",
        name: "catalystinfosys",
      },
    ],
  },
];
