"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Award, Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";

interface CertificateCardProps {
  certificate: {
    id: number;
    name: string;
    img: string;
    gdrive: string;
  };
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative h-full"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      />

      <Card className="relative flex flex-col h-full justify-between border border-white/10 bg-[#050505]/20 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-blue-600/50 hover:shadow-blue-600/10">
        {/* Certificate Image */}
        <div className="relative overflow-hidden aspect-square">
          <Image
            src={certificate.img}
            width={400}
            height={400}
            alt={certificate.name}
            className="object-fit h-full transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

          {/* Award Icon Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-full shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
            <Award size={20} />
          </div>
        </div>

        <CardContent className="pt-6 pb-4 flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
            {certificate.name}
          </h3>
        </CardContent>

        {/* Footer with Links */}
        <CardFooter className="flex gap-3 pt-4 border-t border-white/5">
          <Link href={certificate.gdrive} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button
              variant="ghost"
              className="w-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 border border-blue-600/30 rounded-lg transition-all duration-300"
            >
              <Download size={18} />
              <span>View</span>
            </Button>
          </Link>
          <Link href={certificate.gdrive} target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 border border-blue-600/30 rounded-lg transition-all duration-300"
            >
              <ExternalLink size={18} />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CertificateCard;
