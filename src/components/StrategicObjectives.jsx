import {strategicObjectives} from "../utils/data";


function getStatus(compliance) {
    if (compliance <= 35) {
        return <p className="text-red-500">Critic</p>;
    } else if ((compliance <= 75) && (compliance > 35)) {
        return <p className="text-orange-500">Aceptable</p>;
    } else {
        return <p className="text-green-500">Sucess</p>;
    }
}


function StrategicObjectives() {
    return (
        <>
        <h1 className="text-3xl py-5">3. Strategic Objectives</h1>
        <table className="table-auto w-full text-left rtl:text-right text-gray-800">
            <thead className="text-xl text-white bg-cyan-950">
                <tr className="border">
                    <th className="text-center">ID</th>
                    <th className="w-auto">Goal</th>
                    <th className="">Target</th>
                    <th className="">Progress</th>
                    <th className="text-center" >Compliance</th>
                    <th className="text-center">Status</th>
                </tr>
            </thead>
            <tbody className="text-lg bg-gray-50">
                {strategicObjectives.map((objective) => (
                    <tr key={objective.id} className="border-b px-6 py-5 hover:bg-blue-100">
                        <td className="text-center">{objective.id}</td>
                        <td>{objective.goal}</td>
                        <td className="pl-2">{objective.target}</td>
                        <td className="pl-2">{objective.progress}</td>
                        <td className="text-center">{objective.compliance}%</td>
                        <td>{getStatus(objective.compliance)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default StrategicObjectives;