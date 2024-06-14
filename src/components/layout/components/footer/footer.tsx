import { FC } from "react";
import cx from "classnames";
import Link from "next/link";
import { format } from "date-fns";

import { FooterProps } from "./footer.props";
import { Container } from "@/components";

import cls from "./footer.module.scss";

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  const date = format(new Date(), "yyyy");

  return (
    <footer className={cx(cls.footer, className)} {...props}>
      <Container className={cls.footerContainer}>
        <p className={cls.footerCopyright}>Education © {date}. Barcha Huquqlar Himoyalangan</p>
        <Link className={cls.footerLink} href="/">
          Foydalanish shartlari
        </Link>
        <Link className={cls.footerLink} href="/">
          Maxfiylik siyosati
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
