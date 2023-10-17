import { Button, HStack, Heading, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../store/TaskSlice";
import { UPDATE } from "../store/TaskSlice";

function EditTask({
  setEditModal,
  setInputText,
  inputText,
  setEditText,
  editText,
  id1,
}) {
  const dispatch = useDispatch();
  const edited = useSelector((state) => state.addTask);
  const [editText1, setEditText1] = useState(editText);

  const handleUpdate = (ed1, id1) => {
    dispatch(UPDATE({ ed1, id1 }));
    setEditModal(false);
  };

  return (
    <Stack
      width="60%"
      margin="0 auto"
      boxShadow="xl"
      padding="5px"
      position="absolute"
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
    >
      <HStack justifyContent="space-around">
        <Heading as="h4" size="md">
          Edit Task
        </Heading>

        <AiFillCloseCircle
          onClick={() => setEditModal(false)}
          fontSize="20px"
        />
      </HStack>
      <Input
        placeholder="Edit Task..."
        onChange={(e) => setEditText1(e.target.value)}
        name="inputText"
        value={editText1}
        bg="white"
      />
      <Button
        bg="yellow.300"
        _hover={{ bg: "yellow.400" }}
        onClick={() => handleUpdate(editText1, id1)}
      >
        UPDATE
      </Button>
    </Stack>
  );
}

export default EditTask;
