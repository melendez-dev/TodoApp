// import @chakra-ui/react
import { HStack, VStack, Text, IconButton, StackDivider, Spacer } from '@chakra-ui/react'
// import icons
import { FaTrashAlt } from 'react-icons/fa'

// initialTodo
const initialTodo = [
  {
    id: 1,
    body: 'learn java'
  },
  {
    id: 2,
    body: 'learn python'
  }
]

export default function TodoList () {
  return (
    <VStack
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      borderRadius='lg'
      p={4}
      w={{ sm: '90vw', md: '80vw', lg: '60vw', xl: '40vw' }}
      alignItems='stretch'
      my='35px !important'
    >
      {initialTodo.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrashAlt />} isRound='true' />

        </HStack>
      ))}
    </VStack>
  )
}
