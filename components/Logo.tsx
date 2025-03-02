import React from 'react';
import { Music } from 'lucide-react';

const Logo: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full">
            <Music className="w-7 h-7 text-white" />
        </div>
    );
};

export default Logo;