import React, { useState } from 'react';

interface ListItem {
    id: number;
    text: string;
    likes: number;
}

export default function List(): JSX.Element {
    const [listItems, setListItems] = useState<ListItem[]>([
        { id: 1, text: 'Item 1', likes: 0},
        { id: 2, text: 'Item 2', likes: 0 },
        { id: 3, text: 'Item 3', likes: 0 }
    ]);

    const handleLikeButtonClick = (id: number): void => {
        setListItems(listItems.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    likes: item.likes + 1,
                };
            }
            return item;
        }))
    }

    return (
        <div>
            <ul>
                {listItems.map(listItem => (
                    <li key={listItem.id}>
                        <span>{listItem.text}</span>
                        <button type="button" onClick={() => handleLikeButtonClick(listItem.id)}>Like {listItem.likes}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}