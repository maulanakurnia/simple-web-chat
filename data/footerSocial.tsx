import React from 'react'
import { FiTwitter, FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { ReactElement } from "react";
export interface FooterSocialProps {
  icon: ReactElement;
  url: string;
}

export const footerSocial: FooterSocialProps[] = [
  {
    icon: <FiGithub />,
    url: "https://github.com/maulanakurnia",
  },
  {
    icon: <FiTwitter />,
    url: "https://twitter.com/maulanaakurniaa",
  },
  {
    icon: <FiInstagram />,
    url: "https://instagram.com/maulanaakurniaa",
  },
  {
    icon: <FiMail />,
    url: "mailto:maulanaakurniaa@yahoo.com",
  },
];
