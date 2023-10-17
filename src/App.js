import { Button, Checkbox, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { REMOVE } from "./store/TaskSlice";
import { useDispatch } from "react-redux";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import EditTask from "./components/EditTask";



function App() {
  const [inputText, setInputText] = useState("");
  const [modal, setModal] = useState(false)
  const [editModal,setEditModal]=useState(false)
  const [editText, setEditText] = useState('')
  const [id1, setid1] = useState('')
  
  
  const task=useSelector(state=>state.addTask)
  let dispatch=useDispatch()
  const handleDelete=(id)=>{
    
    
    dispatch(REMOVE(id))
    
  }
  const handleEdit=(task,id)=>{
console.log(task[id])
setEditText(task[id])
  }
  return (
   <>
     <Stack alignItems="center" justifyContent="center" margin={{md:"20% 30%",base:"5% 5%"}} boxShadow="md" position="relative"  >
      <HStack   bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' padding="15px" borderRadius="10px" width="full" alignItems="center" justifyContent="center">
      <Heading  as='h4' size='md' color="blue.600">ToDo List App</Heading>
      <Button bg="green.400" _hover={{bg:"green.500"}} onClick={()=>setModal(true)}>+</Button>
      </HStack>
      {task.map((items,id)=>(
      <Stack boxShadow="md"  padding="10px" borderRadius="10px" width="full" bgGradient={[
      'linear(to-tr, teal.300, yellow.400)',
      'linear(to-t, blue.200, teal.500)',
      'linear(to-b, orange.100, purple.300)',
    ]} >
      
      <HStack justifyContent="space-between" key={id}>
          <Checkbox  ></Checkbox>
          <Text fontWeight="bold">{items}</Text>
          <HStack>
          <Button bg="red.300" _hover={{bg:"red.500"}} onClick={()=>handleDelete(id)}><AiFillDelete/></Button>
          <Button bg="green.100" _hover={{bg:"green.200"}} onClick={()=>{setEditModal(true);handleEdit(task,id);setid1(id)}}><AiOutlineEdit/></Button>
          </HStack>
        </HStack>
       
      {/* <EditTask/> */}
      
        
      </Stack>
      ))}
      {editModal?<EditTask setEditModal={setEditModal} setInputText={setInputText} setEditText={setEditText} editText={editText} setid1={setid1} id1={id1}/>:""}
      {modal?<AddTask setModal={setModal}  setInputText={setInputText} inputText={inputText}/>:""}
      
     </Stack>
    
    
    </>
    
  );
}

export default App;
