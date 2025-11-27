"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function HeaderLeft() {

  const [active, setActive] = useState(false);
  const path = usePathname();
  const cond = ['marketplace', 'groups', 'gaming'].some(x => path.includes(x));
  const refreshPage = () => {
    location.reload();
  }

  return (
    <div className="relative">
      {/* Parent container */}
      <div className="parent flex items-center space-x-2">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.button
              key="back"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActive(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ArrowLeft size={20} />
            </motion.button>
          ) : (
            <motion.div
              key="logo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/facebook.png"
                alt="Facebook Logo"
                width={40}
                height={40}
                onClick={refreshPage}
                className="cursor-pointer"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout
          onClick={() => setActive(true)}
          className={`${cond ? `${active ? "w-60 px-3 py-2" : 'size-11 justify-center'}` : "w-60 gap-3 px-3 py-2 "} rounded-full bg-gray-100 flex items-center`}
        >
          {!active && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image src="/search.svg" alt="Search Icon" width={16} height={16} />
            </motion.div>
          )}
          <input
            type="text"
            placeholder="Search Facebook"
            onFocus={() => setActive(true)}
            className={`${cond ? `${active ? 'block' : 'hidden'}` : ''} bg-transparent focus:outline-none w-full`}
          />
        </motion.div>
      </div>

      {/* Recent search section */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="recent"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute -top-5 -left-5 -z-10 w-80 bg-white shadow-xl rounded-xl p-4"
          >
            <h3 className="text-gray-500 text-sm mt-15 mb-2">Recent Searches</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
