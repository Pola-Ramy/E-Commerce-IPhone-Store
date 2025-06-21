const CurentFormat = new Intl.NumberFormat(undefined, {
    currency: 'usd',
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

const Formatcurrency = (number) => {
    return CurentFormat.format(number);
};

export default Formatcurrency;