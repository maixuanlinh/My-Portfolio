import { Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {


  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack bg="white" borderRadius="10" padding="10">
        <Image src={imageSrc}></Image>
        <Heading color="black">{title}</Heading>
        <Text color="gray">{description}</Text>
        <Text color="green">
          <a href="https://linapps.tech">See more </a><FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </Text>
      
      </VStack>
    </>
  );
};

export default Card;
