import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function DailogueModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody>
          
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
