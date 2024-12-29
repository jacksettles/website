import React from 'react';
import Image from 'next/image';

const UGAIcon = () => (
  <div className="w-24 h-24 relative rounded-full overflow-hidden">
    <Image
      src="./logos/uga.png"
      alt="ugalogo"
      layout="fill"
      objectFit="cover"
    />
  </div>
);

export default UGAIcon;
