"use client";
import { Button, Modal, TextInput } from "flowbite-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { addItemToLocalStorage } from "../lib/localStorage.services";

interface AddTodoProps {
  isOpen: boolean;
}

const AddTodo: React.FC<AddTodoProps> = ({ isOpen }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const form = searchParams.get("form");
  const router = useRouter();

  const onClose = () => {
    router.push("/");
  };

  const onConfirm = (e: any) => {
    e.preventDefault();
    const newTask = {
      title: title,
      description: description,
    };
    addItemToLocalStorage(newTask);
    router.push("/");
  };

  const onChange = (params: { title?: string; description?: string }) => {
    const obj: any = {};
    if (form) {
      obj.form = form;
    }
    if (params?.title ?? title) {
      obj.title = params?.title ?? title;
    }
    if (params?.description ?? description) {
      obj.description = params?.description ?? description;
    }
    const query = "/?" + new URLSearchParams({ ...obj });
    router.push(query);
  };

  return (
    <>
      <Modal dismissible show={isOpen} onClose={onClose}>
        <Modal.Header>Add New Task</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={onConfirm} className="flex flex-col gap-5">
              <TextInput
                defaultValue={title || ""}
                placeholder="Title...."
                onChange={(e) => onChange({ title: e.target.value })}
              />
              <TextInput
                defaultValue={description || ""}
                placeholder="Description...."
                onChange={(e) => onChange({ description: e.target.value })}
              />
              <Button type="submit">Add New</Button>
              <Button color="gray" onClick={onClose}>
                Decline
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddTodo;
