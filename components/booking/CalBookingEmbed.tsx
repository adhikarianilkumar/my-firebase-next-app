
"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalBookingEmbedProps {
  calLink: string;
}

export default function CalBookingEmbed({
  calLink,
}: CalBookingEmbedProps) {
  useEffect(() => {
    let mounted = true;

    async function configureCalendar() {
      try {
        const cal = await getCalApi();

        if (!mounted) return;

        cal("ui", {
          theme: "light",
          styles: {
            branding: {
              brandColor: "#075FC7",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (error) {
        console.error("Unable to configure Cal.com:", error);
      }
    }

    void configureCalendar();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-[760px] w-full overflow-hidden">
      <Cal
        calLink={calLink}
        config={{
          layout: "month_view",
          theme: "light",
        }}
        style={{
          width: "100%",
          height: "760px",
          overflow: "scroll",
        }}
      />
    </div>
  );
}
