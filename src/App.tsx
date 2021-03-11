import React, { useState, useReducer } from "react";
import { calculatePurchaseTotal } from "./utils";
import { initialState, reducer } from "./reducer";

import "./App.css";

export type Item = [string, number];
export type Items = Item[];

const defaultItems: Items = [
    ["apples", 0],
    ["grapes", 0],
    ["peaches", 0],
];

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [items, setItems] = useState(defaultItems);
    const [purchaseTotal, setPurchaseTotal] = useState(0);

    const resetState = () => {
        setItems(defaultItems);
        setPurchaseTotal(0);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedValues: Items = items.map((item) =>
            item[0] === e.target.name
                ? [item[0], parseInt(e.target.value)]
                : item
        );

        setItems(updatedValues);
    };

    const onMakePurchase = () => {
        dispatch({ type: "PURCHASE", items, total: purchaseTotal });
        resetState();
    };

    return (
        <div className="App">
            <section>
                <h3>Checkout Interface</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setPurchaseTotal(calculatePurchaseTotal(items));
                    }}
                >
                    {items.map((item) => (
                        <div key={item[0]}>
                            <label htmlFor={`${item[0]}`}>
                                {item[0]}
                                <input
                                    id={`${item[0]}`}
                                    name={`${item[0]}`}
                                    type="number"
                                    min="0"
                                    step="1"
                                    onChange={onChange}
                                    value={item[1]}
                                />
                            </label>
                        </div>
                    ))}
                    <button type="submit">Calculate Total</button>
                </form>
                <div>Purchase Total: ${purchaseTotal}</div>
                {purchaseTotal !== 0 && (
                    <button type="button" onClick={onMakePurchase}>
                        Make Purchase
                    </button>
                )}
            </section>
            <section>
                <h3>Admin Interface</h3>
                <div>
                    {state.fruits.map(({ name, inventory, sold }) => (
                        <>
                            <h4>{name}</h4>
                            <div>Inventory: {inventory}</div>
                            <div>Sold: {sold}</div>
                        </>
                    ))}
                </div>
                <h4>Purchase History</h4>
                {state.purchaseRecord?.map(({ date, purchaseTotal }) => (
                    <p>
                        <span>Purchase Time: {date}</span> |
                        <span>Purchase: Total: {purchaseTotal}</span>
                    </p>
                ))}
                <h3>Net Profit: {state.netProfit}</h3>
            </section>
        </div>
    );
}

export default App;
