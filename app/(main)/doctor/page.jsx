import { redirect } from "next/navigation";
import { Calendar, Clock, DollarSign } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getCurrentUser } from "@/actions/onboarding";
import { getDoctorAppointments, getDoctorAvailability } from "@/actions/doctor";
import { getDoctorEarnings, getDoctorPayouts } from "@/actions/payout";

import DoctorAppointmentsList from "./_components/appiontment-list";
import { AvailabilitySettings } from "./_components/availability-settings";
import { DoctorEarnings } from "./_components/doctor-earnings";

export default async function DoctorDashboardPage() {
  // Get logged-in user
  const user = await getCurrentUser();

  if (!user || user.role !== "DOCTOR") {
    redirect("/onboarding");
  }

  if (user.verificationStatus !== "VERIFIED") {
    redirect("/doctor/verification");
  }

  // Fetch all data in parallel
  const [appointmentsData, availabilityData, earningsData, payoutsData] =
    await Promise.all([
      getDoctorAppointments(),
      getDoctorAvailability(),
      getDoctorEarnings(),
      getDoctorPayouts(),
    ]);

  return (
    <Tabs
      defaultValue="earnings"
      className="grid grid-cols-1 md:grid-cols-4 gap-6"
    >
      {/* Sidebar Tabs */}
      <TabsList className="md:col-span-1 bg-muted/30 border h-14 md:h-40 flex sm:flex-row md:flex-col w-full p-2 md:p-1 rounded-md md:space-y-2 sm:space-x-2 md:space-x-0">
        <TabsTrigger
          value="earnings"
          className="flex-1 md:flex md:items-center md:justify-start md:px-4 md:py-3 w-full"
        >
          <DollarSign className="h-4 w-4 mr-2 hidden md:inline" />
          <span>Earnings</span>
        </TabsTrigger>
        <TabsTrigger
          value="appointments"
          className="flex-1 md:flex md:items-center md:justify-start md:px-4 md:py-3 w-full"
        >
          <Calendar className="h-4 w-4 mr-2 hidden md:inline" />
          <span>Appointments</span>
        </TabsTrigger>
        <TabsTrigger
          value="availability"
          className="flex-1 md:flex md:items-center md:justify-start md:px-4 md:py-3 w-full"
        >
          <Clock className="h-4 w-4 mr-2 hidden md:inline" />
          <span>Availability</span>
        </TabsTrigger>
      </TabsList>

      {/* Content Panels */}
      <div className="md:col-span-3">
        <TabsContent value="earnings" className="border-none p-0">
          <DoctorEarnings
            earnings={earningsData?.earnings ?? {}}
            payouts={payoutsData?.payouts ?? []}
          />
        </TabsContent>

        <TabsContent value="appointments" className="border-none p-0">
          <DoctorAppointmentsList
            appointments={appointmentsData?.appointments ?? []}
          />
        </TabsContent>

        <TabsContent value="availability" className="border-none p-0">
          <AvailabilitySettings slots={availabilityData?.slots ?? []} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
