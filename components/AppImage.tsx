import { Image, Skeleton, ImageProps } from "@chakra-ui/react";
import { useState } from "react";

const AppImage: React.FC<ImageProps> = ({
  borderRadius = "lg",
  h,
  w,
  alt,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <Skeleton isLoaded={isLoaded} borderRadius={borderRadius} w={w} h={h}>
        <Image
          onLoad={handleImageLoad}
          h={h}
          w={w}
          borderRadius={borderRadius}
          objectFit="cover"
          borderStyle="solid"
          alt={alt}
          {...props}
        />
      </Skeleton>
    </>
  );
};

export default AppImage;
