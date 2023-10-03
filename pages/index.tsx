import React from "react";
import { Button, Htag } from "@/components/index";



export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance="primary" arrow="right">кнопка</Button>
      <Button appearance="ghost" arrow="down">кнопка 2</Button>
    </>
  )
}
