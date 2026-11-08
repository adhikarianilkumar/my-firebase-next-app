
interface MicrosoftBookingsEmbedProps {
  bookingUrl: string;
}

export default function MicrosoftBookingsEmbed({
  bookingUrl,
}: MicrosoftBookingsEmbedProps) {
  return (
    <div className="w-full">
      <iframe
        src={bookingUrl}
        title="Optimal Homecare Consultation Booking"
        width="100%"
        height="950"
        className="w-full border-0"
        loading="eager"
      />
    </div>
  );
}
