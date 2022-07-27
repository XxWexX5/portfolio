import Image from "next/image";

import styles from "./styles.module.scss";

interface Link {
  id: string;
  text: string;
  href: string;
  actived: boolean;
  [key: string]: any;
}

interface HeaderProps {
  links: Link[];
}

export function Header({ links }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <ul>
            {links.map((link: Link) => (
              <li
                key={link.id}
                className={`${styles.link} ${link.actived && styles.actived}`}
              >
                <a href={link.id}>{link.text}</a>
              </li>
            ))}
          </ul>

          <a
            href="/data/resume.pdf"
            target="_blank"
            className="container-image"
          >
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              className="avatar"
              width={100}
              height={93}
            />
          </a>
        </nav>
      </div>
    </header>
  );
}
