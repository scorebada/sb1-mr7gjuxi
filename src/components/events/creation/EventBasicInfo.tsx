import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { EventType } from "../../../types/event/base";
import { FormField } from "../../common/FormField";

interface EventBasicInfoProps {
  name: string;
  type: EventType;
  onNameChange: (name: string) => void;
  onTypeChange: (type: EventType) => void;
}

export function EventBasicInfo({
  name,
  type,
  onNameChange,
  onTypeChange,
}: EventBasicInfoProps) {
  return (
    <stackLayout>
      <FormField
        label="Event Name"
        required
      >
        <textField
          text={name}
          onTextChange={(e) => onNameChange(e.value)}
          className="input-neon"
        />
      </FormField>

      <FormField
        label="Event Type"
        required
      >
        <listPicker
          items={Object.values(EventType)}
          selectedIndex={Object.values(EventType).indexOf(type)}
          onSelectedIndexChange={(e) => 
            onTypeChange(Object.values(EventType)[e.value])
          }
          className="picker-neon"
        />
      </FormField>
    </stackLayout>
  );
}