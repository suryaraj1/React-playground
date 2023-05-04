import React, { useState } from 'react';

// UI:
// render items in view
// render cart items from list

interface Item {
    id: number;
    name: string;
    price: number;
}

interface CartItem extends Item {
    quantity: number;
}

const Items: Item[] = [
    { id: 1, name: 'Item 1', price: 10},
    { id: 2, name: 'Item 2', price: 20},
    { id: 3, name: 'Item 3', price: 30}
]

export default function Cart(): JSX.Element {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addItemToCart = (item: Item): void => {
        const itemInCart = cartItems.find(x => x.id === item.id);
        if (itemInCart) {
            setCartItems(cartItems.map(cartItem => 
                cartItem.id === itemInCart.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem))
        } else {
            // pushing item to cart if no existence found
            setCartItems([...cartItems, {...item, quantity: 1}])
        }
    }

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {Items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} {' '}
                        <button onClick={() => addItemToCart(item)}>Add to cart</button>
                    </li>
                ))}
            </ul>
            {cartItems.length > 0 && (
                <div>
                    <h2>Cart:</h2>
                    <ul>
                        {cartItems.map(cartItem => (
                            <li key={cartItem.id}>
                                {cartItem.name} - ${cartItem.price} x {cartItem.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}