import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  HStack,
  Link,
  Tag,
  Divider,
  Box,
  useColorMode,
  Image,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  explanation: {
    detailed: string;
    images: Array<{
      url: string;
      caption: string;
      alt: string;
    }>;
    relatedConcepts: string[];
    resources: Array<{
      title: string;
      url: string;
    }>;
  };
}

const ExplanationModal = ({ isOpen, onClose, explanation }: ExplanationModalProps) => {
  const { colorMode } = useColorMode()

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay 
        bg="blackAlpha.300"
        backdropFilter="blur(10px)"
      />
      <ModalContent
        bg={colorMode === 'dark' ? 'gray.800' : 'white'}
        borderRadius="2xl"
        p={4}
        maxW="900px"
      >
        <ModalHeader
          color={colorMode === 'dark' ? 'green.200' : 'green.500'}
          fontSize="2xl"
        >
          Detailed Explanation
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="stretch" spacing={6}>
            {/* Detailed Explanation */}
            <Box>
              <Text
                whiteSpace="pre-wrap"
                color={colorMode === 'dark' ? 'gray.200' : 'gray.700'}
                fontSize="lg"
                lineHeight="tall"
              >
                {explanation.detailed}
              </Text>
            </Box>

            {/* Images Section */}
            {explanation.images.length > 0 && (
              <>
                <Divider />
                <Box>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    mb={4}
                    color={colorMode === 'dark' ? 'green.200' : 'green.600'}
                  >
                    Diagrams & Images
                  </Text>
                  <VStack spacing={6} align="stretch">
                    {explanation.images.map((image, index) => (
                      <Box key={index}>
                        <Box
                          borderRadius="lg"
                          overflow="hidden"
                          boxShadow="lg"
                          bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
                          p={4}
                        >
                          <Image
                            src={image.url}
                            alt={image.alt}
                            w="100%"
                            h="auto"
                            objectFit="contain"
                            loading="lazy"
                          />
                        </Box>
                        <Text
                          mt={2}
                          fontSize="sm"
                          color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                          textAlign="center"
                        >
                          {image.caption}
                        </Text>
                      </Box>
                    ))}
                  </VStack>
                </Box>
              </>
            )}

            <Divider />

            {/* Related Concepts */}
            <Box>
              <Text
                fontSize="lg"
                fontWeight="bold"
                mb={3}
                color={colorMode === 'dark' ? 'green.200' : 'green.600'}
              >
                Related Concepts
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {explanation.relatedConcepts.map((concept, index) => (
                  <Tag
                    key={index}
                    size="lg"
                    borderRadius="full"
                    variant="subtle"
                    colorScheme="green"
                    mb={2}
                  >
                    {concept}
                  </Tag>
                ))}
              </HStack>
            </Box>

            <Divider />

            {/* Additional Resources */}
            <Box>
              <Text
                fontSize="lg"
                fontWeight="bold"
                mb={3}
                color={colorMode === 'dark' ? 'green.200' : 'green.600'}
              >
                Additional Resources
              </Text>
              <VStack align="stretch" spacing={2}>
                {explanation.resources.map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.url}
                    isExternal
                    color={colorMode === 'dark' ? 'blue.200' : 'blue.500'}
                    fontSize="md"
                    display="flex"
                    alignItems="center"
                  >
                    {resource.title} <ExternalLinkIcon mx={2} />
                  </Link>
                ))}
              </VStack>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ExplanationModal 