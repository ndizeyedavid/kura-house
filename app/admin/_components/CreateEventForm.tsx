export default function CreateEventForm() {
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
          <span className="badge text-bg-secondary">Draft</span>
        </div>
      </div>
      <div className="card-body">
        <form className="row g-3">
          <div className="col-12 col-md-8">
            <label className="form-label">Event title</label>
            <input
              className="form-control"
              placeholder="e.g. Community Tree Planting Day"
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label">Category</label>
            <select className="form-select" defaultValue="Education">
              <option value="Education">Education</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Health">Health</option>
              <option value="Community">Community</option>
            </select>
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label">Time</label>
            <input type="time" className="form-control" />
          </div>

          <div className="col-12 col-md-4">
            <label className="form-label">Status</label>
            <select className="form-select" defaultValue="draft">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Location</label>
            <input
              className="form-control"
              placeholder="e.g. Kigali — Gisozi"
            />
          </div>

          <div className="col-12">
            <label className="form-label">Cover image</label>
            <div className="input-group">
              <input
                className="form-control"
                placeholder="Paste image URL (or file upload later)"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                disabled
              >
                Upload
              </button>
            </div>
            <div className="form-text">
              For now, use a URL. Upload can be added later.
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">Short summary</label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="A short description shown on the event card..."
            />
          </div>

          <div className="col-12">
            <label className="form-label">Full description</label>
            <textarea
              className="form-control"
              rows={6}
              placeholder="Full event details shown in the modal / details page..."
            />
          </div>

          <div className="col-12">
            <div className="d-flex flex-wrap gap-2 justify-content-end">
              <button type="button" className="btn btn-outline-secondary">
                Save Draft
              </button>
              <button type="button" className="btn btn-primary">
                Publish
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
