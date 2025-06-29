"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"; // Make sure you import Card!
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Star, User } from "lucide-react";

export default function DoctorCard({ doctor }) {
  return (
    <Card className="border-emerald-900/20 hover:border-emerald-700/40 transition-all">
      <CardContent className="pt-4">
        <div className="flex flex-col gap-4">
          {/* Avatar and Info */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center flex-shrink-0">
              {doctor.imageUrl ? (
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <User className="h-6 w-6 text-emerald-400" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                <h3 className="text-lg font-medium text-white">
                  {doctor.name}
                </h3>
                <Badge
                  variant="outline"
                  className="bg-emerald-900/20 border-emerald-900/30 text-emerald-500"
                >
                  <Star className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {doctor.specialty} · {doctor.experience} years experience
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="line-clamp-2 text-sm text-muted-foreground">
            {doctor.description}
          </div>

          {/* Button */}
          <Button
            asChild
            className="w-full bg-emerald-500 hover:bg-emerald-600 mt-2"
          >
            <Link href={`/doctors/${doctor.specialty}/${doctor.id}`}>
              <Calendar className="h-4 w-4 mr-2" />
              View Profile & Book
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
