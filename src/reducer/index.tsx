export type Fruit = {
    id: number;
    name: string;
    inventory: number;
    sold: number;
    cost: number;
    price: number;
};

export type State = {
    fruits: Fruit[];
    netProfit: number;
    purchaseRecord: any[];
};

export type Action = {
    type: string;
    items: [string, number][];
    total: number;
};

export const initialState = {
    fruits: [
        {
            id: 1,
            name: "apples",
            inventory: 40,
            sold: 0,
            cost: 2.5,
            price: 5.0,
        },
        {
            id: 2,
            name: "grapes",
            inventory: 60,
            sold: 0,
            cost: 1.0,
            price: 3.0,
        },
        {
            id: 3,
            name: "peaches",
            inventory: 53,
            sold: 0,
            cost: 3.0,
            price: 7.0,
        },
    ],
    netProfit: -319,
    purchaseRecord: [],
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "PURCHASE":
            // Not sure what the error means: Type 'void' is not assignable to type 'Fruit[]'.
            const fruits: any = action.items.map(([name, amount]) => {
                const fruitItem: any = state.fruits.find(
                    (fruit) => fruit.name === name
                );

                return {
                    ...fruitItem,
                    inventory: fruitItem.inventory - amount,
                    sold: fruitItem.sold + amount,
                };
            });

            return {
                ...state,

                fruits,

                netProfit: state.netProfit + action.total,

                purchaseRecord: [
                    ...state.purchaseRecord,
                    {
                        date: new Date().toLocaleString(),
                        purchaseTotal: action.total,
                    },
                ],
            };
        default:
            return state;
    }
};
