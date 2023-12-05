import React from 'react'
import { Header } from './Header';
import { Card } from './Card';

const someNews = [
  {
    title: 'CNN Acuire BEME',
    date: 'March 20 2022',
    content: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: 'https://source.unsplash.com/user/erondu/600x400',
    category: 'News',
    link: '#'
  },
  {
    title: 'React and the WP-API',
    date: 'March 19 2022',
    content: 'The first ever decoupled starter theme for React & the WP-API.',
    image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
    category: 'News',
    link: '#'
  },
  {
    title: 'Nomad Lifestyle',
    date: 'March 19 2022',
    content: 'Learn our tips and tricks on living a nomadic lifestyle.',
    image: 'https://source.unsplash.com/user/erondu/600x400',
    category: 'Travel',
    link: '#'
  }
];
export const News = () => {
  return (
    <div>
      <Header title={'Latest news'} subtitle={'convering to 2023'}/>
      {/* <Card 
      title={someNews[0].title}
      date={someNews[0].date}
      content={someNews[0].content}
      image={someNews[0].image}
      category={someNews[0].category}
      link={someNews[0].link}
      />

    <Card 
      title={someNews[1].title}
      date={someNews[1].date}
      content={someNews[1].content}
      image={someNews[1].image}
      category={someNews[1].category}
      link={someNews[1].link}
      />

    <Card 
      title={someNews[2].title}
      date={someNews[2].date}
      content={someNews[2].content}
      image={someNews[2].image}
      category={someNews[2].category}
      link={someNews[2].link}
      /> */}

      {
        someNews.map((items , index) => {
          return (
            <Card 
            key={index}
            title={items.title}
            date={items.date}
            content={items.content}
            image={items.image}
            category={items.category}
            link={items.link}
            />
          )
        })
      }
    </div>
  )
}
