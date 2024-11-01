"use client";
import { FaCamera, FaVideo, FaPaintBrush } from "react-icons/fa";
import Content from '@/components/ui/Content'
const services = [
  {
    name: "Photography",
    icon: FaCamera,
    description:
      "Offering professional photography services for all types of events and projects, capturing moments that last foreve",
  },
  {
    name: "Motion Video",
    icon: FaVideo,
    description:
      "Expert in creating dynamic and engaging motion videos that bring stories to life and communicate messages clearly.",
  },
  {
    name: "Retouching",
    icon: FaPaintBrush,
    description:
      "Providing high-quality photo retouching services to enhance images and make them stand out.",
  },
];
export default function MyServices() {
  return (
    <div className="w-full md:w-1/3 p-4">
      <Content>
      <h2 className="text-xl font-semibold mb-2 text-white">MY SERVICES</h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service.name} className="flex items-center space-x-4">
            <service.icon className="text-secondary text-8xl" />
            <div>
              <h4 className="font-bold text-gray-300">{service.name}</h4>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
      </Content>
    </div>
  );
}
