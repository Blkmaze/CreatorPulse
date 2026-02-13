import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend = 'neutral' 
}) => {
  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
    neutral: 'text-gray-500'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
          <p className="text-3xl font-bold text-brand-purple-600">{value}</p>
        </div>
        <div className={`text-4xl ${trendColors[trend]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;