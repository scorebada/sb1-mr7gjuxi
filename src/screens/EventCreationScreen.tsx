import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { EventType } from "../types/event";
import { HolographicCard } from "../components/common/HolographicCard";

export function EventCreationScreen() {
  const [step, setStep] = React.useState(1);
  const [eventData, setEventData] = React.useState({
    name: "",
    type: EventType.HOUSE_PARTY,
    date: new Date(),
    capacity: 0,
  });

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  return (
    <scrollView style={styles.container}>
      <stackLayout style={styles.wizard}>
        <HolographicCard>
          <label className="text-3xl font-bold text-white mb-4">
            Create New Event
          </label>
          
          {step === 1 && (
            <stackLayout>
              <label className="text-neon-blue mb-2">Event Name</label>
              <textField
                text={eventData.name}
                onTextChange={(e) => 
                  setEventData(prev => ({
                    ...prev,
                    name: e.value
                  }))
                }
                className="input-neon mb-4"
              />
              
              <label className="text-neon-blue mb-2">Event Type</label>
              <listPicker
                items={Object.values(EventType)}
                selectedIndex={Object.values(EventType)
                  .indexOf(eventData.type)}
                onSelectedIndexChange={(e) => 
                  setEventData(prev => ({
                    ...prev,
                    type: Object.values(EventType)[e.value]
                  }))
                }
                className="picker-neon mb-4"
              />
              
              <button
                text="Next"
                className="btn-neon"
                onTap={handleNext}
              />
            </stackLayout>
          )}
          
          {/* Add more steps here */}
        </HolographicCard>
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  wizard: {
    padding: 16,
  },
});