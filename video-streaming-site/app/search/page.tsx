import SearchLayout from '@/components/SearchPage/SearchLayout'
import { redirect } from 'next/navigation';
import React from 'react'

interface searchPageProps{
  searchParams:Promise<{ query: string }>
}

export default async function SearchPage({searchParams}:searchPageProps) {
  const {query} =await searchParams; 
  if(!query){
    redirect('/home');
  }
  return (
    <SearchLayout query={query}/>
  )
}
