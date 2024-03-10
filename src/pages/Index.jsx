import { Box, Flex, Heading, Text, Button, Image, Link, SimpleGrid, Icon, useColorModeValue, Container, Spacer } from "@chakra-ui/react";
import { FaMusic, FaCalendarAlt, FaInstagram, FaTwitter, FaFacebookF, FaSoundcloud, FaSpotify } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} color={color} minH="100vh">
      <Container maxW="container.xl">
        <Flex py={5} justifyContent="space-between" alignItems="center">
          <Heading as="h1">DJ BeatsMaster</Heading>
          <Flex alignItems="center">
            <Link href="#music" mx={2}>
              <Button leftIcon={<FaMusic />} colorScheme="teal" variant="ghost">
                Music
              </Button>
            </Link>
            <Link href="#events" mx={2}>
              <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="ghost">
                Events
              </Button>
            </Link>
            <Link href="#connect" mx={2}>
              <Button colorScheme="teal" variant="solid">
                Connect
              </Button>
            </Link>
          </Flex>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} my={10} alignItems="center">
          <Box flexShrink="0">
            <Image borderRadius="full" boxSize="300px" src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxESiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDA4NjQ5MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="DJ BeatsMaster" />
          </Box>
          <Spacer />
          <Box p={5}>
            <Heading as="h2" size="xl">
              Welcome to the Beat
            </Heading>
            <Text mt={4} fontSize="lg">
              DJ BeatsMaster is an internationally recognized DJ and producer known for his electrifying remixes and stellar live performances. Dive into the world of music, explore upcoming events, and connect with the rhythms that move you.
            </Text>
          </Box>
        </Flex>

        <Box as="section" id="music" my={10}>
          <Heading as="h3" size="lg" mb={5}>
            Latest Tracks
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {/* Placeholder for music products */}
            {/* Repeat this block for each product */}
            <Box bg="white" boxShadow="md" borderRadius="lg" p={5}>
              <Image borderRadius="lg" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcxMDA4NjQ5MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Album Cover" />
              <Heading as="h4" size="md" mt={3}>
                Album Title
              </Heading>
              <Text mt={2}>Release Date: 2023-01-01</Text>
              <Button mt={3} leftIcon={<FaSpotify />} colorScheme="green" w="full">
                Listen on Spotify
              </Button>
            </Box>
            {/* End of music product block */}
          </SimpleGrid>
        </Box>

        <Box as="section" id="events" my={10}>
          <Heading as="h3" size="lg" mb={5}>
            Upcoming Events
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Placeholder for events */}
            {/* Repeat this block for each event */}
            <Box bg="white" boxShadow="md" borderRadius="lg" p={5}>
              <Image borderRadius="lg" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZlbnVlfGVufDB8fHx8MTcxMDA4NjQ5MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Event Venue" />
              <Heading as="h4" size="md" mt={3}>
                Event Name
              </Heading>
              <Text mt={2}>Date: 2023-05-01</Text>
              <Text mt={2}>Location: New York, NY</Text>
              <Button mt={3} leftIcon={<FaCalendarAlt />} colorScheme="teal" w="full">
                Get Tickets
              </Button>
            </Box>
            {/* End of event block */}
          </SimpleGrid>
        </Box>

        <Box as="section" id="connect" my={10}>
          <Heading as="h3" size="lg" mb={5}>
            Connect with DJ BeatsMaster
          </Heading>
          <Flex justifyContent="center" alignItems="center">
            <Link href="https://instagram.com" isExternal mx={2}>
              <Icon as={FaInstagram} w={8} h={8} />
            </Link>
            <Link href="https://twitter.com" isExternal mx={2}>
              <Icon as={FaTwitter} w={8} h={8} />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <Icon as={FaFacebookF} w={8} h={8} />
            </Link>
            <Link href="https://soundcloud.com" isExternal mx={2}>
              <Icon as={FaSoundcloud} w={8} h={8} />
            </Link>
          </Flex>
        </Box>

        <Box as="footer" py={5} textAlign="center">
          <Text>&copy; {new Date().getFullYear()} DJ BeatsMaster. All rights reserved.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
