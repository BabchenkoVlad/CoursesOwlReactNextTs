import React, {useEffect, useState} from "react";
import { Button, Htag, P, Tag, Rating } from "@/components/index";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "@/interfaces/menu.interfaces";



function Home( { menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3)
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
      <Rating rating={rating} isEditable setRating={setRating}/>
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
