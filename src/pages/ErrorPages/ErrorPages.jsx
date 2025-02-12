import { motion } from "framer-motion";

const ErrorPages = () => {
    return (
        <div className="min-h-screen flex flex-col gap-6 justify-center items-center bg-gradient-to-br from-blue-50 to-purple-50">
            {/* <Helmet>
                <title>{title || "Error | MovieNest"}</title>
            </Helmet> */}

            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-9xl font-bold text-blue-800"
            >
                404
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                className="text-6xl font-semibold text-purple-700"
            >
                Oops!
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                className="text-3xl text-gray-700 text-center"
            >
                The page you&apos;re looking for doesn&apos;t exist.
            </motion.p>

            <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl 
                font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
                Go Back Home
            </motion.a>

            <motion.div
                className="mt-12 flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                {[1, 2, 3].map((item) => (
                    <motion.div
                        key={item}
                        className="w-4 h-4 bg-blue-400 rounded-full"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: item * 0.3,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default ErrorPages;