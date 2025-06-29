"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PricingTable } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <div className="flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-4xl bg-gradient-to-b from-emerald-950/30 to-transparent border border-emerald-900/30 shadow-xl rounded-2xl">
        <CardContent className="p-6 md:p-10">
          <PricingTable
            checkoutProps={{
              appearance: {
                elements: {
                  drawerRoot: {
                    zIndex: 2000,
                  },
                },
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Pricing;
