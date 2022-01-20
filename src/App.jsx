// @chakra-ui/react
import { VStack, useColorMode, IconButton, Heading } from '@chakra-ui/react'
// import component
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

// import Icons
import { FaMoon, FaSun } from 'react-icons/fa'

function App () {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <VStack p={4}>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        size='lg'
        isRound='true'
        alignSelf='flex-end'
      />

      <Heading
        my='15px !important'
        bgGradient='linear(to-r, pink.500, pink.300, blue.200)'
        bgClip='text'
        fontSize={[30, 50, 60, 70]}
        fontWeight='extrabold'
      >
        Todo Application
      </Heading>

      <TodoList />
      <AddTodo />

    </VStack>
  )
}

export default App
