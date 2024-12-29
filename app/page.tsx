"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./components/animated-components";
import Image from "next/image";

import { DownloadIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col min-h-screen bg-white text-gray-800 relative"
    >
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] md:h-[50vh]">
          <Image
            src="/main.jpg"
            alt="تصویر قهرمان"
            layout="fill"
            objectFit="cover"
            className="opacity-75"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 lg:items-start lg:text-left lg:pl-28">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
                ! دوئل میدان چالش و پیروزی
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p
                className="text-base md:text-lg lg:text-xl mb-4
               max-w-xl text-gray-600 leading-relaxed"
              >
                ! چالش کن، برنده شو، بدرخش
              </p>
              <div className="relative w-full flex justify-center">
                <a
                  href="https://dlduelapp.com/duelApplication.apk"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-bold py-4 px-10 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-3xl text-center"
                >
                  <DownloadIcon color="white" size={22} />
                  دانلود برنامه
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              دوئل چه چیزهایی داره ؟
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "چالش‌های متنوع",
                icon: "🔥",
                description:
                  ".در هر لحظه چالش‌های جذاب و خلاقانه را تجربه کنید",
              },
              {
                title: "رقابت با دوستان",
                icon: "🤝",
                description:
                  ".دوستان خود را دعوت کنید و در رقابت‌های هیجان‌انگیز برنده شوید",
              },
              {
                title: "گفت‌وگو و چت",
                icon: "💬",
                description:
                  ".با دوستان خود در چالش‌ها گفت‌وگو کنید و ایده‌های جدید به اشتراک بگذارید",
              },
              {
                title: "محتوای جذاب",
                icon: "🎥",
                description:
                  ".از ویدیوها و محتواهای سرگرم‌کننده لذت ببرید و الهام بگیرید",
              },
            ].map((feature, index) => (
              <FadeIn key={index} delay={0.2 * (index + 1)}>
                <div className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                آماده هستید هیجان تجربه کنید؟
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                ! همین حالا دوئل را دانلود کنید و ماجراجویی خود را آغاز کنید
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex justify-center items-center mt-2">
                <a
                  href="https://dlduelapp.com/duelApplication.apk"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-bold py-4 px-10 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-3xl text-center"
                >
                  <DownloadIcon color="white" size={22} />
                  دانلود برنامه
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Duel. تمامی حقوق محفوظ است
        </p>
      </footer>
    </motion.div>
  );
}
