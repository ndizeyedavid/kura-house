import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = {
  params: Promise<{ id?: string }>;
};

export default async function EventDetailsPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  if (!id || typeof id !== "string") notFound();

  const event = await prisma.event.findUnique({
    where: { id },
  });

  if (!event) notFound();

  return (
    <div className="container py-5" style={{ paddingTop: 240 }}>
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="mb-3">
            <Link href="/events" className="text-decoration-none">
              ← Back to events
            </Link>
          </div>

          <h1 className="h3 mb-2">{event.title}</h1>
          <div className="text-muted mb-4">
            {event.category} • {new Date(event.dateTime).toLocaleString()} •{" "}
            {event.location}
          </div>

          {event.coverImageUrl ? (
            <img
              src={event.coverImageUrl}
              alt={event.title}
              style={{
                width: "100%",
                maxHeight: 420,
                objectFit: "cover",
                borderRadius: 16,
              }}
            />
          ) : null}

          <div className="mt-4">
            <h2 className="h5">Summary</h2>
            <p className="text-muted">{event.shortSummary}</p>
          </div>

          <div className="mt-4">
            <h2 className="h5">Details</h2>
            <div style={{ whiteSpace: "pre-wrap" }}>
              {event.fullDescription}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="fw-semibold mb-2">Event info</div>
              <div className="small text-muted">Category</div>
              <div className="mb-3">{event.category}</div>
              <div className="small text-muted">Date & time</div>
              <div className="mb-3">
                {new Date(event.dateTime).toLocaleString()}
              </div>
              <div className="small text-muted">Location</div>
              <div>{event.location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
