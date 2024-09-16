import Introduction from './Introduction';
import Diagnosis from './Diagnosis';
import StrategicObjectives from './StrategicObjectives';

function Main() {
  return (
    <main className="grid-rows-4 px-12 py-2">
      <Introduction />
      <Diagnosis />
      <StrategicObjectives />
    </main>
  )
}

export default Main;