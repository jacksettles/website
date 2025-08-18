import React from 'react';
import Image from 'next/image';

const AZCLogo = () => (
  <div className="flex items-center justify-center w-24 h-24 relative rounded-full overflow-hidden">
      <Image
        src="./logos/azcards_logo.png"
        alt="azc logo"
        width={80}
        height={80}
        objectFit="cover"
      />
    </div>
);

export default AZCLogo;
