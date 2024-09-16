import SwotCard from './SwotCard';
import {swotData} from '../utils/data';

function Diagnosis() {
    return (
        <>
            <h1 className="text-3xl py-5">1. Diagnosis (SWOT)</h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {swotData.map((data) => {
                    console.log("data", data);
                    return (
                        <SwotCard key={data.id} id={data.id} title={data.type} items={data.items} />
                    )
                    
                })}
            </div>
        </>
    );
}

export default Diagnosis;