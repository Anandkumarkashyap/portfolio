"use client";
import { certificatesData } from "@/../utils/Data/certificates";
import { Award } from "lucide-react";
import CertificateCard from "./certificate-card";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative z-50 py-16 lg:py-32 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-blue-600"></span>
          <span className="bg-[#050505] border border-blue-600/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-blue-600"></span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-12 lg:gap-20">
          <div className="text-center">
            <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-2">
              <Award size={18} />
              Professional Achievements
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                Certifications
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-slate-400 text-lg leading-relaxed font-medium mx-auto">
              A collection of professional certifications that validate my expertise and commitment to continuous learning.
            </p>
          </div>

          {certificatesData.length > 0 ? (
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
              {certificatesData.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              <p className="text-xl">Certificates coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
