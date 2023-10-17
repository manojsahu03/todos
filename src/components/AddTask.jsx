import { Button, HStack, Heading, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ADD } from "../store/TaskSlice";

function AddTask({ setModal,inputText,setInputText }) {
  
  const dispatch = useDispatch();
  const handleInputText = (e) => {
    const { value } = e.target;
    setInputText(value);
    console.log(inputText);
  };
  const addTask = () => {
    if(inputText){
    dispatch(ADD(inputText));}
    setModal(false);
    setInputText("")
  };
  return (
    <Stack
      width="60%"
      margin="0 auto"
      boxShadow="lg"
      padding="5px"
      position="absolute"
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
    >
      <HStack justifyContent="space-around">
        <Heading as="h4" size="md">
          Add New Task
        </Heading>

        <AiFillCloseCircle onClick={() => setModal(false)} fontSize="20px" />
      </HStack>
      <Input
        placeholder="Add Task..."
        onChange={(e) => handleInputText(e)}
        name="inputText"
        value={inputText}
        bg="white"
      />
      <Button bg="yellow.300" _hover={{ bg: "yellow.400" }} onClick={addTask}>
        ADD
      </Button>
    </Stack>
  );
}

export default AddTask;
