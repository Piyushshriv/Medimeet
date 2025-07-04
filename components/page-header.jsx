"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Reusable page header component with back button and title
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icon component to display next to the title
 * @param {string} props.title - Page title
 * @param {string} [props.backLink="/"] - URL to navigate back to
 * @param {string} [props.backLabel="Back to Home"] - Text for the back link
 */
export function PageHeader({
  icon,
  title,
  backLink = "/",
  backLabel = "Back to Home",
}) {
  return (
    <div className="flex flex-col gap-5 mb-8">
      <Link href={backLink} passHref>
        <Button
          variant="outline"
          size="sm"
          className="border-emerald-900/30"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {backLabel}
        </Button>
      </Link>

      <div className="flex items-end gap-2">
        {icon && (
          <div className="text-emerald-400">
            {React.cloneElement(icon, {
              className: "h-12 md:h-14 w-12 md:w-14",
            })}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold gradient-title">
          {title}
        </h1>
      </div>
    </div>
  );
}
