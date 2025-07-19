const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: 'usd',
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

const formatCurrency = (number) => {
    return currencyFormatter.format(number);
};

export default formatCurrency; 