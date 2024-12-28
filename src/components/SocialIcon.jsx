import {Facebook, Instagram, Twitter, Youtube} from 'lucide-react';

export const SocialIcon = ({type}) => {
  const getIconConfig = (type) => {
    const configs = {
      facebook: {
        icon: <Facebook size={26}/>,
        hoverColor: "hover:text-blue-500",
        url: "#",
      },
      twitter: {
        icon: <Twitter size={26}/>,
        hoverColor: "hover:text-sky-500",
        url: "#"
      },
      instagram: {
        icon: <Instagram size={26}/>,
        hoverColor: "hover:text-pink-500",
        url: "#"
      },
      youtube: {
        icon: <Youtube size={26}/>,
        hoverColor: "hover:text-red-500",
        url: "#"
      }
    };

    return configs[type] || null;
  };

  const config = getIconConfig(type);

  return (
      <a className={config.hoverColor} href={config.url}>
        {config.icon}
      </a>
  );
}
