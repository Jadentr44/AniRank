/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Profile from "./icons/Profile";
import { useRouter } from "next/dist/client/router";
import { signOut, useSession } from "next-auth/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ session }) {
  const router = useRouter();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-full border border-gray-300 bg-white p-3 text-md font-medium text-gray-700 shadow-sm hover:bg-gray-50 ">
          <Profile />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <>
                  {session ? (
                    <>
                      <a className="block px-4 py-2 text-sm bg-white-100 text-gray-900 hover:bg-gray-100 cursor-pointer">
                        view Profile
                      </a>
                      <a
                        onClick={() => signOut()}
                        className="block px-4 py-2 text-sm bg-white-100 text-gray-900 hover:bg-gray-100 cursor-pointer"
                      >
                        log out
                      </a>
                    </>
                  ) : (
                    <>
                      <a className="block px-4 py-2 text-sm bg-white-100 text-gray-900 hover:bg-gray-100 cursor-pointer">
                        sign up
                      </a>
                      <a
                        onClick={() => router.push("/api/auth/signin")}
                        className="block px-4 py-2 text-sm bg-white-100 text-gray-900 hover:bg-gray-100 cursor-pointer"
                      >
                        login
                      </a>
                    </>
                  )}
                </>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
{
  /* <a onClick={()=> signOut()}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  log out
                </a> */
}
