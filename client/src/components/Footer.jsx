import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function footer() {
  return (
    <Footer container className="border border-t-8 border-l-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid  w-full justify-between sm:flex md:grid-cols-1">
            {/* logo */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span
                className="px-2 py-1 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white
          "
              >
                Nishu's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-4 file:gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-8">
                <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                    <Footer.Link href=""
                    target='_blank'
                    rel='nooperer noreferrer'>
                        JS Best Series
                    </Footer.Link>
                    <Footer.Link href=""
                    target='_blank'
                    rel='nooperer noreferrer'>
                        CSS Animations 
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Follow Me" />
                <Footer.LinkGroup col>
                    <Footer.Link href=""
                    target='_blank'
                    rel='nooperer noreferrer'>
                        Github
                    </Footer.Link>
                    <Footer.Link href=""
                    target='_blank'
                    rel='nooperer noreferrer'>
                        Lindlen
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Legal " />
                <Footer.LinkGroup col>
                    <Footer.Link href=""
                    target='_blank'
                    rel='nooperer noreferrer'>
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href=""
                    target='_blank'
                    rel='nooperer noreferrer'>
                        Contect Me 
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
            <Footer.Copyright href="#" by="Nishu'S blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook}/>
                <Footer.Icon href="#" icon={BsInstagram}/>
                <Footer.Icon href="#" icon={BsLinkedin}/>
                <Footer.Icon href="#" icon={BsGithub}/>
            </div>
        </div>
      </div>
    </Footer>
  );
}
