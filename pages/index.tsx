import React from "react";
import { Button, Htag, P, Tag } from "@/components/index";



export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance="primary" arrow="right">кнопка</Button>
      <Button appearance="ghost" arrow="down">кнопка 2</Button>
      <P size='s'>Small</P>
      <P size='m'>Medium</P>
      <P size='l'>Large</P>
      <Tag color='ghost'>ghost</Tag>
      <Tag color='red'>red</Tag>
      <Tag color='green'>green</Tag>
      <Tag color='grey'>grey</Tag>
      <Tag color='primary'>primary</Tag>
    </>
  )
}
