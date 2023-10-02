import React from "react";
import { Button, Htag } from "@/components/index";



export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance="primary">кнопка</Button>
      <Button appearance="ghost">кнопка 2</Button>
    </>
  )
}
