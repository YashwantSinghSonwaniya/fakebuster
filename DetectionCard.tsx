import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface DetectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient: string;
  delay: number;
}

const DetectionCard: React.FC<DetectionCardProps> = ({
  title,
  description,
  icon: Icon,
  link,
  gradient,
  delay
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group"
    >
      <Link to={link}>
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradient} p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-700/50 backdrop-blur-sm`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <Icon className="h-12 w-12 text-white drop-shadow-lg" />
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
              {title}
            </h3>
            
            <p className="text-gray-200 text-sm leading-relaxed group-hover:text-gray-100 transition-colors">
              {description}
            </p>
            
            <div className="mt-4 flex items-center text-white/80 group-hover:text-white transition-colors">
              <span className="text-sm font-medium">Analyze Now</span>
              <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors" />
        </div>
      </Link>
    </div>
  );
};

export default DetectionCard;