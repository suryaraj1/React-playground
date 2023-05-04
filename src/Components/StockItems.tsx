import React, { useState } from 'react';

interface StockItem {
    id: number;
    name: string;
    price: number;
    isOutOfStock: boolean;
}

interface StockItemProps {
    items: StockItem[];
}

export default function StockItems({items} : StockItemProps): JSX.Element {
    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.id} className={item.isOutOfStock ? 'out-of-stock' : ''}>
                        <span>{item.name}</span>
                        <span>Price: {item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}