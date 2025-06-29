import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SPECIALTIES } from "@/lib/specialities";

export const metadata = {
  title: "Find Doctors - MediMeet",
  description: "Browse and book appointments with top healthcare providers.",
};

export default function DoctorsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Find Your Doctor
        </h1>
        <p className="text-muted-foreground text-lg">
          Browse by specialty or view all available healthcare providers.
        </p>
      </section>

      <section
        aria-label="Browse doctor specialties"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {SPECIALTIES.map((specialty) => (
          <Link
            key={specialty.name}
            href={`/doctors/${specialty.name}`}
            className="group"
          >
            <Card className="h-full cursor-pointer border-emerald-900/20 group-hover:border-emerald-700/40 transition-colors">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mb-4">
                  {/* If specialty.icon is a component */}
                  {typeof specialty.icon === "function" ? (
                    <specialty.icon className="h-6 w-6 text-emerald-400" />
                  ) : (
                    <span className="text-emerald-400">{specialty.icon}</span>
                  )}
                </div>
                <h3 className="font-medium text-white">{specialty.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}
