"use client";
import Card from "@/app/ui/Card";

const items = [
  {
    image: "/side-view-photographer-holding-camera.jpg",
    title: "Wedding Photography",
    heading: "Elegant Wedding Photography",
    description: "Capturing the beauty and joy of your special day with stunning photos you'll treasure forever.",
  },
  {
    image: "/model-posing-with-yellow-blue-powder-medium-shot.jpg",
    title: "Event Photography",
    heading: "Vibrant Event Photography",
    description: "Documenting every highlight of your event with creative, high-quality images.",
  },
  {
    image: "/woman-with-flowers-her-mask-posing-with-hat.jpg",
    title: "Portrait Photography",
    heading: "Expressive Portrait Photography",
    description: "Creating timeless portraits that capture personality and emotion beautifully.",
  },
  {
    image: "/front-view-women-working-together.jpg",
    title: "Corporate Photography",
    heading: "Professional Corporate Photography",
    description: "Providing polished, professional images that elevate your corporate image.",
  },
  {
    image: "/beautiful-model-posing-with-colorful-powder.jpg",
    title: "Photo Shoot",
    heading: "Creative Photo Shoots",
    description: "Bringing your vision to life with creative and dynamic photography.",
  },
  {
    image: "/medium-shot-girl-posing-with-lights-top-view.jpg",
    title: "Outdoor PhotoShoot",
    heading: "Outdoor Photography",
    description: "Capturing breathtaking moments in beautiful outdoor settings.",
  },
  {
    image: "/natures-beauty-shines-multi-colored-floral-decoration-generative-ai.jpg",
    title: "Nature",
    heading: "Stunning Nature Photography",
    description: "Highlighting the beauty of nature through vibrant and inspiring images.",
  },
  {
    image: "/photographer-exploring-abandoned-location.jpg",
    title: "Corporate Photography",
    heading: "Authentic Corporate Photography",
    description: "Telling the story of your business with authentic and engaging visuals.",
  },
  {
    image: "/professional-young-photographer-taking-photos-indian-model-studio-with-leight(1).jpg",
    title: "Corporate Photography",
    heading: "Stylish Studio Photography",
    description: "Creating professional, high-quality images in a controlled studio environment.",
  },
];

export default function LatestImages() {
  return (
    <section className="w-full py-10">
      <div className="wrapper">
        <Card items={items} />
      </div>
    </section>
  );
}
