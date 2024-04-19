import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-uibg text-uibgdark py-10 mt-10 border-t">
      <div className="flex mx-4 px-4 justify-between">
        <div className="flex flex-col">
          <a className="hover:underline" href="/">
            Home
          </a>
          <a className="hover:underline" href="/about">
            Contact
          </a>
          <a className="hover:underline" href="/blog">
            Blog
          </a>
          <a className="hover:underline" href="/app">
            Web Version
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md font-semibold">COURSELYNX LLC</h1>
          <p className="text-sm">© 2024 All Rights Reserved</p>
          <p className="text-sm">contact@courselynx.com</p>
          <div className="flex gap-2 mt-2">
            <SocialIcon
              url="https://www.facebook.com/courselynx"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://www.instagram.com/courselynx"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/courselynx"
              style={{ height: 30, width: 30 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
