import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        'We start by understanding your business goals, objectives, and pain points. We also assess your current technology stack and identify areas for improvement, including the potential for AI solutions.',
      author: {
        name: 'Discovery',
        role: 'CEO at Lynch LLC',
        image: avatarImage1,
      },
    },
    {
      content:
        'Based on our discovery, we develop a customized strategy that leverages AI and other technologies to help you achieve your business goals. This includes a detailed roadmap that outlines the steps we will take to get there.',
      author: {
        name: 'Strategy',
        role: 'Director at Velocity Industries',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'Our team of experienced developers and data scientists work together to create high-quality AI solutions that meet your specific needs. We use proven methodologies and best practices to ensure the highest quality and efficiency.',
      author: {
        name: 'Development',
        role: 'Founder of Kiehn and Sons',
        image: avatarImage5,
      },
    },
    {
      content:
        'We work closely with you to integrate our solutions into your existing systems and processes. We also provide training and support to ensure a smooth transition.',
      author: {
        name: 'Implementation',
        role: 'COO at Armstrong Inc',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'We dont just set it and forget it. We continuously monitor and improve our AI solutions to ensure they are delivering the expected results. We also keep you informed of our progress and provide regular updates.',
      author: {
        name: 'Continuous Improvement',
        role: 'Founder of West Inc',
        image: avatarImage3,
      },
    },
    {
      content:
        'We work closely with you to integrate our solutions into your existing systems and processes. We also provide training and support to ensure a smooth transition.',
      author: {
        name: 'Implementation',
        role: 'Director at Velocity Industries',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Our Process.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 text-justify">
          We combine our expertise in these areas with a deep understanding of your business needs to deliver custom solutions that help you achieve your specific goals. Whether you're looking to improve customer engagement, optimize operations, streamline workflows, or increase your online visibility, we have the knowledge and experience to help you succeed. Contact us today to learn more about how we can help your business grow and thrive.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                        </div>
                        
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
