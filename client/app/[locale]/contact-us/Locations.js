"use client"
import { motion } from "framer-motion"; // اضافه کردن framer-motion
export default function Locations({ locations }) {
    return (
        <section className="  py-8 text-right">
            <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
                <motion.div
                    className=" flex justify-around flex-wrap items-center "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {locations.map((location, index) => (
                        <motion.div
                            key={index}
                            className="h-96 m-5 w-96 relative flex flex-col items-center border p-4 rounded-lg shadow-md"
                            whileInView={{ opacity: 1, y: 0 }} // وقتی وارد viewport می‌شود
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ delay: 0.2 * index, duration: 0.5 }}
                        >
                            <motion.img
                                src={location.image}
                                alt={location.country}
                                className="w-full h-48 object-cover rounded-t-lg"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <h3 className="mt-4 text-xl font-semibold text-center">
                                {location.country}
                            </h3>
                            <p className="mt-2 text-center">{location.address}</p>
                            <motion.iframe
                                src={location.mapUrl}
                                width="100%"
                                height="400"
                                frameBorder="0"
                                className="mt-4 rounded-lg"
                                allowFullScreen
                                whileInView={{ opacity: 1 }} // وقتی وارد viewport می‌شود
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
