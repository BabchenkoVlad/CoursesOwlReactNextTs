import React, {useEffect, useState} from "react";
import { Button, Htag, P, Tag, Rating } from "@/components/index";




export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanUp() {
      console.log('unmount ');
      
    }
    
  })

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance="primary" arrow="right" onClick={() => setCounter(counter + 1)}>кнопка</Button>
      <Button appearance="ghost" arrow="down">кнопка 2</Button>
      <P size='s'>Small</P>
      <P size='m'>Medium</P>
      <P size='l'>Large</P>
      <Tag color='ghost'>ghost</Tag>
      <Tag color='red'>red</Tag>
      <Tag color='green'>green</Tag>
      <Tag color='grey'>grey</Tag>
      <Tag color='primary'>primary</Tag>
      <Rating rating={4}/>
    </>
  )
}
