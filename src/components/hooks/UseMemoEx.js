import React, { useMemo, useState } from 'react'

const UseMemoEx = ({num}) => {
    const [input, setInput] = useState('');

    const expensiveCalculation = useMemo(() => {
        console.log('Calculating...');
        return num * 2;
    }, [num]);

    return (
        <div>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <p>Result of calculation: {expensiveCalculation}</p>
        </div>
    );
}


export default UseMemoEx
