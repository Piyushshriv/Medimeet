"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SlotPicker({ days = [], onSelectSlot }) {
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Find the first day with slots as the default tab
  const firstDayWithSlots = days.find((day) => day.slots.length > 0)?.date ?? days[0]?.date;
  const [activeTab, setActiveTab] = useState(firstDayWithSlots);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const confirmSelection = () => {
    if (selectedSlot) {
      onSelectSlot(selectedSlot);
    }
  };

  if (!days || days.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No available days to show.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="w-full justify-start overflow-x-auto">
          {days.map((day) => (
            <TabsTrigger
              key={day.date}
              value={day.date}
              disabled={day.slots.length === 0}
              className={day.slots.length === 0 ? "opacity-50 cursor-not-allowed" : ""}
            >
              <div className="flex gap-2">
                <div className="opacity-80">
                  {format(new Date(day.date), "MMM d")}
                </div>
                <div>({format(new Date(day.date), "EEE")})</div>
              </div>
              {day.slots.length > 0 && (
                <div className="ml-2 bg-emerald-900/30 text-emerald-400 text-xs px-2 py-1 rounded">
                  {day.slots.length}
                </div>
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        {days.map((day) => (
          <TabsContent key={day.date} value={day.date} className="pt-4">
            {day.slots.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No available slots for this day.
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">
                  {format(new Date(day.date), "EEEE, MMMM d, yyyy")}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {day.slots.map((slot) => {
                    const isSelected = selectedSlot?.startTime === slot.startTime;
                    return (
                      <Card
                        key={slot.startTime}
                        onClick={() => handleSlotSelect(slot)}
                        className={`cursor-pointer border transition-all ${
                          isSelected
                            ? "bg-emerald-900/30 border-emerald-600"
                            : "border-emerald-900/20 hover:border-emerald-700/40"
                        }`}
                      >
                        <CardContent className="p-3 flex items-center">
                          <Clock
                            className={`h-4 w-4 mr-2 ${
                              isSelected
                                ? "text-emerald-400"
                                : "text-muted-foreground"
                            }`}
                          />
                          <span
                            className={
                              isSelected
                                ? "text-white"
                                : "text-muted-foreground"
                            }
                          >
                            {format(new Date(slot.startTime), "h:mm a")}
                          </span>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex justify-end">
        <Button
          onClick={confirmSelection}
          disabled={!selectedSlot}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          Continue
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
