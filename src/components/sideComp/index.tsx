import styles from "./styles.module.css";
import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
  ssr: true
});

type SlideProps = {
  title: string;
};

const Slide = ({ title }: SlideProps) => {
  return (
    <VStack
      // w="1 0 0%"
      h="200px"
      bg="red.400"
      border="cyan.700"
      alignContent="center"
      justifyContent="center"
      mx="4"
    >
      <Text color="white" fontWeight="bold">
        {title}
      </Text>
    </VStack>
  );
};
export default function SideComp({ children, ...rest }: any) {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1
  };
  return (
    <div
      className={styles.sideComp}
      {...rest}
      style={{
        width: "50%"
      }}
    >
      <Box m="20">
        <Box
          sx={{
            ".slick-dots": {
              transform: "translateY(1em)"
            },
            ".slick-dots li button": {
              _before: {
                transition: "0.2s",
                content: "''",
                width: "25px",
                height: "10px",
                borderRadius: "50px",
                // borderRadius: "100%",
                background: "cyan.500"
              }
            }
          }}
        >
          <Slider {...slickSettings}>
            <Slide title={"１"} />
            <Slide title={"２"} />
            <Slide title={"３"} />
            {/* <Slide title={"4"} /> */}
          </Slider>
        </Box>
      </Box>
    </div>
  );
}
