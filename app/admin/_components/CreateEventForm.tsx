"use client";

import { useMemo, useState } from "react";

type Props = {
  onCreated?: () => void;
};

export default function CreateEventForm({ onCreated }: Props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Education");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [shortSummary, setShortSummary] = useState("");
  const [fullDescription, setFullDescription] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const badgeLabel = useMemo(() => "Published", []);
  const badgeClass = useMemo(() => "text-bg-success", []);

  const resetForm = () => {
    setTitle("");
    setCategory("Education");
    setDate("");
    setTime("");
    setLocation("");
    setCoverImageUrl("");
    setCoverImageFile(null);
    setShortSummary("");
    setFullDescription("");
  };

  const uploadCoverImage = async () => {
    if (!coverImageFile) return null;

    const form = new FormData();
    form.append("file", coverImageFile);

    setUploadingImage(true);
    try {
      const res = await fetch("/api/uploads/cloudinary", {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Image upload failed (${res.status})`);
      }

      const data = (await res.json()) as { url?: string };
      if (!data.url) throw new Error("Image upload failed");

      return data.url;
    } finally {
      setUploadingImage(false);
    }
  };

  const onSubmit = async () => {
    try {
      setSubmitting(true);
      setError("");
      setSuccess("");

      if (!title.trim()) throw new Error("Event title is required");
      if (!category.trim()) throw new Error("Category is required");
      if (!date) throw new Error("Date is required");
      if (!time) throw new Error("Time is required");
      if (!location.trim()) throw new Error("Location is required");
      if (!shortSummary.trim()) throw new Error("Short summary is required");
      if (!fullDescription.trim())
        throw new Error("Full description is required");

      const dateTime = new Date(`${date}T${time}`).toISOString();

      const uploadedUrl = await uploadCoverImage();
      const finalCoverUrl =
        uploadedUrl ?? (coverImageUrl.trim() ? coverImageUrl.trim() : null);

      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          dateTime,
          location,
          coverImageUrl: finalCoverUrl,
          shortSummary,
          fullDescription,
          status: "PUBLISHED",
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Failed to create event (${res.status})`);
      }

      setSuccess("Event published successfully.");
      resetForm();
      onCreated?.();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create event");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card admin-card shadow-sm">
      <div className="card-header bg-white">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="fw-semibold">Create New Event</div>
            <div className="text-muted small">
              Fill details and publish later.
            </div>
          </div>
          <span className={`badge ${badgeClass}`}>{badgeLabel}</span>
        </div>
      </div>
      <div className="card-body">
        {error ? <div className="alert alert-danger">{error}</div> : null}
        {success ? <div className="alert alert-success">{success}</div> : null}

        <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
          <div className="col-12 col-md-8">
            <label className="form-label">Event title</label>
            <input
              className="form-control"
              placeholder="e.g. Community Tree Planting Day"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Education">Education</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Health">Health</option>
              <option value="Community">Community</option>
            </select>
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label">Time</label>
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label">Status</label>
            <input className="form-control" value="Published" disabled />
          </div>

          <div className="col-12">
            <label className="form-label">Location</label>
            <input
              className="form-control"
              placeholder="e.g. Kigali — Gisozi"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Cover image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0] ?? null;
                setCoverImageFile(f);
                if (f) setCoverImageUrl("");
              }}
            />
            <div className="form-text">
              Choose an image to upload to Cloudinary. (Optional)
            </div>

            <div className="mt-2">
              <label className="form-label">Or paste image URL</label>
              <input
                className="form-control"
                placeholder="https://..."
                value={coverImageUrl}
                onChange={(e) => {
                  setCoverImageUrl(e.target.value);
                  if (e.target.value.trim()) setCoverImageFile(null);
                }}
              />
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">Short summary</label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="A short description shown on the event card..."
              value={shortSummary}
              onChange={(e) => setShortSummary(e.target.value)}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Full description</label>
            <textarea
              className="form-control"
              rows={6}
              placeholder="Full event details shown in the modal / details page..."
              value={fullDescription}
              onChange={(e) => setFullDescription(e.target.value)}
            />
          </div>

          <div className="col-12">
            <div className="d-flex flex-wrap gap-2 justify-content-end">
              <button
                type="button"
                className="btn btn-primary"
                disabled={submitting || uploadingImage}
                onClick={() => onSubmit()}
              >
                {uploadingImage
                  ? "Uploading..."
                  : submitting
                  ? "Publishing..."
                  : "Publish"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
