import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "r/IGCSE Resource Repository" },
    {
      name: "description",
      content: "A comprehensive resource repository for IGCSE students.",
    },
  ];
};

export default function Index() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <>
      <style>{`
        html, body { height: 100vh !important; overflow: hidden !important; }
      `}</style>
      <div className="flex min-h-screen w-full flex-col overflow-hidden bg-black">
      <div
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-0 px-4 pt-6 md:flex-row md:gap-8 md:px-8 md:pt-0"
        style={{
          height: "calc(100vh - 70px)",
          maxHeight: "calc(100vh - 70px)",
        }}
      >
        <div className="min-h-[calc(100vh-70px)] flex w-full flex-col items-center px-4 pt-4 pb-0 md:hidden">
          <div className="mb-6 flex w-full items-center justify-between"></div>
          <div className="mb-2 w-full text-left">
            <h2 className="mb-1 font-dmsans text-xl font-medium text-white">
              Welcome to the
            </h2>
            <h1 className="mb-1 font-dmsans text-4xl font-black text-[#EA352A]">
              r/IGCSE
            </h1>
            <h3 className="mb-4 font-dmsans text-2xl font-medium text-white">
              Resource Repository
            </h3>
            <p className="mb-6 font-dmsans text-base text-[#d7dadc]">
              We are a global, student-run community dedicated to supporting 
              learners through their IGCSE and A-Level journeys. All resources 
              here are created and shared by fellow students to make exam preparation 
              easier, more collaborative, and accessible for everyone in the r/IGCSE community.
            </p>
            <div className="mb-8 flex w-full flex-row justify-start gap-8">
              <div className="flex flex-col">
                <div className="mb-1 font-dmsans text-base font-extrabold text-white">
                  Total Users
                </div>
                <div className="font-dmsans text-2xl font-bold text-[#FFD700]">
                  60,000+
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 font-dmsans text-base font-extrabold text-white">
                  Published Resources
                </div>
                <div className="font-dmsans text-2xl font-bold text-[#FFD700]">
                  40+
                </div>
              </div>
            </div>
          </div>
          <motion.img
            src="/covers.png"
            alt="Covers Animation"
            initial={{ opacity: 0, scale: 0.95, rotate: -8 }}
            animate={{ opacity: 1, scale: 1.05, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 80,
            }}
            className="mx-auto mb-2 w-full max-w-xs select-none rounded-xl shadow-lg"
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          />
        </div>

        <motion.div
          className="z-40 hidden w-full flex-col items-center justify-center md:flex md:w-[540px] md:items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="w-full">
            <p className="mt-2 text-center font-dmsans text-lg font-medium text-white md:mt-[-0.5rem] md:text-left md:text-2xl">
              Welcome to the
            </p>
            <h1 className="text-center font-dmsans text-2xl font-medium leading-tight text-white md:text-left md:text-4xl">
              <span className="text-4xl font-extrabold text-[#EA352A] md:text-6xl">
                r/IGCSE
              </span>
              <br className="hidden md:block" />
              Resource Repository
            </h1>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-4 mb-6 max-w-xs text-center font-dmsans text-base text-[#d7dadc] md:max-w-md md:text-left md:text-lg"
          >
            We are a global, student-run community dedicated to supporting learners 
            through their IGCSE and A-Level journeys. All resources here are created 
            and shared by fellow students to make exam preparation easier, more 
            collaborative, and accessible for everyone in the r/IGCSE community.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex w-full flex-row justify-center gap-6 md:justify-start"
          >
            <div className="flex w-full flex-row items-end justify-center gap-12 md:justify-start">
              <div className="flex flex-col items-start">
                <div className="mb-1 font-dmsans text-md font-bold text-white">
                  Total Users
                </div>
                <div className="font-dmsans text-3xl font-extrabold text-[#FFD700]">
                  60,000+
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="mb-1 font-dmsans text-md font-bold text-white">
                  Published Resources
                </div>
                <div className="font-dmsans text-3xl font-extrabold text-[#FFD700]">
                  40+
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src="/covers.png"
          alt="Covers Animation"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1.2, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 80,
          }}
          className="hidden w-full select-none shadow-xl md:block md:w-[40rem]"
          style={{
            userSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            marginTop: "-2rem",
          }}
        />
      </div>
      </div>
    </>
  );
}