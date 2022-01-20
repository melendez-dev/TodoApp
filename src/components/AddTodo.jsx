// import @chakra-ui/react
import { FormControl, Input, VStack, Button, HStack, Text, useColorModeValue } from '@chakra-ui/react'
export default function AddTodo () {
  const textColor = useColorModeValue('white', 'black')
  return (
    <VStack>
      <FormControl>
        <HStack>
          <Input placeholder='add todo' variant='filled' />
          <Button bgColor='pink.400' _hover={{ bgColor: 'pink.500' }} p={4}>
            <Text color={textColor}>Add Todo</Text>
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  )
}
