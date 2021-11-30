import React, { useEffect } from 'react'
import { useInput } from '../../hooks';

const BlockMinMax = ({ clearAll }) => {
    const minValue = useInput('');
    const maxValue = useInput('');

    useEffect(() => {
        if (clearAll) {
            minValue.setValue('');
            maxValue.setValue('');
        }
    }, [clearAll, maxValue, minValue])

    return (
        <div className="block-min-max">
            <input value={minValue.value} onChange={(e) => minValue.setValue(e.target.value)} type="text" placeholder="Min" />
            <span>to</span>
            <input value={maxValue.value} onChange={maxValue.onChange} type="text" placeholder="Max" />
        </div>
    )
}

export default BlockMinMax
