"use client";
import Card from "@/app/ui/Card";
const items = [
  {
    image: "/side-view-photographer-holding-camera.jpg",
    title: "Wedding Photography",
  },
  {
    image: "/model-posing-with-yellow-blue-powder-medium-shot.jpg",
    title: "Event Photography",
  },
  {
    image: "/woman-with-flowers-her-mask-posing-with-hat.jpg",
    title: "Portrait Photography",
  },
  {
    image: "/front-view-women-working-together.jpg",
    title: "Corporate Photography",
  },
  {
    image: "/beautiful-model-posing-with-colorful-powder.jpg",
    title: "Photo Shoot",
  },
  {
    image: "/medium-shot-girl-posing-with-lights-top-view.jpg",
    title: "Outdoor PhotoShoot",
  },
  {
    image:
      "/natures-beauty-shines-multi-colored-floral-decoration-generative-ai.jpg",
    title: "Nature ",
  },
  {
    image: "/photographer-exploring-abandoned-location.jpg",
    title: "Corporate Photography",
  },
  {
    image:
      "/professional-young-photographer-taking-photos-indian-model-studio-with-leight(1).jpg",
    title: "Corporate Photography",
  },
];
export default function LatestImages() {
  return (
    <section className="w-full py-10 ">
      <div className="wrapper">
        <Card items={items} />
      </div>
    </section>
  );
}
