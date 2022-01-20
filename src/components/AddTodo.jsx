// import useContext
import { useContext, useState } from 'react'
// import context
import { TodosContext } from '../context/TodosContext'
// import @chakra-ui/react
import { Input, VStack, Button, HStack, Text, useColorModeValue, useToast } from '@chakra-ui/react'
// import nanoid
import { nanoid } from 'nanoid'

export default function AddTodo () {
  const [content, setContent] = useState('')
  // function to add todo, this function is of useContext
  const { addTodo } = useContext(TodosContext)
  // the new todo
  const newTodo = {
    id: nanoid(),
    body: content
  }
  // toast
  const toast = useToast()
  // change color theme dark of button
  const textColor = useColorModeValue('white', 'black')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!content) {
      toast({
        title: 'not content',
        status: 'error',
        duration: 2000,
        isClosable: true
      })
      return
    }
    addTodo(newTodo)
    console.log(newTodo)
    setContent('')
  }
  return (
    <VStack>
      <form onSubmit={handleSubmit}>
        <HStack>
          <Input placeholder='add todo' variant='filled' value={content} onChange={(e) => setContent(e.target.value)} />
          <Button bgColor='pink.400' _hover={{ bgColor: 'pink.500' }} p={4} type='submit'>
            <Text color={textColor}>Add Todo</Text>
          </Button>
        </HStack>
      </form>
    </VStack>
  )
}
