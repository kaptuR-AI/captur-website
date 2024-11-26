'use client'

import { FormEvent, useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { toast } from 'sonner'
 
export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const [isValid, setIsValid] = useState(false)

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  useEffect(() => {
    // Check if both fields are filled and email is valid
    const isEmailValid = emailRegex.test(formData.email)
    setIsValid(formData.name.trim() !== '' && isEmailValid)
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const formData = new FormData(event.currentTarget)
    await fetch('/api/add-to-waitlist', {
        method: 'POST',
        body: formData,
      })
      toast.success('Hooray! You are on our Waitlist')
 
    } catch (error) {
      console.error(error)
      toast.error('Error adding to Waitlist')
    } 
  }

  return (
    <form className='flex flex-col space-y-4' onSubmit={onSubmit}>
      <Input 
        type="text" 
        name="name" 
        className='text-black' 
        placeholder='Enter your name'
        value={formData.name}
        onChange={handleInputChange}
      />
      <Input 
        className='text-black' 
        type="email" 
        name="email" 
        placeholder='Enter your email'
        value={formData.email}
        onChange={handleInputChange}
      />
      <Button 
        type="submit" 
        className="border p-2 rounded-md"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  )
}