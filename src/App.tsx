import { Sidebar } from './components/Sidebar';
import { Header } from "./components/Header"
import { Post } from "./components/Post"

import React from 'react';
import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      name: "Anselmo Dias",
      avatarUrl: 'https://avatars.githubusercontent.com/u/96529532?s=400&u=78faee6d76286461b848ab25a32c94bcc84f3025&v=4',
      role: "Developer | FRONT-END",
    },
    content: [
        { type:'paragraph', content: 'Fala galeraa 👋'},
        { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz'},
        { type:'paragraph', content:'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content: 'Anselmo-Design/barberPage'}
    ],
    publishedAt: new Date('2022-10-30 20:00:00'),
  },

  {
    id: 2,
    author: {
      name: "Carlos leon",
      avatarUrl: 'https://avatars.githubusercontent.com/u/96529532?s=400&u=78faee6d76286461b848ab25a32c94bcc84f3025&v=4',
      role: "Developer | BACK-END",
    },
    content: [
        { type:'paragraph', content: 'Fala galeraa 👋'},
        { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz'},
        { type:'paragraph', content:'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content: 'Anselmo-Design/barberPage'}
    ],
    publishedAt: new Date('2022-10-30 20:00:00'),
  },
];


export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar  />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publisheAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  )
}
