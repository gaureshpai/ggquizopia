"use client"
/**
 * Renders a Next.js page component that displays a quiz introduction with an image and a link to start the quiz.
 * @component
 * @returns {JSX.Element} The rendered page component.
 */

import { Container } from '@/components';
import { getRandomQuizQuestion } from '@/lib/quiz';
import Image from 'next/image';
import Link from 'next/link';
import { TbArrowBigRightFilled } from 'react-icons/tb';
import { useState, useEffect } from 'react'; // Import useState and useEffect

export default function Page() {
  const [randomQuestion, setRandomQuestion] = useState(null); // State for storing random question

  useEffect(() => {
    // Fetch random quiz question when component mounts
    async function fetchRandomQuestion() {
      try {
        const data = await getRandomQuizQuestion();
        setRandomQuestion(data.randomQuestion);
      } catch (error) {
        console.error('Error fetching random question:', error);
        // Handle error gracefully, e.g., display error message to the user
      }
    }
    fetchRandomQuestion(); // Invoke the fetch function
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <Container
      as="main"
      className="flex flex-col gap-5 py-5 md:flex-row-reverse md:justify-between"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="md:w-[24rem]">
          {/* Provide a meaningful alt attribute for accessibility */}
          <Image src="/wallpaper.jpg" alt="Quiz Introduction Image" width={700} height={700} />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r"></div>
      </div>

      <div className="md:w-[50%] flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">The Marvel Quiz</h1>
        <p className="text-sm leading-6 text-gray-300">
          Ready to test your Marvel knowledge? 
          Dive into the Marvel Cinematic Universe and discover how much you really know about your favorite superheroes, 
          iconic movies, and memorable moments!
        </p>

        {/* Conditionally render link only when randomQuestion is available */}
        {randomQuestion && (
          <Link
            href={`/quiz/${randomQuestion}`}
            className="flex items-center justify-center gap-1 px-5 py-4 font-semibold text-orange-500 transition-colors rounded-md outline duration-600 hover:bg-orange-950"
          >
            <TbArrowBigRightFilled className="text-lg" />
            Take a Quiz Now!
          </Link>
        )}
      </div>
    </Container>
  );
}
