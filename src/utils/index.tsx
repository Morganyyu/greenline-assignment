export type Item = [string, number];
export type Items = Item[];

export const calculateDiscountedTotal = (
    [itemName, itemAmount]: Item,
    pricePerItem: number
) => {
    const discounts: { [key: string]: Function } = {
        apples: (amount: number) => {
            if (amount === 1) {
                return pricePerItem;
            }
            return pricePerItem * amount * 0.8;
        },
        grapes: (amount: number) => {
            if (amount === 1) {
                return pricePerItem;
            }
            if (amount % 2 === 0) {
                return pricePerItem * amount * 0.5;
            }
            return (amount - 1) * pricePerItem * 0.5 + pricePerItem;
        },
        peaches: (amount: number) => amount * pricePerItem,
    };

    return discounts[itemName](itemAmount);
};

export const calculatePurchaseTotal = (items: Items) => {
    const prices: { [key: string]: number } = {
        apples: 3,
        grapes: 5,
        peaches: 7,
    };

    const total = items.reduce((acc, current) => {
        const itemTotal =
            current[1] < 1
                ? 0
                : calculateDiscountedTotal(current, prices[current[0]]);
        return acc + itemTotal;
    }, 0);

    return parseFloat(total.toFixed(2));
};
