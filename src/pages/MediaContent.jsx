import './MediaContent.css'

const MediaContent = () => {
  return (
    <div className="media-page">
      <section className="media-hero">
        <div className="container">
          <h1>Media & Content</h1>
          <p className="lead">
            Professional media content that documents South Sudanese experiences 
            with journalistic integrity and cultural authenticity.
          </p>
        </div>
      </section>

      <section className="media-grid-section">
        <div className="container">
          <div className="media-grid">
            <div className="media-category">
              <div className="media-icon">📹</div>
              <h2>Videos</h2>
              <p>Documentary films, interviews, and cultural event coverage produced to broadcast standards.</p>
              <div className="media-placeholder">Video content coming soon</div>
            </div>
            
            <div className="media-category">
              <div className="media-icon">🎙️</div>
              <h2>Podcasts</h2>
              <p>In-depth conversations with community leaders and cultural practitioners.</p>
              <div className="media-placeholder">Podcast series in development</div>
            </div>
            
            <div className="media-category">
              <div className="media-icon">📸</div>
              <h2>Photo Essays</h2>
              <p>Visual storytelling that captures South Sudanese life and cultural heritage.</p>
              <div className="media-placeholder">Photo collections coming soon</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MediaContent