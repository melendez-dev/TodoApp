import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'
// import @chakra-ui/react
import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react'
// import icons
import { FaTrashAlt } from 'react-icons/fa'

export default function TodoList () {
  const { todos, filterTodo } = useContext(TodosContext)
  if (!todos.length) {
    return (
      <Badge colorScheme='green' size='lg' p={3} mb='15px !important' borderRadius='lg'>
        ¡¡NOT TODOS!!
      </Badge>
    )
  }
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
      {todos.map(todo => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrashAlt />} isRound='true' onClick={() => filterTodo(todo.id)} />

        </HStack>
      ))}
    </VStack>
  )
}
