import React from 'react';
import Image from 'next/image';

const OTFIcon = () => (
    <div className="flex items-center justify-center w-24 h-24 relative rounded-full overflow-hidden">
    <Image
      src="./logos/otf.png"
      alt="otf logo"
      width={80}
      height={80}
      objectFit="cover"
    />
  </div>
);

export default OTFIcon;
