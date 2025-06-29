// app/(main)/doctors/[specialty]/[id]/layout.js

import { getDoctorById } from "@/actions/appointments";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/page-header";

export async function generateMetadata({ params }) {
  const id = params?.id;

  const { doctor } = await getDoctorById(id);

  if (!doctor) {
    return {
      title: "Doctor Not Found - MediMeet",
      description: "This doctor profile could not be found.",
    };
  }

  return {
    title: `Dr. ${doctor.name} - MediMeet`,
    description: `Book an appointment with Dr. ${doctor.name}, ${doctor.specialty} specialist with ${doctor.experience} years of experience.`,
  };
}

export default async function DoctorProfileLayout({ children, params }) {
  const id = params?.id;
  const specialty = params?.specialty;

  const { doctor } = await getDoctorById(id);

  if (!doctor) {
    redirect("/doctors");
  }

  return (
    <div className="container mx-auto">
      <PageHeader
        title={`Dr. ${doctor.name}`}
        backLink={`/doctors/${specialty}`}
        backLabel={`Back to ${specialty}`}
      />
      {children}
    </div>
  );
}
