import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar
        src="https://media-exp1.licdn.com/dms/image/D4D03AQGRTSB6kPNtNg/profile-displayphoto-shrink_200_200/0/1665350444937?e=1675900800&v=beta&t=tQhLhPmCXBZlv-THjBE6rgybd6Wt781bd-ilvmhF1Dg"
        size="2xl"
        name="Linh Mai"
      />

      <Heading as="h4" size="md" noOfLine={1}>
        Hello, I am Linh
      </Heading>
    </VStack>

    <VStack spacing={6}>
      <Heading as="h1" size="3xl" noOfLines={1}>
        A front-end developer
      </Heading>
      <Heading as="h1" size="3xl" noOfLines={1}>
        with experience in React
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
