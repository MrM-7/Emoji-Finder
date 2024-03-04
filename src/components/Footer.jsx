
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="mt-2 flex justify-evenly text-xl">
        <a
          href="https://github.com/MrM-7/Emoji-Finder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline flex items-center mr-4 "
        >
          <i className="ri-code-line"> Source Code </i>
          
        </a>
        <a
          href="https://www.linkedin.com/in/mehulraj-7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline flex items-center"
        >
          <i className="ri-linkedin-fill"> LinkedIn</i>
          
        </a>
      </div>
    </footer>
  );
};

export default Footer;
