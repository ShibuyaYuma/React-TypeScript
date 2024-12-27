import React from 'react';

//const items = ['りんご', 'みかん', 'バナナ'];

const items = [
    { id: 1, name: 'りんご' },
    { id: 2, name: 'みかん' },
    { id: 3, name: 'バナナ' },
  ];

const List: React.FC = () => (
    <ul>
        {items.map((item) => (
        //<li>{item}</li>
        <li key={item.id}>{item.name}</li>
        ))}
    </ul>
);

export default List;