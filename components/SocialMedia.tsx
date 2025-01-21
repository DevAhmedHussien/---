
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  return (
    <div className="mt-12 text-center">
      <div className="flex justify-center gap-6">
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          <FaFacebook className="h-6 w-6 text-primary transition-all duration-300" />
        </Link>
        < Link
          className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="h-6 w-6 text-primary transition-all duration-300" />
        </ Link>
        < Link
          className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-6 w-6 text-primary transition-all duration-300" />
        </ Link>
        < Link
          className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-6 w-6 text-primary transition-all duration-300" />
        </ Link>
      </div>
    </div>
  );
};

export default SocialMedia;
