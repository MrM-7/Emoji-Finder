import ListItem from "./ListItem";

/* eslint-disable react/prop-types */
export default function List({ lists }) {
  
    return (
      <div>
        <ul>
          {lists && lists.map((list) => (
            <ListItem key={list.slug} {...list}/>
          ))}
        </ul>
      </div>
    );
  }
  