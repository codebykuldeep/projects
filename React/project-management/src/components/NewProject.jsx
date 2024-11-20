import React from 'react'
import Input from './Input'
import { useRef } from 'react'
import Modal from './Modal';

export default function NewProject({onAdd,onCancel}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef()


  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;

    if(
      enteredTitle.trim() === '' ||
      enteredDescription.trim()  === ''||
      enteredDate.trim() === ''
    ){
      modal.current.open();
      return;
    }

    onAdd({
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enteredDate
    })
  }
  return (
    <>
    <Modal ref={modal} buttonCaption={'close'}>
      <h2 className='text-xl font-bold text-stone-600 my-4'>Invalid Input</h2>
      <p className='text-stone-600 mb-4'>Oops... looks like you forget to enter a value</p>
      <p className='text-stone-600 mb-4'>PLease make sure you provide a valid value for every input</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button onClick={onCancel} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg0stone-950'>Save</button></li>
        </menu>
        <div>
            <Input ref={title} type={'text'} label={'title'}/>
            <Input ref={description} label={'Descripton'} textarea/>
            <Input ref={dueDate} type={'date'} label={'Due date'}/>
        </div>
    </div>
    </>
  )
}
