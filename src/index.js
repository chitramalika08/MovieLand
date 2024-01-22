import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import BookList from './BookList';
import EventExamples from './Event';
import BookList1 from './booklist1';
import EventExamples2 from './Event1';
import MovieCard from './Movielist';
import App1 from './App1';


function Greeting() {
  return <h2>My First Component</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User />
    <App />

    <Greeting></Greeting>
    <BookList></BookList>
    <BookList1></BookList1>
    <EventExamples></EventExamples>
    <EventExamples2></EventExamples2>
    <MovieCard></MovieCard>
    <App1></App1>
  </React.StrictMode>
);


