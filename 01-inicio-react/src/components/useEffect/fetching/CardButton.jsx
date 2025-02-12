const CardButton = (args) => {
    const { css, onClick, children } = args;

    return <button onClick={onClick} className={css}>{children}</button>;
};

export default CardButton;