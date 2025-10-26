import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 px-4 border-t dark:border-gray-700">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-500 leading-tight">
              I Like to Build Things
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's{" "}
              <span className="text-teal-500 font-semibold">Connect</span>
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="mailto:varun.mudaliyar@email.com"
                className="text-teal-500 hover:text-teal-400 text-2xl"
                title="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/varunmudaliyar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-teal-500 text-2xl"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/varunmudaliyar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 text-2xl"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Optional Right Column - quick contact info */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Reach Out
            </h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:varun.mudaliyar@email.com"
                className="text-teal-500 hover:underline"
              >
                varun.mudaliyar@email.com
              </a>
            </p>
            <p className="text-sm">Location: Pune, India</p>
            <p className="text-sm">
              Resume:{" "}
              <a
                href="/"
                className="text-teal-500 hover:underline"
                // replace "/" with actual resume link or import if used inside component
              >
                Download CV
              </a>
            </p>
          </div>
        </div>

        <div className="text-center text-gray-400 dark:text-gray-500 text-sm py-4 border-t dark:border-gray-700">
          &copy; {new Date().getFullYear()} Varun Mudaliyar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
