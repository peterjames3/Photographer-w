'use client';
import TitleAnimate from "@/components/ui/TitleAnimate";
import Reveal from '@/components/ui/Reveal'
import Content from '@/components/ui/Content';
import { Benefits } from '@/app/ui/Service/Benefits';

export default function PortraitServices() {
  return (
    <section className="px-6 py-12 mx-auto max-w-7xl">
      {/* Types of Portrait Photography */}
      <header>
        <TitleAnimate>
        <h2 className="text-3xl font-bold text-white">
          Types of Portrait Photography
        </h2>
        </TitleAnimate>
        <p className="mt-4 text-gray-200">
          Discover the different types of portrait photography that I offer.
          Whether you &apos;re looking for individual, family, or couple portraits, I
          provide a variety of services to meet your needs.
        </p>
      </header>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Type 01 */}
        <article className="bg-cardBg p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Reveal position="left">
            <span className="text-2xl font-bold text-secondary">01</span>
            </Reveal>
            <Reveal position="right">
            <h3 className="text-xl font-semibold text-gray-200">
              Individual Portraits
            </h3>
            </Reveal>
          </div>
          <Content>
          <p className="text-gray-100">
            Capture your personality with individual portrait sessions.
          </p>
          </Content>
        </article>

        {/* Type 02 */}
        <article className="bg-cardBg p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Reveal position='left'>
            <span className="text-2xl font-bold text-secondary">02</span>
            </Reveal>
            <Reveal position='right'>
            <h3 className="text-xl font-semibold text-gray-200">
              Family Portraits
            </h3>
            </Reveal>
          </div>
          <Content>
          <p className="text-gray-100">
            Create lasting memories with family portraits.
          </p>
          </Content>
        </article>

        {/* Type 03 */}
        <article className="bg-cardBg p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Reveal position='left'>
            <span className="text-2xl font-bold text-secondary">03</span>
            </Reveal>
            <Reveal position='right'>
            <h3 className="text-xl font-semibold text-gray-200">
              Lifestyle Portraits
            </h3>
            </Reveal>
          </div>
          <Content>
          <p className="text-gray-100">
            Capture candid moments in a natural environment.
          </p>
          </Content>
        </article>

        {/* Type 04 */}
        <article className="bg-cardBg p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Reveal position="left">
            <span className="text-2xl font-bold text-secondary">04</span>
            </Reveal>
            <Reveal position='right'>
            <h3 className="text-xl font-semibold text-gray-200">
              Couple Portraits
            </h3>
            </Reveal>
          </div>
          <Content>
          <p className="text-gray-100">
            Celebrate your relationship with a couples session.
          </p>
          </Content>
        </article>

        {/* Type 05 */}
        <article className="bg-cardBg p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Reveal position='left'>
            <span className="text-2xl font-bold text-secondary">05</span>
            </Reveal>
            <Reveal position='right'>
            <h3 className="text-xl font-semibold text-gray-200">
              Graduation Portraits
            </h3>
            </Reveal>
          </div>
          <Content>
          <p className="text-gray-100">
            Commemorate your achievements with a graduation portrait.
          </p>
          </Content>
        </article>

        {/* Type 06 */}
        <article className="bg-cardBg p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Reveal position='left'>
            <span className="text-2xl font-bold text-secondary">06</span>
            </Reveal>
            <Reveal position='right'>
            <h3 className="text-xl font-semibold text-gray-200">
              Engagement Portraits
            </h3>
            </Reveal>
          </div>
          <Content>
          <p className="text-gray-100">
            Announce your engagement with a beautiful photoshoot.
          </p>
          </Content>
        </article>
      </div>

      {/* Services Benefits */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold text-white">Services Benefits:</h3>
        <p className="mt-4 text-gray-300">
          Every portrait photography session includes professional editing, a
          digital gallery, and flexible scheduling to accommodate your needs.
        </p>

         <ul className="mt-6 space-y-4">
          {
            Benefits.map((benefit, index)=>(
             <li key={index} className="flex items-start">
                 <benefit.Icon className="text-secondary mr-2 mt-1" />
                 <span className="text-gray-200">{benefit.Title}</span>
             </li>
            ))
          }
        </ul>
      </section>
    </section>
  );
}
