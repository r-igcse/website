import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import NavBar from "~/components/NavBar";

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
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-end overflow-hidden m-0 p-0">
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      <motion.div
        className="absolute left-0 top-0 h-full flex flex-col justify-center pl-16 z-40"
        style={{ maxWidth: "540px" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <p
            style={{
              marginTop: "3rem",
              fontFamily: "DMSans, sans-serif",
              fontWeight: 500,
              fontSize: "1.5rem",
              color: "#fff",
            }}
          >
            Welcome to the
          </p>
          <h1
            style={{
              fontFamily: "DMSans, sans-serif",
              fontWeight: 500,
              fontSize: "2rem",
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            <span style={{ fontWeight: 950, fontSize: "4rem", color: "#EA352A" }}>
              r/IGCSE
            </span>
            <br />
            Resource Repository
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          style={{
            color: "#d7dadc",
            fontFamily: "DMSans, sans-serif",
            fontSize: "1rem",
            marginTop: "1.5rem",
            marginBottom: "2.5rem",
            maxWidth: "420px",
          }}
        >
          We are a global, student-run community dedicated to helping 
          learners succeed in their IGCSE exams. All resources here are 
          created and shared by fellow students to make exam preparation 
          easier and more accessible for everyone in the r/IGCSE community.
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{ display: "flex", gap: "2.5rem" }}
        >
          <div>
            <div
              style={{
                color: "#fff",
                fontFamily: "DMSans, sans-serif",
                fontWeight: 900,
                fontSize: "0.8rem",
                marginBottom: "0.25rem",
              }}
            >
              Total Users
            </div>
            <div
              style={{
                color: "#FFD700",
                fontWeight: 800,
                fontSize: "1.5rem",
                fontFamily: "DMSans, sans-serif",
              }}
            >
              60,000+
            </div>
          </div>
          <div>
            <div
              style={{
                color: "#fff",
                fontFamily: "DMSans, sans-serif",
                fontWeight: 900,
                fontSize: "0.8rem",
                marginBottom: "0.25rem",
              }}
            >
              Published Resources
            </div>
            <div
              style={{
                color: "#FFD700",
                fontWeight: 900,
                fontSize: "1.5rem",
                fontFamily: "DMSans, sans-serif",
              }}
            >
              40+
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.img
        src="/covers.png"
        alt="Covers Animation"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1.2, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 80 }}
        className="absolute right-0 w-[40rem] shadow-xl"
        style={{ userSelect: "none", WebkitUserSelect: "none", msUserSelect: "none" }}
      />
    </div>
  );
}