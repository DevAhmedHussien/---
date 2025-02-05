import Link from "next/link";
import { FaWhatsapp, FaVk, FaTelegram } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  return (
    <div className="mt-12 text-center">
      <div 
        itemScope 
        itemType="https://schema.org/Organization"
        className="flex justify-center gap-6"
      >
        {/* WhatsApp */}
        <Link
          itemProp="sameAs"
          href="https://wa.me/79091818242"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp className="h-6 w-6 text-green-500 hover:text-emerald-600 transition-all duration-300" />
        </Link>

        {/* VK */}
        <Link
          itemProp="sameAs"
          href="https://vk.com/id1024184393"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gradient-to-r from-blue-600 to-sky-700 bg-clip-text text-transparent"
          aria-label="Our VK Profile"
        >
          <FaVk className="h-6 w-6 text-blue-600 hover:text-sky-700 transition-all duration-300" />
        </Link>

        {/* Telegram */}
        <Link
          itemProp="sameAs"
          href="https://t.me/+79091818242"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"
          aria-label="Contact via Telegram"
        >
          <FaTelegram className="h-6 w-6 text-blue-400 hover:text-blue-500 transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
