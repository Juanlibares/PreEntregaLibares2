import { Container, Flex, Heading, Text } from '@chakra-ui/react';

export const Hero = () => {
  return (
    <Container maxW="1305px" py={{ base: 9, lg: '70px' }} px={{ base: 6, sm: 12 }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center" // Centrar horizontalmente
        gap={6}
      >
        <Flex width="100%" direction="column" gap={{ base: 0, lg: 4 }}>
          <Heading as="h2" size={{ base: 'xl', lg: '3xl' }}>
            Bienvenido a
          </Heading>
          <Heading as="h2" size={{ base: 'lg', lg: '2xl' }} textColor="green.800">
            Restart
          </Heading>
          <Text fontSize={{ base: 'lg', lg: '2xl' }}>Componentes informáticos</Text>
        </Flex>
      </Flex>
    </Container>
  );
};
